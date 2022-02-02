const calc = require('./calculator');

test('adds 20000 + 30000', () => {
    expect(calc.add(20000,30000)).toEqual(50000);
});

test('subtract 1000 - 500', () => {
    expect(calc.subtract(1000,600)).toBe(400);
});

test('multiply 16 * 4', () => {
    expect(calc.multiply(16,4)).toBe(64);
});

test('divide 10 by 5', () => {
    expect(calc.divide(10,5)).toEqual(2);
})
