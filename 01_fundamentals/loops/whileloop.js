// let i = 10;

// while (i>0) {
//   console.log(i);
//   i--;
// }

// Question 2 — Print even numbers from 1 to 20

// num=1;

// while(num<40){
//     if(num%2==0){
//         console.log(num)
//     }
//     num++;
// }

// Question 4 — Calculate the sum of numbers from 1 to 10

// let num;
// num=1;

// let sum=0;

// while(num<=20){
//     console.log(num);
//     sum=sum+num;
//     num++;
// }

// console.log("sum of number from 1 to 10 :"+" "+sum);

// Question 5 — Print the multiplication table of 5
// num = 4;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} x ${i} = ${num * i}`);
// }

// num = 6;
// let i = 1;
// while (i < 10) {
//   console.log(`${num} x ${i} = ${num * i}`);
//   i++;
// }

// Question 6 — Count numbers backward from 10 to 1

// let i = 10;

// while (i > 0) {
//   console.log(i);
//   i--;
// }

// Question 8 — Count how many digits a number has
// let num = 2345;

// let count = 0;
// let sum = 0;

// while (num > 0) {
//   num = Math.floor(num / 10);
//   count++;
// }

// console.log(count);
// console.log(sum);

// let number=20.887;

// let result=Math.floor(number/2);
// console.log(result)

// Question 8 — digit sum of  a number

let number = 234566;
let sum = 0;
let reverse = 0;


while (number > 0) {
  let digit = number % 10;
  sum = sum + digit;
  reverse = reverse * 10 + digit;
  number = Math.floor(number / 10);
}

console.log("Sum of digits:", sum);
console.log("Reverse of digits:", reverse);


let num=675896433674;

let str=String(num);

console.log(str);
console.log(typeof str)

for(let i=0;i<str.length;i++){
    console.log(Number(str[i]))
}

