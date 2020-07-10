/* eslint-disable prefer-const */
exports.analyze = (array) => {
  let average; let min; let max; let
    length;

  length = array.length;
  // eslint-disable-next-line prefer-destructuring
  min = array.sort((a, b) => (a - b))[0];
  max = array.sort((a, b) => (a - b))[length - 1];

  let sum = 0;
  for (let i = 0; i < length; i += 1) {
    sum += array[i];
  }
  average = sum / length;

  return {
    average, min, max, length,
  };
};