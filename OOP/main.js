// class Calculator {
//     calculate(expression: string): number {
//       try {
//         return eval(expression);
//       } catch (error) {
//         console.log("Invalid expression:", error);
//         return NaN;
//       }
//     }
//   }
//   const calculator = new Calculator();
//   const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });
//   console.log("Simple Interactive Calculator");
//   console.log("Enter a mathematical expression or type 'exit' to quit.");
//   function processInput() {
//     readline.question("> ", (input) => {
//       if (input.toLowerCase() === "exit") {
//         readline.close();
//         return;
//       }
//       const result = calculator.calculate(input);
//       if (!isNaN(result)) {
//         console.log("Result:", result);
//       }
//       processInput();
//     });
//   }
//   processInput();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age);
    };
    return Person;
}());
// Example usage:
var person1 = new Person("Alice", 30);
var person2 = new Person("Bob", 25);
console.log(person1.getDetails());
console.log(person2.getDetails());
