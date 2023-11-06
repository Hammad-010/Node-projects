  
class Person {
    private name: string;
    private age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
 
  const person1 = new Person("Ali", 30);
  const person2 = new Person("Rao", 25);
  
  console.log(person1.getDetails());
  console.log(person2.getDetails());
  
  