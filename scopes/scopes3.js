console.log("-----scopes3,Level 3 Q 41-60 questions covered Here ----");

// 41. Create two functions that each declare a local variable with the same name.

function outer() {
  let name = "chandan";

  function inner() {
    let name = "mohan";
    console.log(name);
  }
  inner();
  console.log(name);
}

outer();
