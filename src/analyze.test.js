const { analyze } = require('./analyze');

test('It should be equla to analyze result', () => {
  const num = analyze([1, 10, 1, 5, 6, 7]);
  expect(num).toEqual(
    {
      average: 5,
      min: 1,
      max: 10,
      length: 6,
    },
  );
});