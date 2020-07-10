const { caesarCipher } = require('./caesarCipher');

test('Should shift three chars forward', () => {
  const num = caesarCipher('huihui', 3);
  expect(num).toBe('kxlkxl');
});

test('Should shift two chars forward', () => {
  const num = caesarCipher('huihui', 2);
  expect(num).toBe('jwkjwk');
});

test('Should shift one char forward', () => {
  const num = caesarCipher('huihui', 1);
  expect(num).toBe('ivjivj');
});

test('Should shift zero chars forward', () => {
  const num = caesarCipher('huihui', 0);
  expect(num).toBe('huihui');
});