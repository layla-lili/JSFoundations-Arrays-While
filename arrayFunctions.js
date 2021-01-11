/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
console.log(isArrayLengthOdd([1, 2, 3]));
console.log(isArrayLengthOdd([1, 2, 3, 4]));

function isArrayLengthOdd(numbers) {
  if(numbers.length%2 !== 0){
    return true;
  }else 
  return false;
}

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
console.log(isArrayLengthEven([1, 2, 3]));
console.log(isArrayLengthEven([1, 2, 3, 4]));
function isArrayLengthEven(numbers) {
  if(numbers.length%2 == 0){
    return true;
  }
  return false;
}

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */


let instructors=["Mshary", "Hasan"];

function addLailaToArray(instructors) {
  instructors.push("Laila");  
  return instructors;
}


/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
 let teams=["Brazil", "Germany", "Italy"];


function eliminateTeam(teams) {
  return teams.pop();
  
}


/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */



function secondHalfOfArrayIfItIsEven(fruits) {
  if(fruits.length%2 == 0){
    fruits=fruits.slice(parseInt(fruits.length/2),fruits.length);
  }else if(fruits.length%2 !== 0){
    fruits=fruits.slice(0,0);
  }
  return fruits;
} 
 console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]));
 console.log(secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"])); 

/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use string method .slice()
 * - Use string method .endsWith()
 */


// console.log(youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!"));
// console.log(youGottaCalmDown("Hellooooo"));

function youGottaCalmDown(shout) {
 if(shout.endsWith("!")){
   let index=shout.indexOf("!");
   return shout.slice(0,index+1);
 } 
 return shout;
}
console.log(youGottaCalmDown("HI!!!!!!!!!!"));



module.exports = {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
};
