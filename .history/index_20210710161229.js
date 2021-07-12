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

const oddNumbers = (array) => {
    for (let i = 0; i < array.length; i++) {
        let item
    }
}