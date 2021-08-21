//it takes a string and returns the string with the initial capitalized.
test('capitalizes the first letter',()=>{
    expect(capitalize('mountain view')).toMatch('Mountain view');
});
function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
};

//test2
test('reverses a string',() =>{
   expect(reverseString('Hello')).toMatch('olleH');
});

function reverseString(str){
  // splits the string into an arr
  const splitString = str.split("");
  // reverse() method to reverse the newly created array
  const reverseArr = splitString.reverse();
  //use join method to join the arr
  const joinArr = reverseArr.join("");
  //return str.split("").reverse().join(""),can also be done in one line
  return joinArr;
  }


//test3
test('checks the object for the specified key and value',() =>{
  const calc = {
    add:3 + 2,
    subtract:5-4,
    divide:10/5,
    multiply:10*5
  }
expect(calc).toStrictEqual({add:3 + 2,subtract:5-4, divide:10/5,multiply:10*5})
});
