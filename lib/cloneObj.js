'use strict';

var cloneObj = function cloneObj(obj, chkFn) {
  var cloned = {};
  for (var i in obj) {
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

module.exports = cloneObj;