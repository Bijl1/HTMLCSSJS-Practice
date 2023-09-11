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
const studentsThree = [
    "Bob",
    "Susy",
    "Ted",
    "Sarah",
    "Bill"
  ];
console.log(studentsThree[0]); //Bob
console.log(studentsThree[2]); //Ted
console.log(studentsThree[4]); //Bill

const bob   = { name: "Bob", age: 17 };
const susy  = { name: "Susy", age: 18 };
const ted   = { name: "Ted", age: 18 };
const sarah = { name: "Sarah", age: 20 };
const bill  = { name: "Bill", age: 19 };
console.log(bob.name); // <== Bob
console.log(susy.age); // <== 18

//Nested Data Structures
//Objects in Arrays
const students = [
    { name: "Bob", age: 17 },
    { name: "Susy", age: 18 },
    { name: "Ted", age: 18 },
    { name: "Sarah", age: 20 },
    { name: "Bill", age: 19 }
  ];
  console.log(students[3].name); // <== Sarah
  console.log(students[0].age); //17

  //practice
  const studentsTwo = [
    { name: "Alice", age: 20 },
    { name: "Taco", age: 22 },
    { name: "Sarah", age: 23 }
  ];
  
  studentsTwo.push({ name: "Steve", age: 25 });
  
  const taco = { name: "Taco", age: 21 };
  studentsTwo.push(taco);
  console.log(taco);
  console.log(studentsTwo[0].name); // This will log "Alice"
  
  for (const student of studentsTwo) {
    if (student.name === "Sarah") {
      console.log(student.age); // This will log 23
      break;
    }
  }
  
  //Arrays in Arrays
  const twoD = [
    ["Bob", "Susy", "Ted"],
    ["Lilly", "Sarah", "Bill"],
    ["Thomas", "Barry", "Alex"]
  ]
  console.log(twoD[1]); // <== [ 'Lilly', 'Sarah', 'Bill' ]
  console.log(twoD[1][0]); // <== 'Lilly'
  console.log(twoD[0][0]); // <== 'Bob'
  console.log(twoD[0][3]); // <== undefined
  console.log(twoD[3][0]); // TypeError: Cannot read property '0' of undefined
  

const classes = [
    [
      { firstName: 'Tomas', lastName: 'Bechtelar', age: 22 },
      { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
      { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
      { firstName: 'Lulu', lastName: 'Considine', age: 20 },
      { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
    ]
];
console.log(classes[0]); //object array
console.log(classes[0][2]); // { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 }
console.log(classes[0][2].firstName); // 'Ashleigh'

//Objects inside of Objects
const classRoom = {
    teacher:  { firstName: 'Greg', lastName: 'Dach', age: 38 }
  };
  console.log(classRoom.teacher.firstName); // <== 'Greg'
  console.log(classRoom.teacher.age); // <== 38
  

  const classRoomTwo = {
    teacher:  {
      firstName: 'Greg',
      lastName: 'Dach',
      age: 38,
      address: {
        street: "3085 Kelton Knolls",
        city: "Aldaside",
        state: "Maryland"
      }
    }
  };
  
  console.log(classRoomTwo.teacher.age);

  //nested objects
  const classRoomThree = {
    teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
    students: [
      { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
      { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
      { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
      { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
      { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
    ]
  };
  console.log(classRoomThree.students[2].firstName); // <== 'Jan'
  console.log(classRoomThree.teacher.age); // <== 25
  console.log(classRoomThree.students[4].lastName);
  


const schoolSystem = {
    schools: [
      {
        name: "Fake School 1",
        classRooms: [
          {
            teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
            students: [
                { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
                { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
                { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
                { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
                { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
              ]
          },
          {
            teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
            students: [
              { firstName: 'Manley', lastName: 'Doyle', age: 18 },
              { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
              { firstName: 'Sid', lastName: 'Rohan', age: 30 },
              { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
              { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
            ]
          }
        ]
       },
       {
        name: "Fake School 2",
        classRooms: [
          {
            teacher: { firstName: 'Lucas', lastName: 'Schroeder', age: 29 },
            students: [
              { firstName: 'Giuseppe', lastName: 'Hegmann', age: 24 },
              { firstName: 'Jennyfer', lastName: 'Hane', age: 19 },
              { firstName: 'Mikayla', lastName: 'Braun', age: 23 },
              { firstName: 'Rickie', lastName: 'White', age: 22 },
              { firstName: 'Rose', lastName: 'Collins', age: 30 }
            ]
          },
          {
            teacher: { firstName: 'Green', lastName: 'Sauer', age: 25 },
            students: [
              { firstName: 'Melany', lastName: 'Welch', age: 25 },
              { firstName: 'Paxton', lastName: 'Corkery', age: 22 },
              { firstName: 'Nellie', lastName: 'Hauck', age: 26 },
              { firstName: 'Eunice', lastName: 'Hirthe', age: 26 },
              { firstName: 'Aylin', lastName: 'Barrows', age: 26 }
             ]
           }
         ]
       },
       {
        name: "Fake School 3",
        classRooms: [
          {
            teacher: { firstName: 'Nikko', lastName: 'Crist', age: 42 },
            students: [
              { firstName: 'Christop', lastName: 'Hahn', age: 26 },
              { firstName: 'Newell', lastName: 'Kemmer', age: 27 },
              { firstName: 'Katheryn', lastName: 'Heller', age: 26 },
              { firstName: 'Saul', lastName: 'Heathcote', age: 20 },
              { firstName: 'Maudie', lastName: 'Haley', age: 30 }
            ]
          },
          {
            teacher: { firstName: 'Nathanael', lastName: 'Hansson', age: 50 },
            students: [
              { firstName: 'Jensen', lastName: 'Reichel', age: 21 },
              { firstName: 'Lois', lastName: 'Kulas', age: 28 },
              { firstName: 'Caterina', lastName: 'Wolff', age: 28 },
              { firstName: 'Dahlia', lastName: 'Collier', age: 24 },
              { firstName: 'Linwood', lastName: 'Langosh', age: 26 }
            ]
          }
        ]
      }
    ]
};
  
const newStudent = {
    firstName: 'Lucille',
    lastName: 'D. Lozano',
    age: 54
};
  schoolSystem.schools[1].classRooms[0].students.push(newStudent);
  
  console.log(schoolSystem.schools[1].classRooms[0].students);
  
  console.log(schoolSystem.schools[1].name); // <== Fake School 2
  console.log(schoolSystem.schools[1]);
  //{ name: 'Fake School 2',
  //  classRooms: 
  //    [ 
  //        { teacher: [Object], students: [Array] },
  //        { teacher: [Object], students: [Array] } 
  //    ] 
  // }
  
  console.log(schoolSystem.schools[1].classRooms[0]);
  // {
  // 	teacher: { firstName: 'Lucas', lastName: 'Schroeder', age: 29 },
  // 	students: [
  // 		{ firstName: 'Giuseppe', lastName: 'Hegmann', age: 24 },
  // 		{ firstName: 'Jennyfer', lastName: 'Hane', age: 19 },
  // 		{ firstName: 'Mikayla', lastName: 'Braun', age: 23 },
  // 		{ firstName: 'Rickie', lastName: 'White', age: 22 },
  // 		{ firstName: 'Rose', lastName: 'Collins', age: 30 }
  // 	]
  // }
  
  //Retrieve the fake school 3 object
  console.log(schoolSystem.schools[2]);
  //Retrieve the teacher with the first name of Nathanael
  console.log(schoolSystem.schools[2].classRooms[1].teacher.firstName);
  //Retrieve the student with the first name of Saul
  console.log(schoolSystem.schools[2].classRooms[0].students[3].firstName);

  //JS OOP - objects, methods and the 'this' keyword
  // Example of a VERY simple Monopoly game simulation
// let squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

// // --- Initialization with methods ---
// let player1 = {
//   name: 'Joaquim',
//   color: 'red',
//   position: 0,
//   cash: 1000,
//   move() {
//     let dice = 1 + Math.floor(6 * Math.random());
//     this.position = (this.position + dice) % squares.length;
//     this.cash += squares[this.position];
//     if (this.cash < 0) {
//       console.log(`Game over for ${this.name}.`);
//     }
//   },
//   displayInfo() {
//     console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
//   },
// };

// let player2 = {
//   name: 'Maxence',
//   color: 'blue',
//   position: 0,
//   cash: 1000,
//   move() {
//     let dice = 1 + Math.floor(6 * Math.random());
//     this.position = (this.position + dice) % squares.length;
//     this.cash += squares[this.position];
//     if (this.cash < 0) {
//       console.log(`Game over for ${this.name}.`);
//     }
//   },
//   displayInfo() {
//     console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
//   },
// };

// let player3 = {
//   name: 'Mostafa',
//   color: 'black',
//   position: 0,
//   cash: 1000,
//   move() {
//     let dice = 1 + Math.floor(6 * Math.random());
//     this.position = (this.position + dice) % squares.length;
//     this.cash += squares[this.position];
//     if (this.cash < 0) {
//       console.log(`Game over for ${this.name}.`);
//     }
//   },
//   displayInfo() {
//     console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
//   },
// };

// // --- Turn 1  ---
// player1.move();
// player2.move();
// player3.move();
// // --- Turn 2  ---
// player1.move();
// player2.move();
// player3.move();
// // --- Display info  ---
// player1.displayInfo();
// player2.displayInfo();
// player3.displayInfo();

// Example of a VERY simple Monopoly game simulation

let squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

// Creation of the class
class Player {
  // The constructor is the method triggered with the `new` keyword
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.position = 0;
    this.cash = 1000;
  }

  // Method move
  move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  }

  // Method displayInfo
  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
}

// --- Initialization of players ---
let player1 = new Player('Joaquim', 'red');
let player2 = new Player('Maxence', 'blue');
let player3 = new Player('Mostafa', 'black');

// --- Turn 1  ---
player1.move();
player2.move();
player3.move();

// --- Turn 2  ---
player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();



//Practice
const chuck = {
    firstName: 'Chuck',
    lastName: 'Norris',
    birthDate: new Date('1940-03-10'),
    jokes: [
      'Chuck Norris counted to infinity... Twice.',
      'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis'
    ],
    displayInfo() {
      console.log(`My name is ${this.firstName} ${this.lastName} and I have ${this.jokes.length} jokes.`);
    },
    getAge() {
    // Hint: to get the current time, you can do: new Date()
    // Hint: to get the birthDate, you can do: this.birthDate
    // Hint: you can subtract 2 dates and you get the number of milliseconds
      const currentDate = new Date();
      const birthYear = this.birthDate.getFullYear(); 
      const currentYear = currentDate.getFullYear();
      const age = currentYear - birthYear;
      return age;
    },
    addJoke(joke) {
    // TODO (don't use return statement)
      this.jokes.push(joke);
    },
    getRandomJoke() {
    //TODO
      const randomIndex = Math.floor(Math.random() * this.jokes.length);
      return this.jokes[randomIndex];
    }
  };
  
  chuck.displayInfo();
  console.log('getAge', chuck.getAge()); //83 2023
  chuck.addJoke('Chuck Norris can divide by zero.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  chuck.addJoke('Chuck Norris kills flies with his gun.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  chuck.addJoke('Chuck Norris was once in a knife fight, and the knife lost.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  chuck.displayInfo();
  

  //Inheritance with extends
  class Animal {
  constructor(name, mainColor, sound) {
    this.name = name;
    this.mainColor = mainColor;
    this.sound = sound;
  }
  scream(intensity) {
    console.log(`${this.sound} ${'!'.repeat(intensity)}`);
  }
}

// The class Cat has, by default, all the same attributes and methods as Animal but it will have some that just belong to the cat
class Cat extends Animal {
  constructor(name, mainColor, sound, nbOfLegs) {
    // `super` refers to the constructor of the parent (Animal)
    // with super Cat gets all the attributes and methods of the Animal class
    super(name, mainColor, sound);
    this.nbOfLegs = nbOfLegs; // <== a new attribute, just for cats
  }
}

const garfield = new Cat('Garfield', 'orange', 'Meow', 4);
console.log(garfield);
// {
//   name: 'Garfield',
//   mainColor: 'orange',
//   sound: 'Meow',
//   nbOfLegs: 4
// }

garfield.scream(2); // <== Meow !!
garfield.scream(5); // <== Meow !!!!!

// 2nd example:
class Chameleon extends Animal {
  // Override of the default constructor
  constructor(name) {
    super(name, 'green', '...');
  }
  // Add a new method 'changeColor()'
  changeColor(newColor) {
    this.mainColor = newColor;
  }
}

const pascal = new Chameleon('Pascal');
pascal.changeColor('red');
console.log(pascal);
// {
//   name: 'Pascal',
//   mainColor: 'red', <== notice the difference
//   sound: '...'
// }


//Practice
//A property width
//A property height
//A method constructor(width,height)
//A method calculatePerimeter()
//A method calculateArea()
//Create a class Square that extends Rectangle add with:
//A property side (equals to the width and height)
//A method constructor(side)
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.side = side;
  }
}

const r1 = new Rectangle(6, 7);
console.log('Perimeter of r1 =', r1.calculatePerimeter()); // 26
console.log('Area of r1 =', r1.calculateArea()); // 42

const s1 = new Square(5);
console.log('Perimeter of s1 =', s1.calculatePerimeter()); // 20
console.log('Area of s1 =', s1.calculateArea()); // 25

const s2 = new Square(10);
console.log('Perimeter of s2 =', s2.calculatePerimeter()); // 40
console.log('Area of s2 =', s2.calculateArea()); // 100


//this
const ticket1 = {
  flightCode: 'UA515',

  printThis: function () {
    console.log(this);
  }
};

ticket1.printThis(); //  -->  ticket1 {  flightCode: "UA515",  printThis: ƒ }

//Example 2
const ticket3 = {
  airline: 'United',
  flight: 'UA336',

  printTicket: function () {
    console.log(`FLIGHT: ${this.airline} ${this.flight}`);
  },

  details: {
    planeType: 'Airbus',
    planeModel: 'A380',
    printDetails: function () {
      console.log(`DETAILS: ${this.planeType} ${this.planeModel}`);
    }
  }
};

ticket3.printTicket(); // FLIGHT: United UA336              -->  this === ticket3

ticket3.details.printDetails(); // DETAILS: Airbus A380     -->  this === ticket3.details

//Example 3
const ticket2 = {
  flightCode: 'UA520',
  passenger: {
    name: 'Brendan Eich',
    printThis: function () {
      console.log(this);
    }
  }
};

ticket2.passenger.printThis(); // passenger { name: "Brendan Eich", printThis: ƒ }


//In arrow () => functions
const person = {
  name: 'Anna',

  regularMethod: function () {
    console.log('regularMethod this:', this);

    const arrowFunc = () => console.log('arrowFunc this:', this);
    arrowFunc();

    // arrow function will borrow `this` value from the surrounding scope
    // of `regularMethod` where it was created
  }
};

person.regularMethod(); // > regularMethod this: {name: "Anna", regularMethod: ƒ}
// > arrowFunc this:     {name: "Anna", regularMethod: ƒ}



//setTimeout and setInterval
class Clock {
  constructor() {
    this.time = 0;

    this.tickRegular = function () {
      console.log();
      this.time += 1;
      console.log(this.time);
    };
  }
}
const clockA = new Clock();

setInterval(clockA.tickRegular, 1000);


//new (in a class/constructor function)
class Ticket {
  constructor(flightV, fromV, toV) {
    // this = {}
    (this.flight = flightV), (this.from = fromV), (this.to = toV);

    // this = {flight: '...', from: '...', to: '...' }
    // return this
  }
}
const t1 = new Ticket('UA2638', 'MIA', 'BCN');
const t2 = new Ticket('UA521', 'JFK', 'SFO');


// Methods call() and apply() are used to invoke a function once and pass it a custom value of this for that one invocation.
function printThis() {
  console.log(this);
}

const office = {
  address: 'C. Pamplona 96',
  color: 'gray'
};

const school = {
  address: '120 SW 8th St',
  color: 'white'
};

printThis(); // --> Window
printThis.call(office); //  -->  office { address: "C. Pamplona 96", color: "gray" }
printThis.call(school); //  -->  school { address: "120 SW 8th St", color: "white" }

//bind()
const car = {
  brand: 'Tesla',
  model: 'S',
  color: 'White',
  details: function () {
    console.log(`${this.brand} ${this.model} ${this.color}`);
  }
};

car.details(); // -->   Tesla S White

const macPro15 = {
  brand: 'Apple',
  model: 'MacBook Pro 15',
  color: 'Silver'
};

// Create a new function and bind `this` to object `macPro15`
const boundDetails = car.details.bind(macPro15);

boundDetails(); // --> Apple MacBook Pro 15 Silver
// new function `boundDetails` has `this`
// permanently bound to object `macPro15`



//Function declaration
function calcSum (x, y) {
  return x + y;
}

console.log(calcSum(12, 23)); // => 35


// function expression - is an unnamed function stored in a variable
const welcomeMessage = function (message) {
  console.log(message);
};

welcomeMessage('So nice to have you here! Welcome!');
// => So nice to have you here! Welcome!
