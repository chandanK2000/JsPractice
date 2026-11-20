console.log('---------keyword events example below----------');

const input=document.getElementById('username')

// 1. Keydown
input.addEventListener("keydown", function(abc) {
    console.log("Key Pressed:", abc.key);
});

// 2. Keyup
input.addEventListener("keyup", function(abc) {
    console.log("Key Released:", abc.key);
    console.log("Code:", abc.code);
});