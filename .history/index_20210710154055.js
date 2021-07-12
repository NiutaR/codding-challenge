//Display numbers from 1 to 10

/*let range = {
    from: 1,
    to: 10
};

[Symbol.iterator]() {
    this.current = this.from;
    return this;
},
next() {

}

for (let num of range) {
    console.log(num);
}*/
let numbers = [];
for (let i = 1; i <= 10; i++) {
    numbers.push([])
}



let toDisplay = '';
for (let i = 1; i <= 10; i++) {
    toDisplay+=i;
}
console.log(toDisplay);

