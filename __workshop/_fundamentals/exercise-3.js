// Exercise 3
//
// Part 1 - Write
// ---------------
// Write a function accepts an array of objects as well as an object and returns
// a new array of objects with the object added to each element of the array.
//
// e.g. insert([{ name: "Bob" }, { name: "Josie" }], {"isAvailable": false});
// returns:
// [
//   { name: "Bob", isAvailable: false },
//   { name: "Josie", isAvailable: false },
// ];
//
// - If the second parameter is not an object, return the original array element

const insert = (arr, obj) => {
  //for each element in the array, add the property of obj.
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let ob = { ...arr[i], ...obj };
    newArr.push(ob);
  }
  return newArr;
};

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = insert;
