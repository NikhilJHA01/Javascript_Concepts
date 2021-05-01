/* https://codeburst.io/the-simple-rules-to-this-in-javascript-35d97f31bde3


The value of this is assigned during runtime , it cant be set during the assignment time.
It may be different each time the function is called.
ES5 introduced the Bind function to set the value of this regardless of how it is called .
ES6 introduced the arrow functions which dont provide their own this. this is taken from the lexical scope

// 5 Rules for this 

1) If the new keyword is used when calling the function, this inside the function is a brand new object.

function ConstructorExample() {
    console.log(this);
    this.value = 10;
    console.log(this);
}
new ConstructorExample();
// -> {}
// -> { value: 10 }

2) If apply, call, or bind are used to call/create a function, this inside the function is the object that is passed in as the argument.

function fn() {
    console.log(this);
}
var obj = {
    value: 5
};
var boundFn = fn.bind(obj);
boundFn();     // -> { value: 5 }
fn.call(obj);  // -> { value: 5 }
fn.apply(obj); // -> { value: 5 }

3) If a function is called as a method, such as obj.method() — this is the object that the function is a property of.

var obj = {
    value: 5,
    printThis: function() {
        console.log(this);
    }
};
obj.printThis(); // -> { value: 5, printThis: ƒ }

4) If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, 
this is the global object. In a browser, it is the window object. If in strict mode ('use strict'), this will be undefined instead of the global object.

function fn() {
    console.log(this);
}
// If called in browser:
fn(); // -> Window {stop: ƒ, open: ƒ, alert: ƒ, ...}

5) If multiple of the above rules apply, the rule that is higher wins and will set the this value.

6) If the function is an ES2015 arrow function, it ignores all the rules above and receives the this value of its surrounding scope at the time it is created. 
const obj = {
    value: 'abc',
    createArrowFn: function() {
        return () => console.log(this);
    }
};
const arrowFn = obj.createArrowFn();
arrowFn(); // -> { value: 'abc', createArrowFn: ƒ }


If some statement falls under two rules then rule with higher priority applies/

var obj1 = {
    value: 'hi',
    print: function() {
        console.log(this);
    },
};
var obj2 = { value: 17 };
If rules 2 and 3 both apply, rule 2 takes precedence.
obj1.print.call(obj2); // -> { value: 17 }



From w3schools

In a method, this refers to the owner object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), and apply() can refer this to any object.

*/
