//it takes a string and returns the string with the initial capitalized.
test('capitalizes the first letter',()=>{
    expect(capitalize('mountain view')).toMatch('Mountain view');
});
function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
};
