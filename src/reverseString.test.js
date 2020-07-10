const { reverseString } = require('./reverseString');

test('Should return reversed string', () => {
  const str = reverseString('bangau likes potatoes');
  expect(str).toBe('seotatop sekil uagnab');
});

test('Should do nothing if a first char is a digit', () => {
  const str = reverseString(' ');
  expect(str).toBe(' ');
});