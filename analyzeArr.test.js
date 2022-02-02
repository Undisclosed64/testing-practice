const analyzeArr = require('./analyzeArr');

test('function returns an object with average,min,max and length property', () => {

    expect(analyzeArr([12,8,5,19,30,6])).toHaveProperty('average');
    expect(analyzeArr([12,8,5,19,30,6])).toHaveProperty('min');
    expect(analyzeArr([12,8,5,19,30,6])).toHaveProperty('max');
    expect(analyzeArr([12,8,5,19,30,6])).toHaveProperty('length');

})