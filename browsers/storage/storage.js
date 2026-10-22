"use strict";

localStorage.setItem("username","chandan yadav");

console.log(localStorage.getItem("username"));


// 4. Check whether a key exists
// console.log(localStorage.getItem("username") !== null);


// 5. Remove one item
localStorage.removeItem("username");

// store an object

const users={
    name:"chandan",
    role:"software developer",
    address:"karnataka"
}

localStorage.setItem("userDetails",JSON.stringify(users));


// 7. Read an object
const savedUser = JSON.parse(localStorage.getItem("userDetails"));
console.log(savedUser);
console.log(savedUser.name);
console.log(savedUser.role);
console.log(savedUser.address);


// 8. Store an array
const skills = ["JavaScript", "React", "Node.js"];

localStorage.setItem("skills", JSON.stringify(skills));

// 9. Read an array
const savedSkills = JSON.parse(localStorage.getItem("skills"));
console.log(savedSkills);

// 10. Clear everything for this origin
// localStorage.clear();

console.log("-----------session storage ----------")



// 1. Store data
sessionStorage.setItem("username", "Chandan");
sessionStorage.setItem("page", "dashboard");

// 2. Read data
console.log(sessionStorage.getItem("username"));
console.log(sessionStorage.getItem("page"));

// 3. Update data
sessionStorage.setItem("page", "reports");
console.log(sessionStorage.getItem("page"));

// 4. Store an array
const pages = ["Dashboard", "Reports", "Settings"];
sessionStorage.setItem("pages", JSON.stringify(pages));

// 5. Read an array
const savedPages = JSON.parse(sessionStorage.getItem("pages"));
console.log(savedPages);

// 6. Remove one item
// sessionStorage.removeItem("page");

// 7. Clear this tab's session storage
// sessionStorage.clear();


const employee={
    name:"Rahul",
    address:{
        city:"mysuru"
    },
    contact:{
        email:"rahul123@gmail.com"
    }

}

localStorage.setItem("employeess",JSON.stringify(employee));


const savedemployee=JSON.parse(localStorage.getItem("employeess"));

console.log(savedemployee.contact.email)