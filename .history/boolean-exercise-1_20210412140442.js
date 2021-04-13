// # True or False? 


// #### 1. What type? 
// * Check whether `3` is equal to `"3"` using loose comparison. Then, check whether they are equal while using strict comparison.
console.log(3 == "3"); // true, because a loose comparison converts a string into a number 
console.log("3" === "3"); // true, because both strings are equal

// **Questions: Comment your answers in the js file.** 
// * Is there a difference? Why/why not? 
// A loose comparison isn't as strictly as a strict comparison. It's converting before it's compare.

// * Which comparison operator should we generally use? Why?
// To be sure that an input is exactly that we do need, we should use the strict comparison === 

// * What would happen if we were to use `=`?
// If we use the assignment = we overwrite a value

// #### 2. Not
// * Store the value `true` to a variable. Using a ternary operator,print the `false` option by checking the value of the initial variable.
const varOne = true;
console.log(!varOne);


// #### 3. Short Circuit
// Given the code below, what will print when when we console log `name`? Comment your answer in the js file.

// ```javascript
// let firstName, givenName;

// firstName = 'Stacey';
// let name = givenName || firstName || 'John'; 

// console.log(name);
// ```