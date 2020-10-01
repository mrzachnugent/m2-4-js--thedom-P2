// We import (require) the function that we want to test.
const addValues = require("../exercise-7");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 7", () => {
  expect(
    addValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      { isAvailable: false }
    )
  ).toStrictEqual([
    { name: "chris", age: 23, isAvailable: false },
    { name: "liv", age: 36, isAvailable: false },
    { name: "dave", age: 43, isAvailable: false },
  ]);
  expect(
    addValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      { isPretty: true }
    )
  ).toStrictEqual([
    { name: "chris", age: 23, isPretty: true },
    { name: "liv", age: 36, isPretty: true },
    { name: "dave", age: 43, isPretty: true },
  ]);
  expect(
    addValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", pets: 43 },
      ],
      { isAvailable: true }
    )
  ).toStrictEqual([
    { name: "chris", age: 23, isAvailable: true },
    { name: "liv", age: 36, isAvailable: true },
    { name: "dave", pets: 43, isAvailable: true },
  ]);
  expect(
    addValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      { isAvailable: true }
    )
  ).toStrictEqual([
    { name: "chris", age: 23, isAvailable: true },
    { name: "liv", age: 36, isAvailable: true },
    { name: "dave", age: 43, isAvailable: true },
  ]);
});

// More info on jest expect: https://jestjs.io/docs/en/expect
