// Three numbers to be sorted
let a = 8;
let b = 4;
let c = 12;

if (a > b) {
    let x = a;
    a = b;
    b = x;
}

if (b > c) {
    let x = b;
    b = c;
    c = x;
}

if (a > b) {
    let x = a;
    a = b;
    b = x;
}

console.log("Sorted Numbers:", a, b, c);
