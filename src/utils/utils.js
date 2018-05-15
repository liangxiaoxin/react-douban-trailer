// 获取文档完整的高度
export const  getScrollHeight  = () => {
  return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}

//获取当前可是范围的高度
export const getClientHeight = () => {
  let clientHeight = 0;
  if (document.body.clientHeight && document.documentElement.clientHeight) {
    clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
  }
  else {
    clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
  }
  return clientHeight;
}