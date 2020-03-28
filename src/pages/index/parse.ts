const TEXTNODE = 'TEXTNODE';
const COMMENTNODE = 'COMMENTNODE';
const NODESTART = 'NODESTART';
const NODEEND = 'NODEEND';
const NODECLOSESELF = 'NODECLOSESELF';
const COMMENTSTART = 'COMMENTSTART';
const COMMENTEND = 'COMMENTEND';

 function removeAllSpace(str) {
  return str.replace(/\s*/g, '');
}
function removeMultiSpace(str) {
  return str.replace(/\s{2,}/g, " ");
}
function removeEqualSpace(str) {
  return str.replace(/\s*\=\s*/g, '=');
}

function isText(obj) {
  return obj && obj.type == TEXTNODE;
}
 const WxDomParser = (function () {
  function WxDomParser() {
      this.nodeRegex = /(<(\w+)\s*([\s\S]*?)(\/){0,1}>)|<\/(\w+)>|(\{:{0,1}\w+?\})|(<!--)|(-->)/g;
      this.attrRegex = /[\w\-]+=['"][\s\S]*?['"]/g;
  }
  WxDomParser.prototype.parseStart = function (htmlStr, optionRegex) {
      if (optionRegex === void 0) { optionRegex = this.nodeRegex; }
      var matchResult = this.findAllNodes(htmlStr, optionRegex);
      return this.makeWxTree(matchResult);
  };
  WxDomParser.prototype.findAllNodes = function (htmlStr, optionRegex) {
      if (optionRegex === void 0) { optionRegex = this.nodeRegex; }
      var result;
      var allMatches = [], nextIndex = 0;
      while (result = optionRegex.exec(htmlStr)) {
          var match = result[0], startTag = result[1], startTagName = result[2], attr = result[3], endSelf = result[4], endTagName = result[5], exp = result[6], startComment = result[7], endComment = result[8];
          var index = result.index, length_1 = match.length;
          if (index > nextIndex) {
              allMatches.push({
                  type: TEXTNODE,
                  value: htmlStr.slice(nextIndex, index)
              });
          }
          if (exp) {
              allMatches.push({
                  type: TEXTNODE,
                  value: exp
              });
          }
          nextIndex = index + length_1;
          var type = void 0;
          if (startTagName) {
              type = NODESTART;
          }
          else if (endTagName) {
              type = NODEEND;
          }
          else if (startComment) {
              type = COMMENTSTART;
          }
          else if (endComment) {
              type = COMMENTEND;
          }
          else {
              type = NODECLOSESELF;
          }
          allMatches.push({
              type: type, match: match, attr: attr, startTag: startTag, startTagName: startTagName, endSelf: endSelf, endTagName: endTagName, startComment: startComment, endComment: endComment, index: index, length: length_1
          });
      }
      return allMatches;
  };
  WxDomParser.prototype.makeWxTree = function (results) {
      var openTreeList = [{ nodeName: 'ROOT', attr: [], children: [] }];
      for (var i = 0; i < results.length; i++) {
          this.make(results[i], results[i - 1], results[i + 1], openTreeList);
      }
      return openTreeList[0];
  };
  WxDomParser.prototype.make = function (result, last, next, openTreeList) {
      var tree = openTreeList[openTreeList.length - 1];
      if (isText(result)) {
          if (!isText(last) && !isText(next)) {
              if (removeAllSpace(result.value) !== '') {
                  tree.children.push({ nodeName: TEXTNODE, attr: [], children: [result.value] });
              }
          }
          else {
              tree.children.push({ nodeName: TEXTNODE, attr: [], children: [result.value] });
          }
      }
      else {
          if (result.endTagName || result.endComment) {
              openTreeList.pop();
          }
          else {
              var nodeName = result.startTagName, startComment = result.startComment;
              if (result.endSelf) {
                  tree.children.push({ nodeName: nodeName, attr: this.getAttributes(result.attr), children: [] });
              }
              else {
                  if (nodeName) {
                      var newOpenTree = { nodeName: nodeName, attr: this.getAttributes(result.attr), children: [] };
                      tree.children.push(newOpenTree);
                      openTreeList.push(newOpenTree);
                  }
                  if (startComment) {
                      var newOpenTree = { nodeName: COMMENTNODE, attr: [], children: [] };
                      tree.children.push(newOpenTree);
                      openTreeList.push(newOpenTree);
                  }
              }
          }
      }
  };
  WxDomParser.prototype.getAttributes = function (attr) {
      var slimAttr = removeMultiSpace(removeEqualSpace(attr));
      var attrArray = [];
      var attrExpression;
      while (attrExpression = this.attrRegex.exec(attr)) {
          var p = attrExpression[0].split('=');
          attrArray.push({
              name: p[0],
              value: p[1].replace(/["']/g, '')
          });
      }
      return attrArray;
  };
  return WxDomParser;
}());

const parse = new WxDomParser()
export default parse