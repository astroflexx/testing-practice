function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

test("Capitalize", () => {
    expect(capitalize("hello")).toMatch('Hello');
});