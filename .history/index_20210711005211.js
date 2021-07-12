//Display numbers from 1 to 10

let range = {
    from: 1,
    to: 10
};

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++};
            } else {
                return { done: true};
            }
        }
    };
};


for (let num of range) {
    console.log(num);
}


let numbers = [];
for (let i = 1; i <= 10; i++) {
    numbers.push([i]);
}
console.log(numbers);


let toDisplay = '';
for (let i = 1; i <= 10; i++) {
    toDisplay+=i;
}
console.log(toDisplay);


//Print the odd numbers less than 100


console.log(Array.from({length: 100}, (_, i) => i).filter(n => n % 2));




//Print the multiplication table with 7
//let result = [];
for (let i = 1; i < 10; i++) {
    let j = 7;
    console.log(i + '*' + j + '=' + i * j); 
}


//Print all the multiplication tables with numbers from 1 to 10

for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
        console.log(a + '*' + b + '=' + a * b);
    }
}

//Calculate the sum of numbers from 1 to 10


let summary = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reduce(function(a, b) {
    return a + b;
})
console.log(summary);
//Calculate 10!
/*function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let m = factorial(10);
console.log(m);*/

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
  
console.log( factorial(10) );

//Calculate the sum of odd numbers greater than 10 and less than 30


//Calculate the sum of numbers in an array of numbers
let n = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < n.length; i++) {
    sum += n[i];
}
console.log(sum);

//Calculate the average of the numbers in an array of numbers
let average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average([1,2,3,4,5]));

//Create a function that receives an array of numbers and returns an array containing only the positive numbers

/*const array = [2, -1, 0, -7, 4, 55, -9];
const getPositiveNum = (array) => array.filter(value => value => 0);
const positive = getPositiveNum(array);
console.log(positive);*/

let array = [2, -2, 6, -6, 10, -8, -7];

function returner(array) {
    let positive = [];
    for(let i = 0; i < array.length; i++) {
        let el = array[i];
        if (el >= 0) {
            positive.push(el);
        }
    }
    return positive;
}

let positive = returner(array);
console.log(positive);

//Find the maximum number in an array of numbers

let testArray = [100, 30, 9, 7, 98];
console.log(Math.max(...testArray));
//Create a function that will return a Boolean specifying if a number is prime

const isPrime = num => {
    for(let i = 2; i < num; i++) {
        if (num % i === 0) return false;
        return num > 1;
    }
}
console.log(isPrime());
//Calculate the sum of digits of a positive integer number



/*let array = [2, -2, 6, -6, 10, -8, -7];
let summar = 0;
const getPositive = (array) => {
    let pos = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if ( element >= 0) {
            pos.push(element);
        }
    }
    return sum += array[i];
    
}
let pos = getPositive(array);
console.log(pos);*/

//Print the first 100 prime numbers

let firstNumbers = [];
for (i = 0; i < 100; i++) {
    firstNumbers.push
}


