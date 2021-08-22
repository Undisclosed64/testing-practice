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
    add:2 + 2,
    subtract:5-4,
    divide:10/5,
    multiply:10*5
  }
expect(calc).toStrictEqual({add:2+2,subtract:5-4, divide:10/5,multiply:10*5})
});

//test4
test("Checks if the obj has the specific properties",() => {
  expect(numArr).toHaveProperty('average');
  expect(numArr).toHaveProperty('min');
 expect(numArr).toHaveProperty('max');
  expect(numArr).toHaveProperty('length');
})

let numArr = [3,6,8,9,2,12];
function calc(){

  function average(){
    let total = 0;
    for(let i = 0;i<numArr.length;i++){
      total = numArr[i] + total;
    }
    const avg = Math.floor(total/numArr.length);
    return avg;
  }
  function min(){
    return Math.min.apply(null, numArr);
  }
  function max(){
    return Math.max.apply(null, numArr);
  }
  
  return numArr = {
   average:average(),
   min:min(),
   max:max(),
   length:numArr.length,
  }
}
console.log(calc());