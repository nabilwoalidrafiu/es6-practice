const student ={Name: 'Sajol Sheikh', fatherName: 'Nayem Sheikh', age : 12, school: 'AB School', class: 7, friend: ["Rahul","Arman", "Bablu"] }


const age = student.age;
const Class = student.class;
console.log(age, Class);

// using destructure
const {Name, fatherName, teacher, school}= student;
console.log(Name, fatherName, teacher, school);

const friendsArray = ['Sakib','Rakib', 'Jahin', 'Jahir' ];
// const [firstFriend, secondfriend] = friendsArray;
// console.log(firstFriend, secondfriend);

const [firstFriend, secondfriend, ...others] = friendsArray;
console.log(others);

const complexObject = {
    name: 'Hasib',
    info: {
        Phone: '0192839328',
        Adress: 'Bandarban'
    }
}
const {Adress} = complexObject.info
console.log(Adress);