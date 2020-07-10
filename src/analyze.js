exports.analyze = (array) => {
  let average, min, max, length

  length = array.length
  min = array.sort(function (a, b) {
    return (a - b);
  })[0];
  max = array.sort(function (a, b) {
    return (a - b);
  })[length - 1];

  let sum = 0
  for (let i = 0; i < length; i++) {
      sum += array[i]
  }
  average = sum / length

  return { average, min, max, length };
}