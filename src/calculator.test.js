const { calculator} = require('./calculator');

test('Should return addition of two numbers', () => {
  const num = calculator.add(3, 3);
  expect(num).toBe(6);
});

test('Should return addition of two strings', () => {
  const num = calculator.add('hui', 'hui');
  expect(num).toBe('huihui');
});

test('Should return substraction of two numbers', () => {
  const num = calculator.subtract(3, 3);
  expect(num).toBe(0);
});

test('Should return not a number', () => {
  const num = calculator.subtract('hui', 'hui');
  expect(num).toBe(NaN);
});

test('Should return multyplication of two numbers', () => {
  const num = calculator.multiply(3, 3);
  expect(num).toBe(9);
});

test('Should return not a number', () => {
  const num = calculator.multiply('hui', 'hui');
  expect(num).toBe(NaN);
});

test('Should return division of two numbers', () => {
  const num = calculator.divide(3, 3);
  expect(num).toBe(1);
});

test('Should return not a number', () => {
  const num = calculator.divide('hui', 'hui');
  expect(num).toBe(NaN);
});

test('Should return Infinity', () => {
  const num = calculator.divide(3, 0);
  expect(num).toBe(Infinity);
});