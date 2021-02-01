// arrow function using es6

// 1st way
function double1(num) {
    return num * 2; 
}
const double = double1(23);
console.log(double);

// 2nd way
const double2 = function double(num) {
   return num * 2;
}
const result2 = double2(19)
console.log(result2);

// 3rd way using es6

const doubleIt = num => num*2
console.log(doubleIt(3)); 

const add = (x, y) => x + y;
const addResult = add(18,20);
console.log(addResult);

const give10 = () => 10
console.log(give10());


const doformula = (x, y) => {
    const sum = x + y;
    const sub = x - y;
    const formula = sum * sub;
    return formula
}
const formula = doformula(20, 10)
console.log(formula);