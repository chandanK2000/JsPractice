const a = 20;

if (a > 18) {
  console.log("you are elegiable for vote");
} else {
  console.log("you are not eligiable for vote");
}

// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

let year = 2015;

if (year == 2015) {
  console.log("You guessed it right!");
} else {
  console.log("How can you be so wrong?");
}

let accessallowed;

// let age=prompt("how old are you");
let age = 22;

if (age > 18) {
  accessallowed = true;
} else {
  accessallowed = false;
}

console.log(accessallowed);

// let personage = prompt('age?', 18);
let personage = 25;

let message =
  personage < 3
    ? "Hi, baby!"
    : personage < 18
      ? "Hello!"
      : personage < 100
        ? "Greetings!"
        : "What an unusual personage!";

console.log(message);

if ("0") {
  console.log("hello");
}

// let values = prompt("please enter one values", 0);
let values = 10;

if (values > 0) {
  console.log(1);
} else if (values < 0) {
  console.log(-1);
} else console.log(0);

{
  let a = 10;
  let b = 20;

  let result = a + b > 100 ? "over" : "below";

  console.log(result);
}

// function messages() {
//   let message;

//   //   let login="Employee";
//   let login = "Director";

//   if (login == "Employee") {
//     message = "Hello";
//   } else if (login == "Director") {
//     message = "Greetings";
//   } else if (login == "") {
//     message = "No login";
//   } else {
//     message = "";
//   }

//   return message;
// }

// console.log(messages());

let login = "Employee";

let messages =
  login == "Employee"
    ? "Hello"
    : login == "Director"
      ? "Greetings"
      : login == ""
        ? "no login"
        : "";

console.log(message);

let numbers = 5;

if (numbers > 0) {
  console.log("postitive");
} else if (numbers > 0) {
  console.log("negative");
} else {
  console.log("zero");
}


let password="hello1"

if(password.length>=8){
    console.log("password length is 8 character and it is valid")
}else{
    console.log('your password length is less than 8')
}


// let useraname=null;

// let results=useraname ?? "guest";
// console.log(results);

let userName = "";
let result = userName ?? "Guest";


let user = {
  name: "Chandan",
  email: "chandan@example.com"
};

console.log(user?.name);  
console.log(user?.phone); // undefined

console.log(result);