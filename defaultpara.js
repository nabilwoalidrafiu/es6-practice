// default parameter
function add1(num1, num2) {
    
    return num1 + num2;
}
const total1 = add1(20, 30);
console.log(total1);

function add2(num1, num2 = 50 ) {
    // 1st method
    // if (num2 == undefined) {
    //     num2 = 50
    // }
    // 2nd method
    // num2 = num2 || 50;
    return num1 + num2;
}
const total2 = add2(20);
console.log(total2);

const total3 = add2(30, 30);
console.log(total3);


