const capitalize = require('./capitalize');

test('capitalize first letter', () => {
expect(capitalize('mountain View')).toMatch('Mountain View');
})

test('capitalize first letter', () => {
    expect(capitalize('india')).toMatch('India');
    })

test('capitalize first letter', () => {
     expect(capitalize('maa')).toMatch('Maa');
 })