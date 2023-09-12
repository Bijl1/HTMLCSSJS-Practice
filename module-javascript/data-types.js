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



//callback
function eatDinner(callback) {
  // the word "callback" is just a placeholder
  // you can use any other word
  console.log('Eating the dinner!');
  callback();
}

function eatDessert() {
  console.log('Eating the dessert!');
}

eatDinner(eatDessert); // <== When passing a function as an argument, do not use ()
// Eating the dinner!
// Eating the dessert!


//Example 2
function putShirt() {
  console.log('Putting on the shirt.');
}

function putSocks () {
  console.log('Putting on the socks.');
}

function putPants () {
  console.log('Putting on the pants.');
}

function putShoes () {
  console.log('Putting on the shoes.');
}


function getReadyForWork (callback1, callback2, callback3, callback4) {
  callback1();
  callback2();
  callback3();
  callback4();
  console.log("I'm ready to go to work!!!");
}

getReadyForWork(putShoes, putSocks, putPants, putShirt);
// => Putting on the shoes.
// => Putting on the socks.
// => Putting on the pants.
// => Putting on the shirt.
// => I'm ready to go to work!!!

//Anonymous Functions
//An anonymous function is a function without a name.
//An anonymous function is usually not available to be used after its initial creation. The reason for creating a function without any name is that it will be used just at that very moment and never again in your code, so there’s really no need to name it.
function printName(name, anonFunc) {
  anonFunc(name);
}

printName('sandra', function (name) {
  console.log(name[0].toUpperCase() + name.slice(1));
});
// => Sandra

//Example 2
function getLength(str, anonFunc) {
  anonFunc(str);
}

getLength('aleksandra', function (str) {
  console.log(`${str} has ${str.length} letters.`);
});

// => aleksandra has 10 letters.

getLength('nick', function (str) {
  console.log(`${str} has ${str.length} letters.`);
});
// => nick has 4 letters.


//JavaScript Array methods
const studentsFour = ['anna', 'brian', 'chloe'];
// Loop over an array and print each element
studentsFour.forEach( function (el) {
  console.log('Hello ' + el);
});
//"Hello anna"
//"Hello brian"
//"Hello chloe"

//Asynchronous JS functions
setTimeout( function () {
  console.log('I am anonymous function and I will execute after 2 seconds');
}, 2000);
// ... nothing happens for 2 seconds
// => I am anonymous function and I will execute after 2 seconds


//Arror Functions
// function expression syntax
const greeting1 = function (name) {
  console.log(`Hello, ${name}!`);
};

// arrow function syntax
const greeting2 = (name) => {
  console.log(`Hello, ${name}!`);
};

//Arror functions with one parameter
// arrow function syntax - one parameter without parameter parentheses
const greeting3 = name => {
  console.log(`Hello, ${name}!`);
};

//Concise arrow function
const greeting4 = (name) => `Hello, ${name}!`;
console.log(greeting4('Ana')); // => Hello, Ana!

//The arguments object
function printSomething() {
  console.log(arguments);
}

printSomething('hi');
// [Arguments] { '0': 'hi' }

function printSomething() {
  console.log('arguments length: ', arguments.length);
  console.log('all: ', arguments);
  console.log('first arg: ', arguments[0]);
  console.log('second arg: ', arguments[1]);
}
printSomething('hi', 'there');
// arguments length:  2
// all:  [Arguments] { '0': 'hi', '1': 'there' }
// first arg:  hi
// second arg:  there


//over the arguments object
function printArgs() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
printArgs('hey', 'there', 'ironhacker');
// hey
// there
// ironhacker
printArgs(1, 77, { name: 'milo' }, ['cat', 'dog']);
// 1
// 77
// { name: 'milo' }
// [ 'cat', 'dog' ]

//map()
//ES5
const array = [1, 2, 3];

const newArray = array.map(function (number) {
  return number * 2;
});
console.log(newArray); // [ 2, 4, 6 ]

//ES6
const arrayTwo = [1, 2, 3];
const newArrayTwo = arrayTwo.map(number => number * 2);
console.log(newArrayTwo); // [ 2, 4, 6 ]

//forEach
const arrayThree = [1, 2, 3];

const newArrayThree = []; // we have to create a newArray
arrayThree.forEach(function (numcopy) {
  numcopy *= 2; // double the passed copy (it's a copy)
  newArrayThree.push(numcopy); // and push it to the newArray
});
console.log(newArrayThree); // <== [ 2, 4, 6 ]

//map
const foods = ['pizza', 'sandwiches', 'ice cream'];

// ES5:
const capsFoodsTwo = foods.map(function (food) {
  return food.toUpperCase();
});
console.log(capsFoodsTwo);
// [ 'PIZZA', 'SANDWICHES', 'ICE CREAM' ]

// ES6:
const capsFoodsThree = foods.map(food => food.toUpperCase());
console.log(capsFoodsThree);
// [ 'PIZZA', 'SANDWICHES', 'ICE CREAM' ]

//Practice
// array of cities:
const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];
//ES5
const capsCities = cities.map(function (city) {
  return city.toUpperCase();
});
console.log(capsCities);
//ES6
capsCities = cities.map(cities => cities.toUpperCase());
console.log(capsCities);
//["MIAMI","BARCELONA","MADRID","AMSTERDAM","BERLIN","SAO PAULO","LISBON","MEXICO CITY","PARIS"]




const studentsFive = [
  {
    name: 'Tony Parker',
    firstProject: 80,
    secondProject: 75,
    finalExam: 90
  },
  {
    name: 'Marc Barchini',
    firstProject: 84,
    secondProject: 65,
    finalExam: 65
  },
  {
    name: 'Claudia Lopez',
    firstProject: 45,
    secondProject: 95,
    finalExam: 99
  },
  {
    name: 'Alvaro Briattore',
    firstProject: 82,
    secondProject: 92,
    finalExam: 70
  },
  {
    name: 'Isabel Ortega',
    firstProject: 90,
    secondProject: 32,
    finalExam: 85
  },
  {
    name: 'Francisco Martinez',
    firstProject: 90,
    secondProject: 55,
    finalExam: 78
  },
  {
    name: 'Jorge Carrillo',
    firstProject: 83,
    secondProject: 77,
    finalExam: 90
  },
  {
    name: 'Miguel López',
    firstProject: 80,
    secondProject: 75,
    finalExam: 75
  },
  {
    name: 'Carolina Perez',
    firstProject: 85,
    secondProject: 72,
    finalExam: 67
  },
  {
    name: 'Ruben Pardo',
    firstProject: 89,
    secondProject: 72,
    finalExam: 65
  }
];

const finalGrades = studentsFive.map(theStudent => {
  const projectsAvg = (theStudent.firstProject + theStudent.secondProject) / 2;
  const finalGrade = theStudent.finalExam * 0.6 + projectsAvg * 0.4;
  return {
    name: theStudent.name,
    finalGrade: Math.round(finalGrade)
  };
});

console.log(finalGrades);
//   { name: 'Tony Parker', finalGrade: 85 },
//   { name: 'Marc Barchini', finalGrade: 69 },
//   { name: 'Claudia Lopez', finalGrade: 87 },
//   { name: 'Alvaro Briattore', finalGrade: 77 },
//   { name: 'Isabel Ortega', finalGrade: 75 },
//   { name: 'Francisco Martinez', finalGrade: 76 },
//   { name: 'Jorge Carrillo', finalGrade: 86 },
//   { name: 'Miguel López', finalGrade: 76 },
//   { name: 'Carolina Perez', finalGrade: 72 },
//   { name: 'Ruben Pardo', finalGrade: 71 }

//.reduce
//ES5
array.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});

//ES6
array.reduce((accumulator, currentValue) => accumulator + currentValue);

//Accumulating the sum of numbers from an array.
const numbers = [2, 4, 6, 8];

const total = numbers.reduce(function (accumulator, currentValue) {
  console.log('accumulator is: ', accumulator, 'and current value is: ', currentValue);
  return accumulator + currentValue;
});
console.log('total is: ', total);
// accumulator is:  2 and current value is:  4
// accumulator is:  6 and current value is:  6
// accumulator is:  12 and current value is:  8
// total is:  20

//sum with initialValue
const numbersTwo = [12, 9, 1, 8];

const totalTwo = numbersTwo.reduce((accumulator, currentValue) => {
  console.log('accumulator is: ', accumulator, 'and current value is: ', currentValue);
  return accumulator + currentValue;
}, 23); // <= notice the 23!!!
console.log('total is: ', totalTwo);
// accumulator is:  23 and current value is:  12
// accumulator is:  35 and current value is:  9
// accumulator is:  44 and current value is:  1
// accumulator is:  45 and current value is:  8
// total is:  53


const numbersThree = [2, 4, 6, 8];
const totalThree = numbersThree.reduce((accumulator, current) => accumulator * current);
console.log(totalThree); // <== 384


const words = ['This', 'is', 'one', 'big', 'string'];
// ES5:
const bigString = words.reduce(function (sum, word) {
  return sum + word;
});
// ES6:
const bigStringTwo = words.reduce((sum, word) => sum + word);
console.log(bigStringTwo); // <== Thisisonebigstring


//Objects - initialValue
const people = [
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Allen', age: 49 },
  { name: 'Nettie', age: 21 },
  { name: 'Stuart', age: 17 }
];

const ages = people.reduce(function (sum, person) {
  return sum + person.age;
}, 0); // initialValue to 0
console.log(ages); // <== 142

//forEach to total
const numbersFour = [1, 2, 3, 4];
let totalOne = 0;

numbersFour.forEach(function (number) {
  totalOne += number;
});
console.log(totalOne);
// 10

//Practice
const menu = [
  { name: 'Carrots', calories: 150 },
  { name: 'Steak', calories: 350 },
  { name: 'Broccoli', calories: 120 },
  { name: 'Chicken', calories: 250 },
  { name: 'Pizza', calories: 520 }
];

let totalCalories = 0;
menu.forEach(function (item) {
  totalCalories += item.calories; 
});
const averageCalories = totalCalories / menu.length; 
console.log(averageCalories); //278



const product = {
  name: 'AmazonBasics Apple Certified Lightning to USB Cable',
  price: 7.99,
  manufacturer: 'Amazon',
  reviews: [
    { user: 'Pavel Nedved', comments: 'It was really useful, strongly recommended', rate: 4 },
    { user: 'Alvaro Trezeguet', comments: 'It lasted 2 days', rate: 1 },
    { user: 'David Recoba', comments: 'Awesome', rate: 5 },
    { user: 'Jose Romero', comments: 'Good value for money', rate: 4 },
    { user: 'Antonio Cano', comments: 'It broked really fast', rate: 2 }
  ]
};
const totalReviews = product.reviews.reduce(function (acc, review) {
  return acc + review.rate;
}, 0); // starts acc to 0
const averageRate = totalReviews / product.reviews.length;
console.log(`averageRate rate: ${averageRate}`); // <== averageRate rate:  3.2


//.filter() method iterates through an array and creates a new array with all elements that pass the condition we set.
//ES5
const numbersFive = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbersFive.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers); // <== [ 2, 4, 6 ]

//ES6
const numbersSix = [1, 2, 3, 4, 5, 6];
const evenNumbersTwo = numbersSix.filter(number => number % 2 === 0);
console.log(evenNumbersTwo); // <== [ 2, 4, 6 ]

//Practice
const peopleTwo = [
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Allen', age: 20 },
  { name: 'Nettie', age: 21 },
  { name: 'Stuart', age: 17 },
  { name: 'Bill', age: 19 }
];

// your code...
const ofDrinkingAge = peopleTwo.filter(person => person.age >= 21);
console.log(ofDrinkingAge);
// [
//   { name: 'Candice', age: 25 },
//   { name: 'Tammy', age: 30 },
//   { name: 'Nettie', age: 21 }
// ]



const places = [
  {
    title: "Awesome Suite 20' away from la Rambla",
    price: 200,
    type: 'Private Room',
    pool: true,
    garage: false
  },
  {
    title: 'Private apartment',
    price: 190,
    type: 'Entire Place',
    pool: true,
    garage: true
  },
  {
    title: 'Apartment with awesome views',
    price: 400,
    type: 'Entire Place',
    pool: false,
    garage: false
  },
  {
    title: 'Apartment in la Rambla',
    price: 150,
    type: 'Private Room',
    pool: false,
    garage: true
  },
  {
    title: 'Comfortable place in Barcelona´s center',
    price: 390,
    type: 'Entire place',
    pool: true,
    garage: true
  },
  {
    title: 'Room near Sagrada Familia',
    price: 170,
    type: 'Private Room',
    pool: false,
    garage: false
  },
  {
    title: 'Great house next to Camp Nou',
    price: 140,
    type: 'Entire place',
    pool: true,
    garage: true
  },
  {
    title: 'New apartment with 2 beds',
    price: 2000,
    type: 'Entire place',
    pool: false,
    garage: true
  },
  {
    title: 'Awesome Suite',
    price: 230,
    type: 'Private Room',
    pool: false,
    garage: false
  },
  {
    title: "Apartment 10' from la Rambla",
    price: 930,
    type: 'Entire place',
    pool: true,
    garage: true
  }
];
// your code...
const poolFilter = places.filter(place => place.pool === true);
console.log(poolFilter); //list of pool available.


//odd numbers - Given an array of numbers, filter out the ones that are not even, and are greater than 42.
const numbersSeven = [1, 60, 112, 123, 100, 99, 73, 45];
// your code...
const result = numbersSeven.filter(number => number % 2 !== 0 && number > 42);
console.log(result);
// [ 123, 99, 73, 45 ]

//.sort()
const numbersEight = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
numbersEight.sort();
console.log(numbersEight);
// [ 0, 1, 112, 18, 22, 223, 23, 64, 68, 9, 99 ]



const numbersNine = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
// ES5
numbersNine.sort(function (a, b) {
  return a - b;
});
// ES6
numbersNine.sort((a, b) => a - b);
console.log(numbers);
// [ 0, 1, 9, 18, 22, 23, 64, 68, 99, 112, 223 ]

//reverse numerical order
const numbersTen = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
// ES5
numbersTen.sort(function (a, b) {
  return b - a;
});
// ES6
numbersTen.sort((a, b) => b - a);
console.log(numbersTen);
// [ 223, 112, 99, 68, 64, 23, 22, 18, 9, 1, 0 ]


//Sorting strings
//Notice how uppercase letters are sorted before lowercase ones, ie: "A" then "a"
//ASCending order
const wordsTwo = ['Hello', 'Goodbye', 'AA', 'First', 'A', 'a', 'Second', 'b', 'Third'];
wordsTwo.sort();
console.log(wordsTwo);
// ["A", "AA", "First", "Goodbye", "Hello", "Second", "Third", "a", "b"]

//DESCending order
const wordsThree = ['Hello', 'Goodbye', 'AA', 'First', 'A', 'a', 'Second', 'b', 'Third'];
wordsThree.sort().reverse();
console.log(wordsThree);
// ["b", "a", "Third", "Second", "Hello", "Goodbye", "First", "AA", "A"]

//DESC order a different compare function
const wordsFour = ['Hello', 'Goodbye', 'AA', 'First', 'A', 'a', 'Second', 'b', 'Third'];

wordsFour.sort(function (a, b) {
  if (a < b) return 1; //  1 here (instead of -1 for ASC)
  if (a > b) return -1; // -1 here (instead of  1 for ASC)
  if (a === 0) return 0;
});
console.log(wordsFour);
// ["b", "a", "Third", "Second", "Hello", "Goodbye", "First", "AA", "A"]

//Can also sort by different attributes, such as DESC length
const wordsFive = ['b', 'a', 'Third', 'Second', 'Hello', 'Goodbye', 'First', 'AA', 'A'];

wordsFive.sort(function (a, b) {
  if (a.length < b.length) return 1; //  1 here (instead of -1 for ASC)
  if (a.length > b.length) return -1; // -1 here (instead of  1 for ASC)
  if (a.length === b.length) return 0;
});
console.log(wordsFive);
// ["Goodbye", "Second", "Hello", "First", "Third", "AA", "A", "a", "b"]


//.reverse()
array.reverse();
//
const arr1 = ['one', 'two', 'three'];
const arr2 = arr1.reverse();
console.log(arr1); // ['three', 'two', 'one'] // --> original array is mutated
console.log(arr2); // ['three', 'two', 'one']


//JS Variable scope, hoisting and shadowing

const message = 'Hello from the global scope!';
function sayHelloFromLocalScope() {
  const greeting = 'Hello from functional/local scope!';
  return greeting;
}
console.log(message); // <== Hello from the global scope!
console.log(greeting); // <== ReferenceError: greeting is not defined


const message = 'Hello from the global scope!';
function sayHelloFromLocalScope() {
  const greeting = 'Hello from functional/local scope!';
  return greeting;
}
console.log(message); // <== Hello from the global scope!
console.log(greeting); // <== ReferenceError: greeting is not defined


let outerVar = 1;
function inner() {
  let innerVar = 2;
  console.log(outerVar);
}
console.log(innerVar); // => ReferenceError: innerVar is not defined



for (var j = 1; j <= 30; j++) {
  console.log(`Iteration number: ${j}`);
}
console.log(`After the loop: ${j}`);
// [...]
// Iteration number: 28
// Iteration number: 29
// Iteration number: 30
// After the loop 31


var nameSeven = 'Ironhacker';
if (true) {
  var nameSeven = 'Ted';
  console.log(`Name inside if statement: ${nameSeven}`);
}
console.log(`Name outside if statement: ${nameSeven}`);
// Name inside if statement: Ted
// Name outside if statement: Ted


let nameEight = 'Ironhacker';
if (true) {
  let nameEight = 'Ted';
  console.log(`Name inside if statement: ${nameEight}`);
}
console.log(`Name outside if statement: ${nameEight}`);
// Name inside if statement: Ted
// Name outside if statement: Ironhacker


//Shadowing
//A variable shadowing occurs when a variable declared within a certain scope has the same name as a variable declared in an outer scope.
let a = 1;
let b = 2;

function inner() {
  a = 4; // reassigned
  let b = 3; // declared in an inner scope
}
inner();
console.log(a); // => 4
console.log(b); // => 2


//JS Value vs Reference and Mutable Data Types
//Primitives - passed (copied) by value
//Primitive data types are stored and copied by value, which means two values are equal if they have the same value.
let price1 = 20.99;
let price2 = 20.99;
console.log(price1 === price2); // => true
let name6 = 'Ana';
let name7 = 'Ana';
console.log(name6 === name7); // => true


let price8 = 20.99;
let price9 = price8;
console.log(price8 === price9); // => true


//Non-primitives - passed (copied) by reference
const book10 = {
  author: 'Charlotte Bronte',
};
const book11 = book10; // => copy the book1 into the new object - book2
console.log(book10); // => { author: 'Charlotte Bronte' }
console.log(book11); // => { author: 'Charlotte Bronte' }
// CHANGE THE VALUE OF AUTHOR PROPERTY IN BOOK1:
book10.author = 'Jane Austen';
// BOTH ARE CHANGED
console.log(book10); // => { author: 'Jane Austen' }
console.log(book11); // => { author: 'Jane Austen' }
// CHANGE THE VALUE OF AUTHOR PROPERTY IN BOOK2:
book11.author = 'Edith Wharton';
// BOTH ARE CHANGED
console.log(book10); // => { author: 'Edith Wharton' }
console.log(book11); // => { author: 'Edith Wharton' }


// object:
const book1 = {
  author: 'Charlotte Bronte',
};
const book2 = book1; // => copy the book1 into the new object - book2
console.log(book1 === book2); // => true

// array:
const students2 = ['Ana', 'John', 'Fabio'];
const ironhackers = students2;
console.log(students2 === ironhackers); // => true



//f two objects or arrays look completely the same, but they don’t reference the same object/array, they are not the same.
// objects:
const book3 = {
  author: 'Charlotte Bronte',
};
const book4 = {
  author: 'Charlotte Bronte',
};
console.log(book3 === book4); // => false

// arrays:
const students1 = ['Ana', 'John', 'Fabio'];
const ironhackers1 = ['Ana', 'John', 'Fabio'];
console.log(students1 === ironhackers1); // => false


//.Object.assign()
const book5 = {
  author: 'Charlotte Bronte',
};
const book6 = Object.assign({}, book5);
console.log(book6); // => { author: "Charlotte Bronte" }
console.log(book5 === book6); // => false



//Object.assign() creates so-called shallow copy since all nested properties still be copied by reference.
const book8 = {
  author: 'Charlotte Bronte',
  publishers: [
    {companyName: 'AB'},
    {companyName: 'CD'}
  ]
}

const book7 = Object.assign({}, book8);
book8.publishers[0] = {
  companyName: 'Super Cool Company', // => here we changed the name of
  // the 1st publisher in the original (book1)
};
book8.author = 'Test Test'; // => here we changed the author name in the original (book1)
console.log(book7);
//  { author: 'Charlotte Bronte', // => THIS DIDN'T CHANGE
//    publishers: [
//        { companyName: 'Super Cool Company' }, // => THIS IS CHANGED SINCE IT'S COPIED BY REFERENCE
//        { companyName: 'CD' }




const book8 = {
  author: 'Charlotte Bronte',
};
const book9 = {}; // => INITIALIZED EMPTY OBJECT
for (let prop in book8) {
  book9[prop] = book8[prop];
}
book8.author = 'William Shakespeare'; // => changed the original
console.log(book8); // => { author: 'William Shakespeare' } ==> changed
console.log(book9); // => { author: 'Charlotte Bronte' } ==> DIDN'T CHANGE



const book10 = {
  author: 'Charlotte Bronte',
  publishers: [
    (publisher1 = {
      companyName: 'AB',
    }),
    (publisher2 = {
      companyName: 'CD',
    }),
  ],
};

function cloneObject(object) {
  let clone = {};
  for (let prop in object) {
    if (object[prop] != null && typeof object[prop] == 'object') {
      clone[prop] = cloneObject(object[prop]);
    } else {
      clone[prop] = object[prop];
    }
  }
  return clone;
}
let book11 = cloneObject(book10); // call the function and create the copy => book4
book1.publishers[0] = {
  companyName: 'Super Cool Company', // => change the deep property of the book1
};
book10.author = 'William Shakespeare'; // change the property of the book1
console.log(book10);
console.log(book11);


//copy an array
//ES6 spread operator [...array]
const students3 = ['Ana', 'John', 'Fabio'];
function cloneArray(array) {
  let arrCopy = [];
  for (let i = 0; i < array.length; ++i) {
    arrCopy[i] = array[i];
  }
  return arrCopy;
}
const ironhackers2 = cloneArray(students3); // => invoke function and assign result to variable "ironhackers"
students3.push('Sandra');
console.log(students3); // => [ 'Ana', 'John', 'Fabio', 'Sandra' ]
console.log(ironhackers2); // => [ 'Ana', 'John', 'Fabio' ]



//JSON.parse(JSON.stringify())
// multidimensional array
const students11 = [
  ['Ana', 'John', 'Fabio'],
  ['Alex', 'Mike', 'Vero'],
];
// // case 1: using spread operator
// const ironhackers = [...students];
// students[0].push('Sandra');
// console.log(students); // [ [ 'Ana', 'John', 'Fabio', 'Sandra' ],
// // [ 'Alex', 'Mike', 'Vero' ] ]
// console.log(ironhackers); // [ [ 'Ana', 'John', 'Fabio', 'Sandra' ],
// // [ 'Alex', 'Mike', 'Vero' ] ]

// case 2: using JSON.parse(JSON.stringify())
const ironhackers3 = JSON.parse(JSON.stringify(students11));
students11[0].push('Sandra');
console.log(students11); // [ [ 'Ana', 'John', 'Fabio', 'Sandra' ],
// [ 'Alex', 'Mike', 'Vero' ] ]
console.log(ironhackers3); // [ [ 'Ana', 'John', 'Fabio' ], [ 'Alex', 'Mike', 'Vero' ] ]


//Mutable Data Types
//ES6 spread operator [...]
const students12 = ['Ana', 'John', 'Fabio'];
const ironhackers4 = [...students12, 'Ariel'];
console.log(students12); // => [ 'Ana', 'John', 'Fabio' ]
console.log(ironhackers4); // => [ 'Ana', 'John', 'Fabio', 'Ariel' ]

const students13 = ['Ana', 'John', 'Fabio'];
const ironhackers5 = ['Ariel', ...students13];
console.log(students13); // => [ 'Ana', 'John', 'Fabio' ]
console.log(ironhackers5); // => ['Ariel',  'Ana', 'John', 'Fabio' ]


//Removing elements from arrays
//.splice() - is used to remove a number of elements from the array starting at a certain position (index).
const students14 = ['Ana', 'John', 'Fabio'];
students14.splice(1, 1);
console.log(students14); // => [ 'Ana', 'Fabio' ]


//.pop() - is a method used to remove elements from the end of the array.
const students15 = ['Ana', 'John', 'Fabio'];
students15.pop();
console.log(students15); // => [ 'Ana', 'John' ]

//.shift() - is a method used to remove the first element from the array.
const students16 = ['Ana', 'John', 'Fabio'];
students16.shift();
console.log(students16); // => [ 'John', 'Fabio' ]


//.slice() and ES6 spread operator - when used together can save us a lot of trouble since the original array is not mutated.
const students17 = ['Ana', 'John', 'Fabio'];
const ironhackers6 = [...students17.slice(0, 1)];
console.log(students17); // => [ 'Ana', 'John', 'Fabio' ]
console.log(ironhackers6); // => [ 'Ana' ]


//Objects and mutability
//ES6 spread operator to add properties to objects without mutating it.
const book = {
  author: 'Charlotte Bronte',
};
const theSameBook = { ...book, pages: 400 };
console.log(book); // => { author: 'Charlotte Bronte' }
console.log(theSameBook); // => { author: 'Charlotte Bronte', pages: 400 }


//Object destructuring is a way to remove elements from objects without mutating it.
const book1 = {
  author: 'Charlotte Bronte',
  pages: 400,
  publishers: [
    {
      name: 'publisher1',
    },
    {
      name: 'publisher2',
    },
  ],
};
const { author, ...theRest } = book1;
console.log(author); // => Charlotte Bronte
console.log(theRest);
// => { pages: 400, publishers: [ { name: 'publisher1' }, { name: 'publisher2' } ] }
