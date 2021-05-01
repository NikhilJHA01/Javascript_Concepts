//Object literals

let circle = {
  radius: 1,
  draw: function() {
    console.log("draw");
  }
};
car.draw();

// For creating multiple onbjects we need to manually create each object so it adds increase in  code

//Factory method
function createCircle(radius) {
  return {
    radius: radius,
    draw: function() {
      console.log("draw");
    }
  };
}
const circle = createCircle(2);
circle.draw();

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log("draw");
  };
}
const another = new Circle(1);

/* here new operator is very useful :
It first creates an new object and then assigns this of the coonstructor function to the object created 
Without new operator this will refer to global this object */

// Every objetc in a js has a property called constructor and that references function that was used to construct or create the object

// The simplest way to create an object is using an object literal
const circle = {
  radius: 1,
  draw: function() {}
};

// To create multiple objects with the same structure and behaviuor (methods), use a factory or a constructor.

// Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function() {}
  };
}

// Constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {};
}

// Every object has a "constructor" property which returns the function that was used to construct or create that object.
const x = {};
x.constructor; // returns Object()

// In JavaScript, functions are objects. They have properties and methods.
Circle.name;
Circle.length;
Circle.constructor; // returns Function()
Circle.call({}, 1); // to call the Circle function
Circle.apply({}, [1]);

// Value types are copied by their value, reference types are copied by their reference.
// Value types in JavaScript are: String, Number, Boolean, Symbol, undefined and null
// Reference types are: Object, Function and Array

// JavaScript objects are dynamic. You can add/remove properties:
circle.location = {};
circle["location"] = {};

delete circle.location;

// To enumerate the members in an object:
for (let key in circle) console.log(key, circle[key]);

Object.keys(circle);

// To see if an object has a given property
if ("location" in circle)
  // Abstraction means hiding the complexity/details and showing only the essentials.
  // We can hide the details by using private members. Replace "this" with "let".

  function Circle(radius) {
    // Public member
    this.radius = radius;

    // Private member
    let defaultLocation = {};
  }

// To define a getter/setter, use Object.defineProperty():

Object.defineProperty(this, "defaultLocation", {
  get: function() {
    return defaultLocation;
  },
  set: function(value) {
    defaultLocation = value;
  }
});
