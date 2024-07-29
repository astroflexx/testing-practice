function reverseString(str) {
    console.log(str.split());
    return str.split('').reverse().join('');
}

test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('')).toBe('');
    expect(reverseString('a')).toBe('a');
    expect(reverseString('tit')).toBe('tit');
    expect(reverseString('hello world')).toBe('dlrow olleh');
});