// ---Create a cookie---

console.log("----Create a cookie---");

document.cookie = "userName=chandan";

console.log("------Read your cookies------");
console.log(document.cookie);

console.log("-----Create another cookie--------");

document.cookie = "theme=dark";
console.log(document.cookie);

console.log("----Set an expiration date----")
document.cookie =
  "city=Bengaluru; expires=Fri, 31 Dec 2027 23:59:59 GMT";


console.log(document.cookie);


document.cookie = "course=JavaScript; max-age=3600";

console.log(document.cookie)


console.log("---delete a cookies----")

document.cookie = "username=; max-age=0";
console.log(document.cookie);


document.cookie =
  "preference=dark; max-age=86400; path=/; SameSite=Lax";


console.log("----- Delete all cookies -----");

document.cookie = "userName=; path=/; max-age=0";
document.cookie = "theme=; path=/; max-age=0";
document.cookie = "city=; path=/; max-age=0";
document.cookie = "course=; path=/; max-age=0";
document.cookie = "preference=; path=/; max-age=0";

console.log("Cookies remaining:", document.cookie);


document.cookie =
    "theme=dark; path=/; max-age=3600; Secure; SameSite=Lax";

console.log(document.cookie);