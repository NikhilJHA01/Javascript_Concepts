/* typeof null return object;
typeof undefined return undefined;

1) So to check any undefined or null alue always strict equality check is Must;
2) Or check typeof operator to check as Above.



 Useful link
 https://stackoverflow.com/questions/15985875/effect-of-declared-and-undeclared-variables

 The mechanism for storing and accessing them is the same, but JavaScript treats them differently in some cases based on the value of the configurable attribute (described below). In regular usage, they should behave the same.

Both exist in the global object
Below are some comparisons of declared and undeclared global variables.

var declared = 1;  // Explicit global variable (new variable)
undeclared   = 1;  // Implicit global variable (property of default global object)

window.hasOwnProperty('declared')    // true
window.hasOwnProperty('undeclared')  // true

window.propertyIsEnumerable('declared')    // true
window.propertyIsEnumerable('undeclared')  // true

window.declared     // 1
window.undeclared   // 1

window.declared   = 2;
window.undeclared = 2;

declared     // 2
undeclared   // 2

delete declared     // false
delete undeclared   // true
delete undeclared   // true (same result if delete it again)

delete window.declared     // false
delete window.undeclared   // true (same result if delete it yet again)
delete window.undeclared   // true (still true)

Declared and undeclared global variables
The mechanism for storing and accessing them is the same, but JavaScript treats them differently in some cases based on the value of the configurable attribute (described below). In regular usage, they should behave the same.

Both exist in the global object
Below are some comparisons of declared and undeclared global variables.

var declared = 1;  // Explicit global variable (new variable)
undeclared   = 1;  // Implicit global variable (property of default global object)

window.hasOwnProperty('declared')    // true
window.hasOwnProperty('undeclared')  // true

window.propertyIsEnumerable('declared')    // true
window.propertyIsEnumerable('undeclared')  // true

window.declared     // 1
window.undeclared   // 1

window.declared   = 2;
window.undeclared = 2;

declared     // 2
undeclared   // 2

delete declared     // false
delete undeclared   // true
delete undeclared   // true (same result if delete it again)

delete window.declared     // false
delete window.undeclared   // true (same result if delete it yet again)
delete window.undeclared   // true (still true)
Both declared and undeclared global variables are properties of the window object (the default global object). Neither one is inherited from a different object through the prototype chain. They both exist directly in the window object (since window.hasOwnProperty returns true for both).

The configurable attribute
For declared global variables, the configurable attribute is false. For undeclared global variables, it's true. The value of the configurable attribute can be retrieved using the getOwnPropertyDescriptor method, as shown below.

var declared = 1;
undeclared = 1;

(Object.getOwnPropertyDescriptor(window, 'declared')).configurable     // false
(Object.getOwnPropertyDescriptor(window, 'undeclared')).configurable   // true
If the configurable attribute of a property is true, the attributes of the property can be changed using the defineProperty method, and the property can be deleted using the delete operator. Otherwise, the attributes cannot be changed, and the property cannot be deleted in this manner.

In non-strict mode, the delete operator returns true if the property is configurable, and returns false if it's non-configurable.

*/
