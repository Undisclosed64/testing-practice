const reverseStr = require('./reverseString');

test('reverse the string',() => {
    expect(reverseStr('New York')).toBe('kroY weN');
})

test('reverse the string',() => {
    expect(reverseStr('sarah')).toMatch('haras');
})