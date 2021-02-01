class Employee{
    constructor(eId, eName){
        this.Id = eId;
        this.Name = eName;
        this.Company = "ABC Company"
    }
}
const employee1 = new Employee(101, "Harun");
const employee2 = new Employee(102, "Hafiz");
const employee3 = new Employee(103, "Tafim");
const employee4 = new Employee(104, "Hafiz");
console.log(employee1, employee2);

console.log(employee1.Name, employee2.Name);

console.log(employee4);