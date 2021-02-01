class Parent{
    constructor(){
        this.fatherName = "Hijaj" ;
    }
}
class Child extends Parent{
    constructor(name){
        super()
        this.name = name
    }
    getfullname(){
        return this.name + " " + this.fatherName
    }
}
const Baby1 = new Child("Rahul");
const Baby2 = new Child("Radif");
console.log(Baby1, Baby2);

console.log(Baby1.getfullname());
console.log(Baby2.getfullname());