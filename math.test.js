const { add, subtract, multiply, divide } = require('./math.js');

test('menambahkan 2 + 3 sama dengan 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('mengurangi 5 - 3 sama dengan 2', () => {
  expect(subtract(5, 3)).toBe(2);
});

test('perkalian 4 * 3 sama dengan 12', () => {
  expect(multiply(4, 3)).toBe(12);
});

test('pembagian 10 / 2 sama dengan 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('perkalian dengan nol (0 * 5) harus sama dengan 0', () => {
  expect(multiply(0, 5)).toBe(0);
});

test('penambahan angka negatif (-2 + 3) harus sama dengan 1', () => {
  expect(add(-2, 3)).toBe(1);
});

test('pengurangan angka negatif (-5 - 3) harus sama dengan -8', () => {
  expect(subtract(-5, 3)).toBe(-8);
});

test('pembagian angka negatif (-10 / 2) harus sama dengan -5', () => {
  expect(divide(-10, 2)).toBe(-5);
});

test('error ketika membagi dengan nol (10 / 0)', () => {
  expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});
