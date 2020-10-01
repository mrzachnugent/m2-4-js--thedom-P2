// We import (require) the function that we want to test.
const uniqueElements = require("../exercise-10");

// Write 3 more expect functions to test the function you just wrote.
// Notice that the expect method is different.
// When verifying equality of arrays and objects, we need to use .toStrictEqual().
test("Exercise 10", () => {
  expect(uniqueElements([0, 1, 2, 3], [1, 3, 4, 5])).toStrictEqual([
    0,
    2,
    4,
    5,
  ]);

  expect(uniqueElements([0, 2, 3, 5], [1, 3, 4, 5])).toStrictEqual([
    0,
    2,
    1,
    4,
  ]);

  expect(uniqueElements([0, 1, 2, 3], [0, 1, 2, 5])).toStrictEqual([3, 5]);

  expect(uniqueElements([0, 1, 2, 3], [1, 3, 4, 6])).toStrictEqual([
    0,
    2,
    4,
    6,
  ]);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
