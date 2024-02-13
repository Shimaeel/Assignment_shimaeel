// Write a JS code to print a stair of numbers using a loop: Question - 5

const numberOfRows = 5;

for (let i = 1; i <= numberOfRows; i++) {
    let stair = '';
    for (let j = 1; j <= i; j++) {
        stair += j + ' ';
    }
    console.log(stair);
}
