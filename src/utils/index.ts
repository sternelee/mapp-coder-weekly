export const fixUrl  = (content, url) => {
  let str = content.replace(/(\.\.\/)+/g, ($1) => {
    const len = $1.length / 3;
    return url.split('/').map(v => v + '/').slice(0, 0 - len - 1).join('');
  })
  const rUrl = new webkitURL(url).origin
  str = str.replace(/!\[\]\(([^\)]+)\)/g, ($1, $2) => {
    if ($2.indexOf('://') > -1) return $1
    return `![](${rUrl}${$2})`
  })
  return str
}

export default {}
