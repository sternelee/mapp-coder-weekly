const tagName = "([a-zA-Z_][\\w\\-\\.]*)";
const attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
const startTagOpen = new RegExp(`^<${tagName}`);
const startTagClose = /^\s*(\/?)>/;
const endTag = new RegExp(`^<\\/${tagName}[^>]*>`);

let index = 0;
function advance(n) {
  index += n;
  html = html.substring(n);
}

function createASTElement(tag, attrs, parent) {
  // 主节点
  return {
    type: 1,
    tag,
    lowerCasedTag: tag.toLowerCase(),
    attrs,
    // parent,
    nodes: []
  };
}

let root;
let currentParent;
let stack = [];

function parseStartTag() {
  //-- 第一步 首先匹配开始标签的左边开头部分 --
  const start = html.match(startTagOpen);
  if (start) {
    const match = {
      tagName: start[1],
      attrs: [],
      start: index
    };
    advance(start[0].length);

    //-- 第二步 循环解析开始标签上的每一个属性键值对 --
    let end, attr;
    while (
      !(end = html.match(startTagClose)) &&
      (attr = html.match(attribute))
    ) {
      advance(attr[0].length);
      match.attrs.push({
        name: attr[1],
        value: attr[3]
      });
    }

    //-- 第三步 匹配到开始标签的闭合部分，至此开始标签解析结束 --
    if (end) {
      match.unarySlash = end[1];
      advance(end[0].length);
    }

    // 解析完标签创建一个 AST 节点
    let element = createASTElement(match.tagName, match.attrs, currentParent);

    if (!root) {
      root = element;
    }

    if (currentParent) {
      currentParent.nodes.push(element);
    }

    // 自闭合就不用压入栈中了
    if (!match.unarySlash) {
      stack.push(element);
      currentParent = element;
    }
  }
}

function parseEndTag() {
  const end = html.match(endTag);
  if (end) {
    advance(end[0].length);

    let tagName = end[1],
      lowerCasedTagName = tagName.toLowerCase();
    let pos;

    // 从栈顶往栈底找，直到找到栈中离的最近的同类型标签
    for (pos = stack.length - 1; pos >= 0; pos--) {
      if (stack[pos].lowerCasedTag === lowerCasedTagName) {
        break;
      }
    }

    // 如果找到了就取出对应的开始标签
    if (pos >= 0) {
      stack.length = pos;
      currentParent = stack[stack.length - 1];
    }
  }
}

const defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;

function parseText(text) {
  if (defaultTagRE.test(text)) {
    // tokens 用于分割普通文本和插值文本
    const tokens = [];
    let lastIndex = (defaultTagRE.lastIndex = 0);
    let match, index;
    while ((match = defaultTagRE.exec(text))) {
      index = match.index;

      // push 普通文本
      if (index > lastIndex) {
        tokens.push(JSON.stringify(text.slice(lastIndex, index)));
      }
      // push 插值表达式
      tokens.push(`_s(${match[1].trim()})`);

      // 游标前移
      lastIndex = index + match[0].length;
    }

    // 将剩余的普通文本压入 tokens 中
    if (lastIndex < text.length) {
      tokens.push(JSON.stringify(text.slice(lastIndex)));
    }
    // vue 的插值文本
    currentParent.nodes.push({
      type: 2,
      expression: tokens.join("+"),
      text
    });
  } else {
    // 文本节点
    currentParent.nodes.push({
      type: 3,
      text
    });
  }
}

let html;

function parseHTML(_html) {
  html = _html;

  while (html) {
    let textEnd = html.indexOf("<");
    if (textEnd === 0) {
      //-- 匹配开始标签 --
      const startTagMatch = html.match(startTagOpen);
      if (startTagMatch) {
        parseStartTag();
        continue;
      }

      //-- 匹配结束标签 --
      const endTagMatch = html.match(endTag);
      if (endTagMatch) {
        parseEndTag();
        continue;
      }
    }

    //-- 匹配文本 --
    let text, rest;
    if (textEnd >= 0) {
      rest = html.slice(textEnd);
      text = html.substring(0, textEnd);
      advance(textEnd);
    }
    if (textEnd < 0) {
      text = html;
      html = "";
    }
    text && parseText(text);
  }

  return root;
}

let tpl = `<div id="index" style="width:100px" class="title"><p>hello, {{ msg }}</p> by DOM哥</div>`;
console.info("生成的AST↓↓↓");
const nodes = parseHTML(tpl)
console.info(stack)
console.info(nodes);
// console.log(Object.keys(nodes))
console.log(JSON.stringify(nodes))
