const { capitalize } = require('./capitalize');

test('Should return string capitalized', () => {
  const str = capitalize('bangau likes potatoes');
  expect(str).toBe('Bangau likes potatoes');
});

test('Should do nothing if a first char is a digit', () => {
  const str = capitalize('1bangau likes potatoes');
  expect(str).toBe('1bangau likes potatoes');
});