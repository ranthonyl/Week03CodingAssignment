// 1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

let ages = [3, 9, 23, 64, 2, 8, 28, 93.];
console.log(ages);


// 1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   
// Do not use numbers to reference the last element, find it programmatically.
// ages[7] – ages[0] is not allowed!

let lastElement = ages[ages.length - 1];
let firstElement = ages[0];

let sum = lastElement - firstElement;

console.log(sum);


// 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).

ages.push(41);

let newlastElement = ages[ages.length - 1];
let newfirstElement = ages[0];

let newSum = newlastElement - newfirstElement;

console.log(newSum);

// 1c. Use a loop to iterate through the array and calculate the average age. 


let averageAge = ages.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(averageAge/9);




// 2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];



// 2a. Use a loop to iterate through the array and calculate the average number of letters per name. 

let lengths = names.map(function(element) {
    return element.length;
});
let averageNumberOfLetters = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});

console.log(averageNumberOfLetters / 6);

// 2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

const string = names.join(' ');

console.log(string);


// 3.  How do you access the last element of any array?

console.log(names[names.length - 1]);


// 4.  How do you access the first element of any array?

console.log(names[0]);


// 5.  Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

// For example:

// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

names[0] = 'Kelly'

names[1] = 'Sam'

names[2] = 'Kate'

console.log(names);

let nameLengths = names.map(function(element) {
    return element.length;
});

console.log(nameLengths);


// 6.  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 

let result = 0;
nameLengths.forEach(number => {
    result += number;
})
console.log(result);




// 7.  Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function wordMultiply(word, n) {
    console.log(word.repeat(n));
}

wordMultiply('hello', 3)




// 8.  Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.

function createFullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}

createFullName('Rudy', 'Lucero');


// 9.  Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let arrayOfNumbers = [3, 9, 23, 64, 2, 8, 28, 93];

let sumOfNumbers = arrayOfNumbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
});
console.log(sumOfNumbers >= 100);


// 10.  Write a function that takes an array of numbers and returns the average of all the elements in the array.

let total = 0
for (let i = 0; i < arrayOfNumbers.length; i++) {
    total += arrayOfNumbers[i];
}

let average = total / arrayOfNumbers.length;

console.log(average);

// 11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.


function array1Average (array1) {
        let total = 0
    for (let i = 0; i < arrayOfNumbers.length; i++) {
    total += arrayOfNumbers[i];
    }

    let average = total / arrayOfNumbers.length;
    }
function array2Average (array2) {
        let total = 0
    for (let i = 0; i < arrayOfNumbers.length; i++) {
    total += arrayOfNumbers[i];
    }

    let average = total / arrayOfNumbers.length;
    }
array1Average(ages);
array2Average(arrayOfNumbers);

console.log(array1Average > array2Average);




// 12.  Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside, moneyInPocket) {
    return (isHotOutside != false && moneyInPocket >= 10.50);
};

console.log(willBuyDrink(true, 10.4));





// 13.  Create a function of your own that solves a problem. 

function willIGetDrunkTonight (isWifes40thBirthday, stressLevel) {
    return (isWifes40thBirthday != false && stressLevel > 8.5)
};

console.log(willIGetDrunkTonight(true, 9.7));

// In comments, write what the function does and why you created it.
// Both are true in the above example, It is my wife's 40th Birthday Today and My Stress Level is at about a 9.7 with this coding assignment. 
// I feel like some of the puzzle pieces are coming together, but I definatly need a little more help with loops. Just ran out of time today. 