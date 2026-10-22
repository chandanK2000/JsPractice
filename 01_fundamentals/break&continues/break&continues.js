// Question 1 — Practice break
// Task: Print numbers from 1 to 10, but stop the loop when the number becomes 5.
let i = 1;

// for (i; i < 10; i++) {
//   if (i == 5) {
//     break;
//   }
//   console.log(i);
// }

// Question 2 — Practice continue 🎯
// Print numbers from 1 to 10, but skip the number 5. The loop should continue printing the remaining numbers.
// for (i; i < 10; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(i);
// }

// Question 3 — Use break with even numbers
// Task: Print even numbers from 2 to 20, but stop the loop when the number reaches 10.

// for (i; i < 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   if (i == 10) {
//     break;
//   }
// }

// Question 4 — continue with odd numbers
// Task: Print numbers from 1 to 15, but skip all even numbers.

for (i; i <= 15; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
}
