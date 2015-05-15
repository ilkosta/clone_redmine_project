var cloneObj = (obj, chkFn) => {
  let cloned = {};
  for (let i in obj) {
    if (chkFn(i)) {
      if (obj[i] && typeof obj[i] === 'object') {
        cloned[i] = cloneObj(obj[i]);
      } else {
        cloned[i] = obj[i];
      }
    }
  }
  return cloned;
};
// 

module.exports =  cloneObj;
