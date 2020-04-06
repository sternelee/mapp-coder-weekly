export const fixUrl  = (content, url) => {
  return content.replace(/(\.\.\/)+/g, ($1) => {
    const len = $1.length / 3;
    return url.split('/').map(v => v + '/').slice(0, 0 - len - 1).join('');
  })
}

export default {}
