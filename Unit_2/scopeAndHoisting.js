let x = 12;

function scope() {
    let x = 33;
    // console.log(x);
}

scope();
// console.log(x);

let y = 12;

function scope2() {
    y = 33;
    console.log(y);
}

scope2();
console.log(y);