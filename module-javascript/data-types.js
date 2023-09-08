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

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

//Using special characters in strings 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#using_special_characters_in_strings

//Number Methods for Rounding

//Multiply-and-Divide in combo with Math.round():
let anyNumber = 5.679345;
let roundedToOne = Math.round(anyNumber*10)/10;
let roundedToTwo = Math.round(anyNumber*100)/100;
let roundedToThree = Math.round(anyNumber*1000)/1000;

console.log(roundedToOne); // <== 5.7
console.log(roundedToTwo); // <== 5.68
console.log(roundedToThree); // <== 5.679

let anyNumbers = 5.679345;
let roundedToFive = anyNumbers.toFixed(1);
console.log(roundedToFive); // 5.7
let roundedToSix = anyNumbers.toFixed(3);
console.log(roundedToSix); // 5.679

//Data Types in JS - boolean, undefined & null and Immutability

//Boolean logic operators
//We use logical operators to combine two (or more) conditions and depending on the conditions and the logical operator(s), we will get as a result a true or a false.

// OR Operator (||)
//The or operator, represented by ||, returns true if one of the evaluated expressions is true.
const name1 = true || true; // => true
const name2 = true || false; // => true
const name3 = false || true; // => true
const name4 = false || false; // => false
const name5 = false || 4 > 2; // true
console.log(name1, name2, name3, name4, name5);

//NOT Operator (!)
//If the expression is true, the result will be false, and vice versa.
!true; // => false
!false; // => true
!(4 > 2); // => false

//An undefined as data type
let nameTwo;
console.log(nameTwo); // <== undefined

//A null as data type
let nameOne = null;
console.log(nameOne); // <== null

//Truthy and falsy values
if ('false') {
    console.log('Passed thingy is truthy');
  } else {
    console.log('Passed thingy is falsy');
  }
  // => 'Passed thingy is truthy'
  
//Immutability
let city = 'miami';
console.log(city[0]); // <== m
city[0] = 'M';
console.log(city); // <== miami

let city = 'miami';
console.log(city); // <== miami
// we CAN re-assign our variable to another value
city = 'berlin';
console.log(city); // <== berlin
// but still CAN NOT change the value "berlin"
city[0] = 'B';
console.log(city); // <== berlin

city = city.charAt(0).toUpperCase() + city.slice(1);
console.log(city); // <== Berlin


const message = "Don't be sad, be happy!";
console.log(message.slice(0, 4)); // <== Don'
console.log(message.slice(14,23)); //be happy!
console.log(message); // <== Don't be sad, be happy!

//JS Conditionals and Loops
//Conditional Statements
//if...else
if (condition1) {
    // code to execute if condition1 is true
  } else if (condition2) {
    // code to execute if condition2 is true
  } else {
    // code to execute if condition1 and condition2 are false
  }  


// Sample age variable for testing
//if ... else
const userAge = 34;
if (userAge >= 54) {
  console.log("Older than 54");
} else if (userAge >= 13) {
  console.log("Between 13 and 54");
} else {
  console.log("Younger than 13");
}

//if..else
if (condition) {
    if (nestedCondition) {
      // The code will be executed if
      // condition === true && nestedCondition === true
    } else {
      // The code will be executed if
      // condition === true && nestedCondition === false
    }
  } else {
    // The code will be executed if
    // condition === false
  }
  
const number1 = parseInt(prompt('First number:'));
const number2 = parseInt(prompt('Second number:'));

if (number1 === number2) {
  console.log('The numbers are equal.');
} else {
  if (number1 > number2) {
    console.log('Number 1 is bigger than number 2.');
  } else {
    console.log('Number 1 is smaller than number 2.');
  }
}

const nameThree = prompt('Favorite Game of Thrones main character:');
let house = '';

if (nameThree === 'Khal Drogo') {
  house = 'Dothraki Horselord';
} else if (nameThree === 'Daenerys') {
  house = 'Targaryen';
} else if (nameThree === 'Jon Snow' || nameThree === 'Sansa' || nameThree === 'Arya') {
  house = 'Stark';
} else if (nameThree === 'Cersei' || nameThree === 'Tyrion' || nameThree === 'Ser Jaime') {
  house = 'Lannister';
} else {
  house = 'Other';
}

console.log(`Your favorite character is from the house ${house}.`);

//switch
switch (expression) {
    case value1:
      // executed code when the expression === value1
      break;
    case value2:
      // executed code when the expression === value2
      break;
    case value3:
      // executed code when the expression === value3
      break;
    default:
    // executed code when none of the values match the expression
  }
  
const nameFour = prompt('Favorite Game of Thrones main character:');
let mouse = '';
switch (nameFour) {
  case 'Khal Drogo':
    mouse = 'Dothraki Horselord';
  case 'Daenerys':
    mouse = 'Targaryen';
}
console.log(`Your favorite character is from the house ${mouse}.`);

//break = statement terminates the current switch statement, or better saying, the current case.

const nameFive = prompt('Favorite Game of Thrones main character:');
let houseThree = '';

switch (nameFive) {
  case 'Khal Drogo':
    houseThree = 'Dothraki Horselord';
    break;
  case 'Daenerys':
    houhouseThreese = 'Targaryen';
    break;
  case 'Jon Snow':
  case 'Sansa':
  case 'Arya':
    houseThree = 'Stark';
    break;
}
console.log(`Your favorite character is from the house ${houseThree}.`);


//Practice
const nameSix = prompt('Am I good at coding and programming?');
let answer = '';

switch (nameSix) {
  case 'yes':
    answer = 'Yes!';
    break;
  case 'No':
    answer = 'No!';
    break;
  case 'maybe':
  case 'newb':
  case 'beginner':
    answer = 'No!';
    break;
    default:
        answer = 'Well, let just say I am on speaking terms with the compoler!';
}
console.log(`Am I good at coding and programming? ${answer}.`);

//Loops & Iterations - In JavaScript, loops and iterations are used to execute repetitive tasks.

//while statement
while (condition) {} // code to be executed while the condition is true
  
let o = 0;
while (o <= 100) {
  console.log(o);
  o++; // this is the same as i = i + 1
}

//do while statement
do {
    // block of code to be executed
  } while (condition);
  
//Practice
//Iteration 1 - Create a script that counts from 0 to 30. 
let g = 1;
while (g <= 30) {
  console.log(g);
  g++;
}
//Iteration 2 - Change the previous script to write “ten” when the value of i is 10, and “twenty” when the value if 20.
//Addition 30=thirty
let h = 1;
while (h <= 30) {
  if (h === 10) {
    console.log("ten");
  } else if (h === 20) {
    console.log("twenty");
  } else if (h === 30) {
    console.log("thirty");
  } else {
    console.log(h);
  }
  h++;
}

//for statement
for (initialization; condition; finalExpression) {}

for (let i = 0; i <= 100; i++) {
    console.log(i);
  }  

//for...of statement
for (value of iterable) {
    // some statement goes here
  }  

  const someIterable = 'amsterdam';

for (const value of someIterable) {
  console.log(value);
}
// the expected output:
// a
// m
// s
// t
// e
// r
// d
// a
// m


let l = 0;

while (l < 5) {
  l++;
  console.log(`The number is: ${l}.`);
  if (l === 3) {
    break;
  }
}
//The number is: 1.
//The number is: 2.
//The number is: 3.

//Continue statement
let n = 0;

while (n < 5) {
  n++;
  if (n === 3) {
    continue;
  }
  console.log(`The number is: ${n}.`);
}
//The number is: 1.
//The number is: 2.
//The number is: 4.
//The number is: 5.

//Practice - Let’s write a loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and print that on the screen. You will need the remainder operator to do the exercise. Expected output:1 is odd 2 is even … 19 is odd 20 is even
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i + ' is even');
    } else {
      console.log(i + ' is odd');
    }
  }
  


//Object literal syntax
let someObject = {
    key1: value,
    key2: value,
    key3: value
  };
  
//Object constructor syntax
let someObjects = new Object();

let olympicRecords = {
    athletics100Men: 'Justin Gatlin',
    athleticsLongJumpMen: 'Mike Powel'
  };
  console.log(olympicRecords.athletics100Men); //Justin Gatlin
  console.log(olympicRecords.athleticsLongJumpMen); //Mike Powel
  //other options
  console.log(olympicRecords['athletics100Men']); //Justin Gatlin
  console.log(olympicRecords['athleticsLongJumpMen']); // => "Mike Powel"
  
  //Does propert exist in object - in operator
  //prop in objectName;
let myCar = {
    make: 'Honda',
    model: 'Accord',
    year: 1998
};
console.log('make' in myCar); // returns true
console.log('model' in myCar); // returns true
console.log('engine' in myCar); // false

//Keys
//object.keys()
let olympicRecordsTwo = {
    athletics100Men: 'Usain Bolt',
    athleticsLongJumpMen: 'Mike Powel',
    swimming200Men: 'Michael Phelps',
    swimming400Women: 'Katie Ledecky'
  };
  console.log(Object.keys(olympicRecordsTwo));
  // => ["athletics100Men", "athleticsLongJumpMen", "swimming200Men", "swimming400Women"]
  
  //for ... in loop
  let olympicRecordsThree = {
    athletics100Men: 'Usain Bolt',
    athleticsLongJumpMen: 'Mike Powel',
    swimming200Men: 'Michael Phelps',
    swimming400Women: 'Katie Ledecky'
  };
  for (let key in olympicRecordsThree) {
    console.log(key);
  }
// athletics100Men
// athleticsLongJumpMen
// swimming200Men
// swimming400Women

//Object.values
let olympicRecordsFour = {
    athletics100Men: 'Usain Bolt',
    athleticsLongJumpMen: 'Mike Powel',
    swimming200Men: 'Michael Phelps',
    swimming400Women: 'Katie Ledecky'
  };
  
  console.log(Object.values(olympicRecordsFour));
  // => ["Usain Bolt", "Mike Powel", "Michael Phelps", "Katie Ledecky"]
  
//Data Structure
const students = [
    "Bob",
    "Susy",
    "Ted",
    "Sarah",
    "Bill"
  ];
console.log(students[0]); //Bob
console.log(students[2]); //Ted
console.log(students[4]); //Bill