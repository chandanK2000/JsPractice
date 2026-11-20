console.log("--dom Practice Level 1 example --");

// 1. Select an element using getElementById().

const Headings = document.getElementById("heading1");

console.log(Headings);
console.log(Headings.innerHTML);
console.log(Headings.innerText);
console.log(Headings.textContent);

// 2. Select an element using getElementsByClassName().

const Headings1 = document.getElementsByClassName("headings1");

console.log(Headings1);
console.log(Headings1[0].innerHTML);

// 3. Select all paragraph elements using getElementsByTagName().

const paragraph1 = document.getElementsByTagName("p");

console.log(paragraph1);
console.log(paragraph1[0].innerHTML);
console.log(paragraph1[1].innerHTML);
console.log(paragraph1[2].innerHTML);

console.log("----------------");
for (let i = 0; i < paragraph1.length; i++) {
  // console.log(paragraph1[i].innerHTML);
  console.log(paragraph1[i].innerText);
}

// 4. Select an element using querySelector().

// const para=document.querySelector('p')
const para = document.querySelector("div p");
// const para=document.querySelectorAll('div p')

console.log(para);

console.log("----all Paragraph list---");
// 5. Select all elements using querySelectorAll().
const allpara = document.querySelectorAll("div p");

console.log(allpara);

for (let i = 0; i < allpara.length; i++) {
  console.log(allpara[i].innerHTML);
}

console.log("-------------------");
// 6. Select an element using its ID with querySelector().

const para1 = document.querySelector("#para1");

console.log(para1.innerHTML);

console.log("-----------------");
// 7. Select an element using its class with querySelector().

const para2 = document.querySelector(".para2");

console.log(para2.innerHTML);

// 8. Select all elements having the same class using querySelectorAll().

const commonpara = document.querySelectorAll(".common");

console.log(commonpara);

for (let i = 0; i < commonpara.length; i++) {
  // console.log(commonpara[i].innerText);
  // console.log(commonpara[i].style.color='white');
  // console.log(commonpara[i].style.background='blue');

  console.log(
    (commonpara[i].style.cssText = `
        color:orage;
        background:green;
        padding:10px 12px;
        border-radius:10px;
        `),
  );
}

// 9. Select the first <h1> element.

const firstHeading = document.querySelector("h1");

console.log(firstHeading);

console.log("---list all Heading -2 ----");

// 10. Select all <h2> elements.

const allHeadings2 = document.querySelectorAll("h2");

console.log(allHeadings2);

allHeadings2.forEach((itess) => {
  //   console.log(itess.innerHTML);
  itess.style.color = "red";
});


// 11. Select all buttons from a webpage.

const allbuttons=document.querySelectorAll('#buttons button')

// console.log(allbuttons[0].innerText);
console.log(allbuttons);

for(let i=0;i<allbuttons.length;i++){
    // console.log(allbuttons[i].innerText)
    allbuttons[i].style.color='orange';

}

