function analyzeArray(arr) {
    return {
        average: arr.reduce((acc, x) => acc + x, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    };
}

test('analyzes an array of numbers', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test('handles an array with one number', () => {
    const result = analyzeArray([5]);
    expect(result).toEqual({
        average: 5,
        min: 5,
        max: 5,
        length: 1
    });
});

test('handles an empty array', () => {
    const result = analyzeArray([]);
    expect(result).toEqual({
        average: NaN,
        min: Infinity,
        max: -Infinity,
        length: 0
    });
});

test('handles an array with negative numbers', () => {
    const result = analyzeArray([-3, -1, -7, -5]);
    expect(result).toEqual({
        average: -4,
        min: -7,
        max: -1,
        length: 4
    });
});