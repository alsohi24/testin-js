const {sum, multiply, divide } = require('./02-math');

test('adds 1 + 3 to equal 4', () => {
  const res = sum(1,3);
  expect(res).toBe(4);
});

test('should be 4', () => {
  const res = multiply(1,4);
  expect(res).toBe(4);
});

test('divide', () => {
  const res = divide(6,3);
  expect(res).toBe(2);

  const res2 = divide(5,2);
  expect(res2).toBe(2.5);
});

test('divide by ero', () => {
  const res = divide(6,0);
  expect(res).toBeNull();

  const res2 = divide(5,0);
  expect(res2).toBeNull();
});
