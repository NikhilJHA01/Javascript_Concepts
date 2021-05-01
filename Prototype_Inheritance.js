/* Prototype Chain and  Prototype Inheritance
When it comes to inheritance, JavaScript only has one construct: objects. 
Each object has a private property which holds a link to another object called its prototype. 
That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition,
 null has no prototype, and acts as the final link in this prototype chain.
 */
// Here is what happens when trying to access a property:
// Let's create an object o from function f with its own properties a and b:
let f = function() {
  this.a = 1;
  this.b = 2;
};
let o = new f(); // {a: 1, b: 2}

// add properties in f function's prototype
f.prototype.b = 3;
f.prototype.c = 4;

// do not set the prototype f.prototype = {b:3,c:4}; this will break the prototype chain
// o.[[Prototype]] has properties b and c.
// o.[[Prototype]].[[Prototype]] is Object.prototype.
// Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
// This is the end of the prototype chain, as null,
// by definition, has no [[Prototype]].
// Thus, the full prototype chain looks like:
// {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null

console.log(o.a); // 1
// Is there an 'a' own property on o? Yes, and its value is 1.

console.log(o.b); // 2
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called Property Shadowing

console.log(o.c); // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

console.log(o.d); // undefined
// Is there a 'd' own property on o? No, check its prototype.
// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is Object.prototype and there is no 'd' property by default, check its prototype.
// o.[[Prototype]].[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined.

// Using Object.create
var a = { a: 1 };

var b = Object.create(a);

console.log(a.a); // print 1
console.log(b.a); // print 1
b.a = 5;
console.log(a.a); // print 1
console.log(b.a); // print 5
delete b.a;
console.log(a.a); // print 1
console.log(b.a); // print 1(b.a value 5 is deleted but it showing value from its prototype chain)
delete a.a;
console.log(a.a); // print undefined
console.log(b.a); // print undefined

// The new operator has a shorter chain in this example:
function Graph() {
  this.vertices = [4, 4];
}

var g = new Graph();
console.log(g.vertices); // print [4,4]
g.vertices = 25;
console.log(g.vertices); // print 25
delete g.vertices;
console.log(g.vertices); // print undefined
