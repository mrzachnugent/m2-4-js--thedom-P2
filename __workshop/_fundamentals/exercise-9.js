// Exercise 9
// -------------
//
// Write a function that accepts a string and returns the string wrapped to 40 characters per line.
// This means you'll have to insert a newline character after
// every 40 characters in the input string.
//
// - If the next character after a cut is a space, then do not display it.
// - To represent a newline character, you can use "\n".

const wrapAfter40Chars = (paragraph) => {
  //ANSWER WITH HELP FROM HARRIS

  // let result = "";
  // let singLetArr = paragraph.split("");
  // singLetArr.forEach((char, index) => {
  //   if (char === " " && result.charAt(result.length - 1) === "\n") {
  //     return;
  //   }
  //   result += char;
  //   if ((index + 1) % 40 === 0 && index !== 0) {
  //     result += "\n";
  //   }
  // });

  // return result;

  //MY ANSWER MODIFIED AFTER HELP FROM HARRIS' OTHER SOLUTION.
  let result = "";
  let singLetArr = paragraph.split("");
  for (let i = 0; i < singLetArr.length; i++) {
    if (singLetArr[i] === " " && result.charAt(result.length - 1) === "\n") {
      singLetArr[i].slice(singLetArr[i], singLetArr[i + 1]);
    } else {
      result += singLetArr[i];
      if ((i + 1) % 40 === 0 && i !== 0) {
        result += "\n";
      }
    }
  }
  return result;
};

//[0-1-2-3-4-5-6-7-8-9-10-11-12-13-14-15-16-17-18-19-20-21-22-23-24-25-26-27-28-29-30-31-32-33-34-35-36-37-38-39-]

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = wrapAfter40Chars;
