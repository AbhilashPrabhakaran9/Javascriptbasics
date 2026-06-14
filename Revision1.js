

let m1 = 56
let m2 = 65
let m3 = 89
let m4 = 72
let m5 = 61


let total = m1 + m2 + m3 + m4 + m5;


let average = total / 5;


let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "F";
}


console.log("Total Marks:", total);
console.log("Average Marks:", average);
console.log("Grade:", grade);