// const
const friend = "Sakib";
// friend = "Rakib"; const declare করলে , কাজ করবেনা 
console.log(friend);

const numbers = [11, 23, 45];
// numbers = ["Sakib" , "Rakib"] পুরো array চেঞ্জ করা যাবেনা
numbers[0] = 32;
numbers.push(75);
console.log(numbers);

const info = {Name : "Habib", Roll: "60", Phone:"834297"};
// info = {Name : "Labib", Roll: "40", Phone:"8323497"}; কিছু চেঞ্জ করা যাবে না
console.log(info);

// let
let patient = "Joy";
patient = "Raju";
console.log(patient);

// let in for loop
let sum = 0;
for (let i = 0; i < 20; i++) {
    sum = sum + i;
    
}
console.log(sum);
// console.log(i); [if you  declare let in loop condition, it will not work]
