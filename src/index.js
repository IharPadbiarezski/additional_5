module.exports = function check(str, bracketsConfig) {
  // your solution
  let array = str.split(''),
    length = array.length,
    stk = [];

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {

      if (array[i] == bracketsConfig[j][0]) {
        if (array[i] == bracketsConfig[j][1] && array[i] == stk[stk.length - 1]) {
          stk.pop();
          continue;
        }
        stk.push(array[i]);
      } else if (array[i] == bracketsConfig[j][1]) {
        if (stk[stk.length - 1] == bracketsConfig[j][0]) {
          stk.pop();
        } else {
          return false;
        }
      }
    }
  }

  if (stk.length == 0) {
    return true;
  } else {
    return false;
  }

}
