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



function getOddSum (limit) {
    if (limit % 2) limit++;
    return limit * limit / 4;
}
let sum