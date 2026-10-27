console.log("------dates example in javascript-------------");

const d = new Date();

console.log(d);

const d1 = new Date("2022-03-25");

console.log(d1);

// =============================================================

console.log("---There are 9 ways to create a new date object--");

// There are 9 ways to create a new date object:

// new Date()
// new Date(date string)

// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)

// new Date(milliseconds)

const d2 = new Date(18, 11, 24);

console.log(d2.toDateString());
console.log(d2.toUTCString());
console.log(d2.toISOString());

// ==================================================

// Date Get Methods

console.log("---------------Date Get Methods----------");

// Method	Description
// getFullYear()	Get year as a four digit number (yyyy)
// getMonth()	Get month as a number (0-11)
// getDate()	Get day as a number (1-31)
// getDay()	Get weekday as a number (0-6)
// getHours()	Get hour (0-23)
// getMinutes()	Get minute (0-59)
// getSeconds()	Get second (0-59)
// getMilliseconds()	Get millisecond (0-999)
// getTime()	Get time (milliseconds since January 1, 1970)

const d3 = new Date(1899, 10, 5);

// Get the year
console.log("Year:", d3.getFullYear());

// Get the month (0 = January, 10 = November)
console.log("Month:", d3.getMonth());

// Get the day of the month
console.log("Date:", d3.getDate());

// Get the hours
console.log("Hours:", d3.getHours());

// Get the minutes
console.log("Minutes:", d3.getMinutes());

// Get the seconds
console.log("Seconds:", d3.getSeconds());

// Get the milliseconds
console.log("Milliseconds:", d3.getMilliseconds());

// Get the timestamp in milliseconds since January 1, 1970
console.log("Timestamp:", d3.getTime());

console.log("-------------------------");

let ms = Date.now();

console.log(ms);

// ==================================================

console.log("------------Utc in javascript----------");

const date = new Date();

console.log("Local Date:", date.toString());
console.log("UTC Date:", date.toUTCString());
console.log("UTC Hours:", date.getUTCHours());
console.log("Local Hours:", date.getHours());

// ===============================================

console.log("--------------UTC METHODS------------");

// UTC Date Get Methods
// Method	Same As	Description
// getUTCDate()	getDate()	Returns the UTC date
// getUTCFullYear()	getFullYear()	Returns the UTC year
// getUTCMonth()	getMonth()	Returns the UTC month
// getUTCDay()	getDay()	Returns the UTC day
// getUTCHours()	getHours()	Returns the UTC hour
// getUTCMinutes()	getMinutes()	Returns the UTC minutes
// getUTCSeconds()	getSeconds()	Returns the UTC seconds
// getUTCMilliseconds()	getMilliseconds()	Returns the UTC milliseconds

// ==========================================================

// The getTimezoneOffset() Method
// The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time:

const d4 = new Date();
let diff = d4.getTimezoneOffset();

console.log(diff); //-330

// ===============================================================

console.log("---------------------JavaScript Set Date Methods-----");

// JavaScript Set Date Methods

// Set Date Methods
// Set Date methods are used for setting a part of a date:

// Method	Description
// setDate()	Set the day as a number (1-31)
// setFullYear()	Set the year (yyyy)
// setHours()	Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	Set the minutes (0-59)
// setMonth()	Set the month (0-11)
// setSeconds()	Set the seconds (0-59)
// setTime()	Set the time (milliseconds since January 1, 1970)

const d5 = new Date("January 01, 2025");

// 1. Set the year
d5.setFullYear(2020);
console.log("Year:", d5);

// 2. Set the month (0 = January, 11 = December)
d5.setMonth(5);
console.log("Month:", d5);

// 3. Set the date (day of the month)
d5.setDate(15);
console.log("Date:", d5);

// 4. Set the hours
d5.setHours(10);
console.log("Hours:", d5);

// 5. Set the minutes
d5.setMinutes(30);
console.log("Minutes:", d5);

// 6. Set the seconds
d5.setSeconds(45);
console.log("Seconds:", d5);

// 7. Set the milliseconds
d5.setMilliseconds(500);
console.log("Milliseconds:", d5);

// 8. Set the time (milliseconds since January 1, 1970)
d5.setTime(0);
console.log("Timestamp:", d5);
