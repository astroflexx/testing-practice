const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => {
        if (b === 0) throw new Error("Cannot divide by zero");
        return a / b;
    },
    multiply: (a, b) => a * b,
};

test('adds two numbers', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(-1, -1)).toBe(-2);
    expect(calculator.add(-1, 1)).toBe(0);
});

test('subtracts two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(-1, -1)).toBe(0);
    expect(calculator.subtract(-1, 1)).toBe(-2);
});

test('divides two numbers', () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(-6, -3)).toBe(2);
    expect(calculator.divide(-6, 3)).toBe(-2);
    expect(() => calculator.divide(1, 0)).toThrow("Cannot divide by zero");
});

test('multiplies two numbers', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-2, -3)).toBe(6);
    expect(calculator.multiply(-2, 3)).toBe(-6);
});

module.exports = calculator;