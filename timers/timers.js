// console.log("---------Timers Example in Javascript--------");

// 1. JavaScript timers kya hote hain?
// Sir, timers ka matlab hai JavaScript ko kisi kaam ko kuch time baad karna ya fixed interval par baar-baar karna batana.

// Example:
// - 3 seconds baad welcome message dikhana.
// - Har 1 second mein digital clock update karna.
// - 5 seconds baad notification hide karna.
// - Countdown timer banana.
// - Random background colour change karna.
// - Repeated API polling karna.
// JavaScript mein timers ke liye 4 main functions seekhenge:
// 1. setTimeout()
// Kuch delay ke baad ek baar kaam execute karne ke liye.
// Example: 3 seconds baad message.

// 2. setInterval()

// Fixed interval par baar-baar kaam execute karne ke liye.

// Example: Har second clock update.

// 3. clearTimeout()

// Pending setTimeout() ko cancel karne ke liye.

// 4. clearInterval()

// Running interval ko stop karne ke liye.

// Ek important baat, sir: timer exact second par execute hone ki guarantee nahi deta. Browser busy ho ya main thread kisi aur kaam mein busy ho, toh callback late execute ho sakta hai.

// 2. setTimeout()

// Syntax:
// setTimeout(callback, delay);

// console.log("start");
// setTimeout(() => {
//   console.log("welcome sir");
// }, 3000);
// console.log("end");

// Example 2: Normal function ke saath

// function welcome() {
//   console.log("Welcome to JavaScript!");
// }

// setTimeout(welcome, 3000);

// 3. setInterval() — baar-baar kaam karna
// Sir, setTimeout() ek baar execute hota hai, jabki setInterval() baar-baar execute hota hai jab tak aap use stop na karo.

// syntax
// setInterval(callback, delay);

// let count = 1;

// setInterval(() => {
//   console.log(count);
//   count++;
// }, 2000);

// Example 5: Interval ko 5 counts ke baad stop karna
// let count = 1;

// const timerId = setInterval(() => {
//   console.log(count);

//   count++;

//   if (count > 5) {
//     clearInterval(timerId);
//     console.log("Timer stopped!");
//   }
// }, 1000);

// let count = 1;

// const timerId = setInterval(() => {
//   console.log(count);

//   count++;

//   if (count > 5) {
//     clearInterval(timerId);
//     console.log("Timer stopped!");
//   }
// }, 1000);

// 7. Timer use karne ke aur tareeke
// Timer ke andar sirf arrow function hi use nahi karna hota. Aap alag-alag tarikon se callback pass kar sakte ho.

// Method 1: Arrow function
// setTimeout(() => {
//   console.log("Hello");
// }, 2000);

// Method 2: Named function
// function greet() {
//   console.log("Hello");
// }

// setTimeout(greet, 2000);

// Method 3: Function declaration ke bajaye function expression
// const greet = function () {
//   console.log("Hello");
// };

// setTimeout(greet, 2000);

// Method 4: Callback ko arguments pass karna
// function greet(name,age) {
//   console.log("Hello", name,age);
// }

// setTimeout(greet, 2000, "Chandan",27);

console.log("--------------timers practice from Here--------");
// 1. Print 'Hello JavaScript' after 2 seconds using setTimeout().

// setTimeout(() => {
//   console.log("Hello JavaScript");
// }, 2000);

// function Hellojs() {
//   console.log("Hello js");
// }

// setTimeout(Hellojs, 2000);

// 2. Print your name after 3 seconds.

// setTimeout(() => {
//   console.log("my name is chandan kumar");
// }, 3000);

// // 3. Print 'Welcome Sir' after 5 seconds.

// setTimeout(() => {
//   console.log("Welcome sir");
// }, 5000);

// 4. Print 'Start' immediately and 'End' immediately, then print 'Finished' after 2 seconds.

//
// console.log("start");
// console.log("end");
// function Finished() {
//   console.log("finished");
// }

// setTimeout(Finished, 2000);

// expression method 2

// let finished = function () {
//   console.log("finished");
// };

// setTimeout(finished, 2000);

// method 3 arrow funciton

// console.log("start");
// console.log("end");

// setTimeout(() => {
//   console.log("finished");
// }, 2000);

// console.log("-------------");

// Q 5. Print numbers 1 to 5 with a 1-second delay between each number.

// function printNumbers() {
//   for (let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//       console.log(i);
//     },i*1000);
//   }
// }

// printNumbers();

// Q 6. setTimeout() ka use karke 10, 9, 8, 7, 6 print kijiye, har number ke beech 1 second ka gap hona chahiye.

// function printReverseNumber() {
//   let count = 1;

//   for (let i = 10; i >= 1; i--) {
//     setTimeout(() => {
//       console.log(i);
//     }, count * 1000);
//     count++;
//   }
// }

// printReverseNumber();

// 7. Print 'Good Morning' after 1 second using an arrow function.

// const greet = () => {
//   console.log("Good Morning");
// };

// setTimeout(greet, 1000);

// Next Q7: setTimeout() ka use karke 2, 4, 6, 8, 10 print kijiye, har number ke beech 1 second ka gap hona chahiye.
// function PrintNumbers() {
//   let num = 2;
//   let count = 1;

//   while (num <= 20) {
//     let currentNum = num;

//      setTimeout(() => {
//       console.log(currentNum);

//     }, count * 1000);

//     num += 2;
//     count++;
//   }
// }

// PrintNumbers();

// 8. Create a named function that prints a message after 2 seconds.

// function named() {
//   let message = "Hello javascript";
//   let count = 2;
//   setTimeout(() => {
//     console.log(message);
//   }, count * 1000);
// }

// named();

// 9. Pass your name as an extra argument to setTimeout().

// function Name(name) {
//   setTimeout((username) => {
//     console.log(username);
//   }, 1000, name);
// }

// Name("chandan kumar");

// function Name(name) {
//   setTimeout(() => {
//     console.log(name);
//   }, 1000);
// }

// Name("chandan");

// 10. Use an anonymous function expression as a timer callback.

// const message = function () {
//   console.log("Hello JavaScript");
// };

// setTimeout(message, 2000);

// 11. Execute two setTimeout() calls with delays of 2 seconds and 4 seconds.

// setTimeout(() => {
//     console.log('first timer: 2 seconds')
// }, 2000);

// setTimeout(() => {
//     console.log('second timer: 4 seconds')
// }, 4000);

// 12. Schedule three messages with different delays and observe their execution order.

// function Messages() {
//   let message1 = "Hello sir!";
//   let message2 = "How are you?";
//   let message3 = "I am learning JavaScript.";

//   setTimeout(() => {
//     console.log(message1);
//   }, 1000);

//   setTimeout(() => {
//     console.log(message2);
//   }, 2000);

//   setTimeout(() => {
//     console.log(message3);
//   }, 3000);
// }

// Messages();

// 13. Print the current date after 3 seconds.

// function printcurrentDate() {
//   let currentDate = new Date();
//   let year=currentDate.getFullYear();
//   let month=currentDate.getMonth();
//   let date=currentDate.getDate();
//   let hours=currentDate.getHours();
//   let seconds=currentDate.getSeconds();

//   setTimeout(() => {
//     console.log(currentDate);
//     console.log(year);
//     console.log(month);
//     console.log(date);
//     console.log(hours);
//     console.log(seconds);
//   }, 3000);
// }

// printcurrentDate();

// 14. Print the square of 5 after 2 seconds.

// function printSquare(Number) {
//   setTimeout(() => {
//     console.log(`The square of ${Number} is :-> ${Math.pow(Number, 2)}`);
//   }, 2000);
// }

// printSquare(5);

// 15. Print the sum of two numbers after 3 seconds.

// function printSum() {
//   let num1 = 20;
//   let num2 = 30;
//   let sum = num1 + num2;
//   setTimeout(() => {
//     console.log(`The sum of ${num1} and ${num2} is :-> ${sum}`);
//   }, 2000);
// }

// printSum();

// 16. Print every array element using setTimeout() with the same delay; observe the output.

// function PrintArray() {
//   let students = ["mohan", "sohan", "rohan", "anjali", "anamika"];

//   for (let i = 0; i <= students.length - 1; i++) {
//     setTimeout(() => {
//       console.log(students[i]);
//     }, 1000);

//   }
// }
// PrintArray();

// 17. Print array elements in the correct order, one per second.

// function PrintArray() {
//   let students = ["mohan", "sohan", "rohan", "anjali", "anamika"];
//   let count = 1;

//   for (let i = 0; i <= students.length - 1; i++) {
//     setTimeout(() => {
//       console.log(students[i]);
//     }, count * 1000);
//     count++;
//   }
// }
// PrintArray();

// 18. Use setInterval() to print 'Hello' every second.

// setInterval(() => {
//   console.log("Hello");
// }, 1000);

// let timerId = setInterval(() => {
//   console.log("Hello");
// }, 1000);

// setTimeout(() => {
//   clearInterval(timerId);
//   console.log("Timer stopped!");
// }, 5000);

// 19. Print an increasing counter every 2 seconds.

// let counter = 1;

// setInterval(() => {
//   console.log(counter++);
// }, 2000);

// 20. Print even numbers from 2 to 20 at 1-second intervals.

// let counter = 2;
// setInterval(() => {
//     if(counter>20){
//         return;
//     }
//   console.log(counter);

//   counter += 2;

// }, 1000);

// let counter = 2;
// let timerid = setInterval(() => {
//   console.log(counter);

//   if (counter >= 20) {
//     clearInterval(timerid);
//   } else {
//     counter += 2;
//   }
// }, 1000);

// Q21. setInterval() ka use karke 10, 9, 8, ... 1 countdown print kijiye aur 1 ke baad interval stop kijiye. 💪

// console.log("-------------");

// let counter = 10;

// setInterval(() => {
//   if (counter<=1) {
//     return;
//   }
//   console.log(counter);
//   counter--;
// }, 1000);

// console.log("------------------------");

// let counter = 10;

// let timerid = setInterval(() => {
//   console.log(counter);
//   if (counter ===1) {
//     clearInterval(timerid);
//   }
//   counter--;
// }, 1000);

// 21. Print odd numbers from 1 to 19 at 500-millisecond intervals.

// console.log("---------------");

// let counter = 1;

// let intervalId =setInterval(() => {
//   if (counter >= 20) {
//     clearInterval(intervalId );
//     return;
//   }
//   if (counter % 2 !== 0) {
//     console.log(counter);
//   }
//   counter++;
// },500);

// // 22. Display a message every 3 seconds.
// console.log("-----------------");

// let message = "Hello sir i am learning javascript !";

// let timerid = setInterval(() => {
//   console.log(message);
// }, 3000);

// setTimeout(() => {
//   clearInterval(timerid);
// }, 10000);

// 23. Create two independent intervals that print different messages.
// console.log("-----------------");

// let timerid2=setInterval(() => {
//     console.log('Hello i am here to assist YOu');

// }, 1000);

// let timerid1=setInterval(() => {
//     console.log('are you Available there ?');

// }, 2000);

// setTimeout(() => {
//     clearInterval(timerid1);
//     clearInterval(timerid2);
// }, 6000);

// 24. Use setTimeout() to call another function after 2 seconds.

// console.log("-----------------");

// function Hello(){
//     console.log('i am good learning js');

// }

// setTimeout(Hello,2000);
// setTimeout(Hello(),2000); //calls immediately sir here

// 25. Compare setTimeout() and setInterval() with practical examples.
// console.log("-----------------");

// setTimeout(() => {
//   console.log("i love you richa");
// }, 1000);

// let counter = setInterval(() => {
//   console.log("i Love you rani");
//   setTimeout(() => {
//     clearInterval(counter);
//   }, 4000);
// }, 2000);

// Level 2 — Basic timers and cancellationQuestions 26–500/25
// console.log("-----------------");

let counter = 1;
let timerId;

function startCounter() {
  console.log("start counter");
  if (timerId) return;

  timerId = setInterval(() => {
    console.log(counter);
    counter++;

    if (counter > 20) {
      stopCounter();
    }
  }, 1000);
}

function stopCounter() {
  clearInterval(timerId);
  console.log("stopped counter");
  timerId = null;
}
