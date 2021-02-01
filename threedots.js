const ages = [12, 24, 13, 15, 17];
const ages2 = [13, 25, 12, 18, 17];
const ages3 = [15, 23, 21];
const allAges = ages.concat(ages2).concat([50,60]).concat(ages3);
// console.log(allAges);

const allAges2 = [ages, ages2, 50, 60, ages3]
// console.log(allAges2);

// threedots
const allAges3 = [...ages, ...ages2, 50, 60, ...ages3]
console.log(allAges3);

// finding max
const numbers = [24, 46, 73, 74]
const maximum = Math.max(...numbers)
console.log(maximum);
const minimum = Math.min(...numbers);
console.log(minimum);
