/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - The keyword 'this' is returns the window Object when used in a global environment/scope.
* 2. Implicit Binding - The keyword 'this' is implicitly referring to the immediate environment. The object at the left before that dot is `this`.
* 3.  New Binding -  this refers to the  instance of the object that is created and returned by the constructor function
* 4. Explicit Binding - It is used when .call(), .apply() and .bind() are used on a function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var name = 'Ben';
(function callName() {
    console.log(this.name);
})();

// Principle 2

// code example for Implicit Binding
const newObj = {
    name: 'Benson',
    age: 22,
    speak() {
        return `I'm ${this.name} and I'm ${this.age} years of age`;
    }
}

console.log(newObj.speak());

// Principle 3

// code example for New Binding
function Stack(name, stack) {
    this.name = name;
    this.stack = stack;
    this.declareStack = function() {
        return `My name is ${this.name} and my stack is ${this.stack}`;
    }
}

const Ben = new Stack('Ben', 'JavaScript');
console.log(Ben.declareStack());

// Principle 4

// code example for Explicit Binding

function Attributes(name, attitude) {
    this.name = name;
    this.attitude = attitude;
}

function DisplayAttitude(name, attitude) {
    Attributes.call(this, name, attitude);
}

DisplayAttitude.prototype.show = function () {
    return `My name is ${this.name} and my fun fact is ${this.attitude}`;
}

const john = new DisplayAttitude('John', 'Singing');
console.log(john.show());