function map(arr, f) {
  var newArr = [];
  arr.forEach(el => {
    newArr.push(f(el));
  })
  return newArr;
}

// Recursive (no mutable variables)
function map(arr, f) {
  function go(newArr, i) {
    if (i === arr.length) return newArr;
    else return go(newArr.concat([f(arr[i])]), i+1);
  }
  
  return go([], 0);
}