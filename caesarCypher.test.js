function caesarCipher(s, shift) {
    if (shift < 0) {
        shift += 26;
    }

    return s.split('').reduce((acc, char) => {
        if (char >= 'a' && char <= 'z') {
            return acc + String.fromCharCode((char.charCodeAt(0) - 97 + shift) % 26 + 97);
        } else if (char >= 'A' && char <= 'Z') {
            return acc + String.fromCharCode((char.charCodeAt(0) - 65 + shift) % 26 + 65);
        } else {
            return acc + char;
        }
    }, "");
}

test('test cypher', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('encrypts a string with a positive shift', () => {
    expect(caesarCipher('hello', 3)).toBe('khoor');
    expect(caesarCipher('world', 5)).toBe('btwqi');
    expect(caesarCipher('ABC', 1)).toBe('BCD');
});

test('encrypts a string with a negative shift', () => {
    expect(caesarCipher('hello', -3)).toBe('ebiil');
    expect(caesarCipher('ABC', -1)).toBe('ZAB');
});

test('wraps from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('XYZ', 3)).toBe('ABC');
});

test('maintains punctuation and spaces', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('maintains case preservation', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('Caesar Cipher', 2)).toBe('Ecguct Ekrjgt');
});
