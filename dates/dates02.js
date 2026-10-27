console.log(
  "-----date object practice example------Level 1 Q. 1-41------------",
);

// 1.Create a Date object representing the current date and time.

const d = new Date();

console.log(d);

// ===================================================

// 2.Create a Date object for 5 November 1899.

console.log("--------------------------");

// const d1=new Date("1899/11/5");
const d1 = new Date(1899, 11, 5);

console.log(d1);

// =============================================
console.log("------------------------------");

// 3.Create a Date object for 1 January 2025 using numeric arguments.

const d2 = new Date(2025, 0, 1);

console.log(d2);

// =============================================

console.log("------------------------------");

// 4.Create a Date object using an ISO date string.

const d3 = new Date("2024-12-25");

console.log(d3);

// =============================================

console.log("------------------------------");

// 5.Create a Date object representing 25 December 2024.

const d4 = new Date(2024, 11, 25);
console.log(d4);

// =============================================

console.log("------------------------------");

// 6.Create a Date object representing 15 August 1947.

// const d5=new Date("1947-7-15");
const d5 = new Date(1947, 7, 15);

console.log(d5);

// =============================================

console.log("------------------------------");

// 7.Create a Date object representing 29 February 2024.

const d6 = new Date(2024, 1, 29);

console.log(d6);

// =============================================

console.log("------------------------------");

// 8. Create a Date object for 31 December 2025 at 23:59:59.

const d7 = new Date(2025, 11, 31, 23, 59, 59);

console.log(d7);

// =============================================

console.log("------------------------------");

// 9.Create a Date object using a timestamp of zero.

const d8 = new Date(0);

console.log(d8);

// =============================================

console.log("------------------------------");

// 10.Create two Date objects representing different dates.

const d9 = new Date(2025, 8, 30);
const d10 = new Date(2026, 9, 20);

console.log(d9);
console.log(d10);

// =============================================

console.log("------------------------------");

// 11.Print a Date object using console.log().

const d11 = new Date();

console.log(d11);

// =============================================

console.log("------------------------------");

// 12.Convert a Date object into a readable string using toString().

const d12 = new Date(2025, 10, 26);

console.log(d12.toDateString());
console.log(d12.toString());

// =============================================

console.log("------------------------------");

// 13.Convert a Date object into a date-only string using toDateString().

const d13 = new Date();
console.log(d13.toDateString());

// =============================================

console.log("------------------------------");

// 14.Convert a Date object into a time-only string using toTimeString().

const d14 = new Date();
console.log(d14.toTimeString());

// =============================================

console.log("------------------------------");

// 15.Convert a Date object into an ISO string using toISOString().

const d15 = new Date();

console.log(d15.toISOString());

// =============================================

console.log("------------------------------");

// 16.Convert a Date object into a UTC string using toUTCString().

const d16 = new Date();

console.log(d16.toUTCString());

// =============================================

console.log("------------------------------");

// 17.Extract the year from the current date.

const d17 = new Date();

console.log(d17.getFullYear());

// =============================================
console.log("------------------------------");

// 18.Extract the month from the current date.

// 19.Extract the day of the month.

// 20.Extract the day of the week.

const d18=new Date();

console.log(d18.getMonth());
console.log(d18.getDay());
console.log(d18.getDate());

// =============================================
console.log("------------------------------");


// 21.Extract the current hour.

// 22.Extract the current minute.

// 23.Extract the current second.

// 24.Extract the current millisecond.

// 25.Extract the timestamp using getTime().


const d19= new Date();

// 21. Extract the current hour
console.log("Current Hour:", d19.getHours());

// 22. Extract the current minute
console.log("Current Minute:", d19.getMinutes());

// 23. Extract the current second
console.log("Current Second:", d19.getSeconds());

// 24. Extract the current millisecond
console.log("Current Millisecond:", d19.getMilliseconds());

// 25. Extract the timestamp using getTime()
console.log("Timestamp:", d19.getTime());

