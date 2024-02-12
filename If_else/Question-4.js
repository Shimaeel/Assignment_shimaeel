// Check if a triangle is equilateral, scalene, or isosceles: Question - 4

let sideA = 5;
let sideB = 7;
let sideC = 5;

if (sideA === sideB && sideB === sideC) {
        console.log("Equilateral triangle");
    } else if (sideA === sideB || sideA === sideC || sideB === sideC) {
        console.log("Isosceles triangle");
    } else {
        console.log("Scalene triangle");
    }




