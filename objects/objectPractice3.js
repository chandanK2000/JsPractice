console.log("--------object practice3 Level Q (61-90) covered-------------");

// 61. Create a person object containing a nested address object.

console.log("------person object with nested address----");

const person = {
  name: "mohini",
  lname: "kumari",
  job: "software developer",
  address: {
    state: "karnataka",
    city: "bangalore",
    street: "abc",
    pincode: "845302",
  },
};

console.log(person);

// 62. Access the person's city inside the address.

console.log("------------------------------");

let city = person?.address?.city;
console.log(city); //bangalore

// 63. Update the nested city property.
console.log("----------------------------");

const updatecity = (person.address.city = "ranchi");
console.log(updatecity);

console.log(person);

// 64. Add a new property inside a nested object.

console.log("------------------------------");

const newproperty = (person.address.nationality = "indian");
console.log(newproperty);
console.log(person);

// 65. Delete a property from a nested object.

console.log("------------------------------");

const deletedProperty = delete person.address.nationality;

console.log(deletedProperty);

console.log(person);

// 66. Create an employee with a nested department and manager.

console.log("-----------------------------");

const employee = {
  fname: "Rohit",
  lname: "Chaurasiay",
  mobile: 8458684764,
  age: 24,
  department: {
    name: "IT",
    location: "bangalore",
  },
  manager: {
    name: "chandu",
    designation: "Team Lead",
  },
};

console.log(employee);

// 67. Access the manager's name.

const mname = employee?.manager?.name;

console.log(mname);

// 68. Create a company object containing an array of employee objects.

console.log("-----------------------");

const company = {
  name: "DataNovelTech",

  employees: [
    {
      id: 1,
      name: "Chandan",
      designation: "Software Developer",
      salary: 120000,
      department: "IT",
    },
    {
      id: 2,
      name: "Rahul",
      designation: "Team Lead",
      salary: 150000,
      department: "IT",
    },
    {
      id: 3,
      name: "Priya",
      designation: "HR Manager",
      salary: 12000,
      department: "HR",
    },
    {
      id: 4,
      name: "Anil",
      designation: "Software Developer",
      salary: 18000,
      department: "IT",
    },
  ],
};

console.log(company);

console.log(company.employees[0].name);
console.log(company.employees[1].designation);
console.log(company.employees[2].name);

// 69. Print every employee's name.

console.log("-------------------------");

console.log(company);
// console.log(company.employees[0].name);

for (let i = 0; i < company.employees.length; i++) {
  console.log(`${i} - ${company.employees[i].name}`);
}

// 70. Find an employee by ID inside the array.

console.log("-------------------------");

// console.log(company.employees[0].id);

const employeebyid = company.employees.find((emp) => emp.id === 2);

console.log(employeebyid);

// Find the employee whose ID is 3 and print only their name.

// const empid3 = company.employees.find((emp) => emp.id === 5);
const empid3 = company.employees.find((emp) => emp.id === 3);

if (empid3) {
  console.log(empid3.name);
} else {
  console.log("Employee not found");
}

console.log(empid3.name);

// 71. Find employees whose salary exceeds a given amount.

console.log("-------------exceed salary------------");

// sailory

let targeamount = 120000;

for (let i = 0; i < company.employees.length; i++) {
  if (company.employees[i].salary > targeamount) {
    console.log(company.employees[i]);
  }
}

// 72. Calculate the total salary of all employees.

console.log("------ Total Salary of All Employees ------");

function totalEmployeesSalary() {
  let total = 0;

  for (let i = 0; i < company.employees.length; i++) {
    let salary = company.employees[i].salary;

    console.log(`${company.employees[i].name}: ₹${salary}`);

    total = total + salary;
  }

  console.log("------------------------------");
  console.log(`Total Salary: ₹${total}`);
}

totalEmployeesSalary();

// 73. Find the employee with the highest salary.

console.log("------ Highest Salary Employee ------");

let highestsalary = -Infinity;
let highestEmployee;

for (let i = 0; i < company.employees.length; i++) {
  let salary = company.employees[i].salary;

  if (salary > highestsalary) {
    highestsalary = salary;
    highestEmployee = company.employees[i];
  }

  console.log(`${company.employees[i].name}: ₹${salary}`);
}

console.log("------------------------------");
console.log("Highest Paid Employee:", highestEmployee);
console.log(`Highest Salary: ₹${highestsalary}`);

// 74. Find the employee with the lowest salary.

console.log("------ lowest Salary Employee ------");

let lowestsalary = Infinity;
let lowestSalaryEmployee;

for (let i = 0; i < company.employees.length; i++) {
  let salary = company.employees[i].salary;

  if (salary < lowestsalary) {
    lowestsalary = salary;
    lowestSalaryEmployee = company.employees[i];
  }

  console.log(`${company.employees[i].name}: ₹${salary}`);
}

console.log("------------------------------");
console.log("Lowest Paid Employee:", lowestSalaryEmployee);
console.log(`lowestsalary Salary: ₹${lowestsalary}`);

// 75. Count employees in each department.

console.log("----- Employees in Each Department -----");

let departmentCount = {};

for (let i = 0; i < company.employees.length; i++) {
  let department = company.employees[i].department;

  if (departmentCount[department]) {
    departmentCount[department]++;
  } else {
    departmentCount[department] = 1;
  }
}

console.log(departmentCount);

// 76. Create a nested object representing a student's subjects and marks.

console.log("-------------------stuent objects-------------------");

const student = {
  id: 101,
  name: "Chandan",
  age: 24,

  academics: {
    course: "Full Stack Development",
    semester: 3,

    subjects: {
      JavaScript: 85,
      ReactJS: 92,
      NodeJS: 78,
      HTML: 35,
      CSS: 65,
    },

    attendance: {
      totalClasses: 100,
      attendedClasses: 85,
    },
  },

  contact: {
    address: {
      city: "Bengaluru",
      state: "Karnataka",
      country: "India",
    },
    phone: "9876543210",
  },

  hobbies: ["Coding", "Reading", "Playing Cricket"],

  guardian: {
    name: "Rahul",
    relationship: "Brother",
  },
};

console.log(student);

// 77. Calculate the total marks of a student.
// 78. Calculate the average marks.

console.log("------------total marks--------");

let totalmarks = 0;

// console.log(student.academics.subjects.JavaScript);

let totalSubjectLength = Object.keys(student.academics.subjects).length;
console.log(`total subject length is ${totalSubjectLength}`);

for (let subjects in student.academics.subjects) {
  let marks = student.academics.subjects[subjects];

  totalmarks += marks;

  console.log(`${subjects}-${marks}`);
}

console.log("------------------------------");

let average = totalmarks / totalSubjectLength;

console.log(`Total marks of ${student.name} - ${totalmarks}`);
console.log(`Average of TotalMarks is : ${average}`);

// 79. Find the subject with the highest marks.
// 80. Find subjects with marks below 40.

console.log("----------- Highest Marks -------------------");

let highestMarks = -Infinity;
let highestSubject = "";

for (let subject in student.academics.subjects) {
  let marks = student.academics.subjects[subject];

  if (marks > highestMarks) {
    highestMarks = marks;
    highestSubject = subject;
  }

  if (marks < 40) {
    console.log(`Subject below 40: ${subject} - ${marks}`);
  }
}

console.log("-------------------------------");

console.log(`Highest Subject: ${highestSubject}`);
console.log(`Highest Marks: ${highestMarks}`);

// 81. Safely access a missing nested property using optional chaining.

console.log("--------- Optional Chaining ---------");

let schoolName = student.academics?.school?.name || "school not found";

console.log(schoolName);

// 82. Display a custom message when a nested property is missing using ??.

let schoolNames = student.academics?.school?.name ?? "School not found";
console.log(schoolNames);

// 83. Safely access an array element inside an object.

console.log("--------- Safe Array Access ---------");

let firstHobby = student?.hobbies?.[0];

console.log(`My First Hobbies Is :- ${firstHobby} 😃`);

// 84. Access a deeply nested property using optional chaining.

console.log("--------- Deeply Nested Property ---------");

let cities = student?.contact?.address?.city;

console.log("Student city:", cities);

// 85. Safely read a nested property from a supplied object.

console.log("--------- Safe Nested Property ---------");

function getNestedProperty(obj, keys) {
  let result = obj;

  for (let key of keys) {
    if (result === null || result === undefined) {
      return undefined;
    }

    result = result[key];
  }

  return result;
}

console.log(getNestedProperty(student, ["contact", "address", "city"]));

console.log(getNestedProperty(student, ["academics", "school", "name"]));


// 86. Update a nested property using a sequence of keys.

console.log("--------- Update Nested Property ---------");

function updateNestedProperty(obj, keys, newValue) {
    let result = obj;

    // Find the object containing the property to update
    for (let i = 0; i < keys.length - 1; i++) {
        let key = keys[i];

        if (result === null || result === undefined) {
            return false;
        }

        result = result[key];
    }

    // Check whether the parent object exists
    if (result === null || result === undefined) {
        return false;
    }

    // Update the final property
    result[keys[keys.length - 1]] = newValue;

    return true;
}

console.log("Before:", student.contact.address.city);

let updated = updateNestedProperty(
    student,
    ["contact", "address", "city"],
    "Ranchi"
);

console.log("Updated successfully:", updated);
console.log("After:", student.contact.address.city);


// 87. Check whether a nested path exists.

console.log("--------- Check Nested Path ---------");

function hasNestedPath(obj, keys) {
    let result = obj;

    for (let key of keys) {
        if (
            result === null ||
            result === undefined ||
            !Object.hasOwn(result, key)
        ) {
            return false;
        }

        result = result[key];
    }

    return true;
}

console.log(
    hasNestedPath(student, ["contact", "address", "city"])
);

console.log(
    hasNestedPath(student, ["academics", "school", "name"])
);

console.log(
    hasNestedPath(student, ["guardian", "name"])
);


// 88. Retrieve a nested value with a default fallback.

console.log("--------- Nested Value With Default ---------");

function getNestedValue(obj, keys, defaultValue) {
    let result = obj;

    for (let key of keys) {
        if (result === null || result === undefined) {
            return defaultValue;
        }

        result = result[key];
    }

    // Return the default if the final value is null or undefined
    if (result === null || result === undefined) {
        return defaultValue;
    }

    return result;
}

console.log(
    getNestedValue(student, ["contact", "address", "city"], "Unknown City")
);

console.log(
    getNestedValue(student, ["academics", "school", "name"], "School Not Found")
);

console.log(
    getNestedValue(student, ["academics", "subjects", "ReactJS"], 0)
);



// 89. Find all leaf values in a nested object.

// A leaf value is a value in a nested object that does not contain another object or array inside it. It is a value at the end of a branch.

function findLeafValues(obj) {
    let values = [];

    for (let key in obj) {
        let value = obj[key];

        if (value !== null && typeof value === "object") {
            values.push(...findLeafValues(value));
        } else {
            values.push(value);
        }
    }

    return values;
}

console.log(findLeafValues(data));


// ....../////////////////////...............................



const data = {
    name: "Chandan",
    age: 24,
    address: {
        city: "Bengaluru",
        country: "India"
    },
    marks: {
        JavaScript: 85,
        ReactJS: 92
    }
};


// 90. Count all leaf properties in a nested object.

function countLeafProperties(obj) {
    let count = 0;

    for (let key in obj) {
        let value = obj[key];

        if (value !== null && typeof value === "object") {
            count += countLeafProperties(value);
        } else {
            count++;
        }
    }

    return count;
}

console.log(countLeafProperties(data));