/* eslint-disable max-len */
// defining functions

const square = function (x) {
  return x * x;
};
console.log(square(10));
// 100
// Functions contain parameters and body

// a return value is what determines the value of the function

// Parameters to a function behave like regular bindings, but their initial values are given by the caller of the function, not the code in the function itself.

// Bindings and scopes
// var  = global scopes
// let and const = local scope

// Lexical Scoping means that functions and parameters usually look into the outer scope to get variables
// If the variable doesnt have the variable in that local scopes
// local scope -> outer scope = lexical scope

//  Function Declaration
// whenever i start a statement with the keyword function
console.log(sq(2));

function sq(x) {
  return x * x;
}

// by using function declarations you do need to write the code after you declare the function
// it should stil work even thou you declared before

// The Call Stack
// The way control flows thru functions

function greet(who) {
  console.log(`Hello ${who}`);
}
greet('Harry');
console.log('Bye');

// in greet
// in console.log
// in greet
// not in function
// in console.log
// not in function

// Optional Arguments

// CLOSURE
// The ability to treat functions as values, combined with the fact that local binding are re-cerated everytime
// a function is called

// being able to reference a specific instance of a local binding in an enclosing scope is closure

// Recursion
// A function calling itself

// Sometimes, it is cheaper to call a loop over a function instead of calling it recrusively

// pure function
// special kind of value-producting

// Define f to hold a function value
const f = function (a) {
  console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}

// A less verbose function value
const h = (a) => a % 3;
