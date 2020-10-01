// We import (require) the function that we want to test.
const redacted = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(redacted(["bacon", false, 42])).toStrictEqual(["redacted", false, 42]);
  expect(redacted(["bacon", true, 42, "string", "hello"])).toStrictEqual([
    "redacted",
    true,
    42,
    "redacted",
    "redacted",
  ]);
  expect(redacted(["piggy", null, 42])).toStrictEqual(["redacted", null, 42]);
  expect(redacted(["cop", false, 42, 18, 19])).toStrictEqual([
    "redacted",
    false,
    42,
    18,
    19,
  ]);
  // add more tests here...
});

// More info on jest expect: https://jestjs.io/docs/en/expect
