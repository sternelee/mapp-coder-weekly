const TagName = "([a-zA-Z_][\\w\\-\\.]*)";
const Attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
const startTagOpen = new RegExp(`^<${TagName}`);
const startTagClose = /^\s*(\/?)>/;
const endTag = new RegExp(`^<\\/${TagName}[^>]*>`);

let html: string;
let Index = 0;
let root;
let currentParent;
let stack: any[] = [];

function init () {
  html = ''
  Index = 0
  root = null
  currentParent = null
  stack = []
}

function advance(n) {
  Index += n;
  html = html.substring(n);
}


function createASTElement(tag, attrs) {
  // 主节点
  return {
    tag: tag.toLowerCase(),
    attrs,
    // parent,
    nodes: []
  };
}


interface InfaceMatch {
  tagName: string
  attrs: {
    [key: string]: string
  }
  start: number
  unarySlash?: string
}

function parseStartTag() {
  //-- 第一步 首先匹配开始标签的左边开头部分 --
  const start = html.match(startTagOpen);
  if (start) {
    const match: InfaceMatch = {
      tagName: start[1],
      attrs: {},
      start: Index
    };
    advance(start[0].length);

    //-- 第二步 循环解析开始标签上的每一个属性键值对 --
    let end, attr;
    while (
      !(end = html.match(startTagClose)) &&
      (attr = html.match(Attribute))
    ) {
      advance(attr[0].length);
      match.attrs[attr[1]] = attr[3]
    }

    //-- 第三步 匹配到开始标签的闭合部分，至此开始标签解析结束 --
    if (end) {
      match.unarySlash = end[1];
      advance(end[0].length);
    }

    // 解析完标签创建一个 AST 节点
    // let element = createASTElement(match.tagName, match.attrs, currentParent);
    const element = createASTElement(match.tagName, match.attrs);

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

    const tagName = end[1]

    const lowerCasedTagName = tagName.toLowerCase();
    let pos;

    // 从栈顶往栈底找，直到找到栈中离的最近的同类型标签
    for (pos = stack.length - 1; pos >= 0; pos--) {
      if (stack[pos].tag === lowerCasedTagName) {
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

function parseText(text) {
  // 文本节点，去掉空文本
  !!text.replace(/ /g, '') && currentParent.nodes.push({
    tag: 'text',
    text
  });
}

function parser(_html: string) {
  html = `<body>${_html}</body>`;

  while (html) {
    const textEnd = html.indexOf("<");
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
    // let text, rest;
    let text
    if (textEnd >= 0) {
      // rest = html.slice(textEnd);
      text = html.substring(0, textEnd);
      advance(textEnd);
    }
    if (textEnd < 0) {
      text = html;
      html = "";
    }
    text && parseText(text);
  }

  setTimeout(() => init(), 5000)

  return root.nodes;
}

export default parser