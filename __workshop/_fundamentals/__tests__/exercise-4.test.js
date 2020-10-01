// We import (require) the function that we want to test.
const count = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", amount: 45 },
      ],
      "amo"
    )
  ).toBe(NaN);
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", amount: 145 },
      ],
      "amount"
    )
  ).toBe(245);
  expect(
    count(
      [
        { name: "Bob", amount: 1000 },
        { name: "Josie", amount: 45 },
      ],
      "amount"
    )
  ).toBe(1045);
  expect(
    count(
      [
        { name: "Bob", amount: 100 },
        { name: "Josie", amount: 45 },
      ],
      "amount"
    )
  ).toBe(145);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
