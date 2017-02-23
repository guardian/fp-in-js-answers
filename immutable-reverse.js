// Mutable internal variables
function reverse(arr) {
  var newArr = [];
  arr.forEach(el => {
    newArr.unshift(el);
  });
  
  return newArr;
}

// Immutable internal variables
function reverse(arr) {
  function go(newArr, i) {
    if (i === arr.length) return newArr;
    else return go(newArr.concat([arr.length - i]), i + 1);
  }
  
  return go([], 0);
}