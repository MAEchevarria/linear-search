const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
    if (arrayToSearchThrough.indexOf(valueToFind) != -1) {
        return arrayToSearchThrough.indexOf(valueToFind);
    } else {
        return undefined;
    }
}

exports.linearSearchGlobal = function(valueToFind, arrayToSearchThrough) {
  let arr = [];
  for (let i = 0; i < arrayToSearchThrough.length; i++) {
    if (arrayToSearchThrough[i] === valueToFind) {
      arr.push(i);
    }
  }
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr;
  }
}
