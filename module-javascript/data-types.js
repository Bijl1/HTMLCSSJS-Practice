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

//Accessing characters
const greeting = 'Hello there!';
console.log(`"${greeting}" is a string and it's length is ${greeting.length}.`);
// "Hello there!" is a string and it's length is 12.
console.log(greeting.charAt(0)); // <== H
console.log(greeting.charAt(1)); // <== e
console.log(greeting.charAt(5)); // <== " "
console.log(greeting.charAt(11)); // <== !
console.log(greeting.charAt(12)); // <== "" as an empty string

const goat = 'Hello there!';
console.log(goat[0]); // <== H
console.log(goat[3]); // <== l
console.log(goat[9]); // <== r
console.log(goat[-2]); // undefined

//Finding a substring
const message = "Don't be sad, be happy!";
console.log(message.indexOf("Don't")); // <== 0
console.log(message.indexOf('t')); // <== 4
console.log(message.indexOf('Be')); // <== -1 (capitalized Be ≠ lowercased be)
console.log(message.indexOf('py')); // 20

const message = "Don't be sad, be happy!";
console.log(message.indexOf('be')); // <== 6
console.log(message.indexOf('be', 7)); // <== 14

//Practice
//Write code that finds the index of the letter “j” in My favorite dessert is jello.
const message = "My favorite dessert is jello.";
console.log(message.indexOf('j')); //23

//Sorting the strings .localeCompare()
// 'str1'.localeCompare('str2');
console.log('barcelona'.localeCompare('miami')); // -1
console.log('miami'.localeCompare('barcelona')); // 1
console.log('Miami'.localeCompare('miami')); // 1

//ES6 new string methods
//startsWith() method
//Syntax str.startsWith(searchString[, position])
const str = 'To be, or not to be, that is the question.';
console.log(str.startsWith('To be')); // true
console.log(str.startsWith('not to be')); // false
console.log(str.startsWith('not to be', 10)); // true

//.endWith()
//Syntax
//str.endsWith(searchString[, length])

const ntr = 'To be, or not to be, that is the question.';
console.log(ntr.endsWith('question.')); // true
console.log(ntr.endsWith('to be')); // false
console.log(ntr.endsWith('to be', 19)); // true

//.includes()
//Syntax str.includes(searchString[, position])
const ctr = 'To be, or not to be, that is the question.';
console.log(ctr.includes('to be')); // true
console.log(ctr.includes('question')); // true
console.log(ctr.includes('nonexistent')); // false
console.log(ctr.includes('To be', 1)); // false
