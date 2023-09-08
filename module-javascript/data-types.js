//Data Types in JavaScript - number & string
//JS, there are 6 primitive data types: number, string, boolean, null, undefined, symbol

//Advanced Operators

//Exponentiation
console.log(2 ** 5);
// 2 * 2 * 2 * 2 * 2
// => 32

//Modulo
console.log(4 / 2); // 4 / 2 = 2
console.log(4 % 2); //With a remainder of 0
console.log(7 / 2); // 7 / 2 = 3.5
console.log(7 % 2); //With a remainder of 1

console.log(8 % 2 === 0); // true, 8 is indeed a multiple of 2!
console.log(9 % 2 === 0); // false, 9 is NOT a multiple of 2!

//Operator Precedence
const i = 10 + (5 * 2 ** 3) / 4 - 6;
//  === 10 + 5 * 8 / 4 - 6 <== start with the exponents (2 ** 3)
//  === 10 + 40 / 4 - 6 <== then multiplication (5 * 8)
//  === 10 + 10 - 6 <== then division (40 / 4)
//  === 20 - 6 <== then addition (10 + 10 )
//  ==> 14 <== and finally finish with subtraction (20 - 6)

//Practice
const expressionOne = ((2 * 2) + 5) * 6;
console.log(expressionOne); //54

const expressionTwo = ((2* 2) + (5 * 3)) - 5;
console.log(expressionTwo); //14

const expressionThree = (5 * 5) / (5 * 5);
console.log(expressionThree); //1

const expressionFour = 5 * 5 - 5 * 4;
console.log(expressionThree); //5

//A string is simply a sequence of characters. A character can be a letter, number, punctuation, or even things such as new lines and tabs.
// "" double quotes,
// '' single quotes or
// `` backticks (grave accents).
let name = 'Ana';
console.log(`Hello there, ${name}!`); // ==> Hello there, Ana!
console.log(`${name} walks every day at least ${1 + 2} km.`); // ==> Ana walks every day at least 3km.

var customer = { firstName: 'Foo', lastName: 'Kim' };
var message = 'Hello ' + customer.firstName + ' ' + customer.lastName + '!!';
console.log(message);

//ES5 old-school style
var customer = { firstName: 'Foo', lastName: 'Kim' };
var message = 'Hello ' + customer.firstName + ' ' + customer.lastName + '!!';
console.log(message); //Hello Foo Kim!!

//ES6 Interpolation style
let customer = { firstName: 'Foo', lastName: 'Kim' };
let message = `Hello ${customer.firstName} ${customer.lastName}!!`;
console.log(message);
