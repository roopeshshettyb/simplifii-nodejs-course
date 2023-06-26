let myName = 'Roopesh';

let x = 10.1;

/**
 * + => addition
 * - => subtraction
 * * => multiplication
 */

let name = '';
let age = '';

let userObj = {
    name: 'a',
    age: '1'
};

let stateNameCodeObj = {
    "KA": "Karnataka",
    "UP": "Uttar Pradesh"
};

// console.log(stateNameCodeObj["KA"]);

x = x - 2;

/**
 * > => greater than
 * < => less than
 * >= => greater than equal to
 * <= => less than equal to
 * == 
 * ===
 * !=
 * !==
 */

// if (x > 1) {
//     console.log('Yes x is greater than 1');
// }

// if (x < 1) {
//     console.log('Yes x is lesser than 1');
// } else {
//     console.log('No x is greater than 1');
// }

let array = ['KA', 'UP', 'AP', 'GJ', 'KA', 'UP', 'AP', 'GJ', 'KA', 'UP', 'AP', 'GJ', 'KA', 'UP', 'AP', 'GJ', 'KA', 'UP', 'AP', 'GJ', 'KA', 'UP', 'AP', 'GJ'];
// 0,1,2,3..

// console.log(array[3]);

function printMyName(name) { // name -> argument in our function
    console.log('My name is ->');
    console.log(name);
}

// printMyName('Roopesh');
// printMyName('Shivam');
// printMyName('Shivam');
// printMyName('Shivam');
// printMyName('Shivam');

function square(x) {
    x = x - 1;
    return x * x;
}

// console.log(square(10));

function squareNext(x) {
    x = x + 1;
    return x * x;
}

let result = squareNext(10);

// console.log(result + 1);

//  ['KA', 'UP', 'AP', 'GJ'];

// console.log(array[0]);

console.log(array.length);

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}