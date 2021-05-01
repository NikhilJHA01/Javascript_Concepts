/* 

https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1

Types of scopes 

1) Global Scope
2) Modular Scope
3) Function Scope
4) Block Scope
5) Lexical Scope


Global Scope :--

Variables defined outside any function, block, or module scope have global scope. 
Variables in global scope can be accessed from everywhere in the application.

Global variables can also be created using Window onbject
Example : window.count = 1;

Module Scope  :--

Before modules, a variable declared outside any function was a global variable. In modules, a variable declared
outside any function is hidden and not available to other modules unless it is explicitly exported.

Example: export { constant1 , constant2};


Function Scope :--
Function scope means that parameters and variables defined in a function are visible everywhere within the function,
 but are not visible outside of the function.

 Variables declared with var have only function scope. Even more, variables declared with var are hoisted to the top of their scope. 
 This way they can be accessed before being declared. Take a look at the code below:

 Example : function doSomething(){
        console.log(x);
        var x=1;
         }
         doSomething(); // undefined

         This does not happen for let. 
         A variable declared with let can be accessed only after its definition.

Example : function doSomething(){
        console.log(x);
        let x=1;
         }
         doSomething(); // Reference Error

Variables declared with let or const cannot be re-declared in the same scope:

Example : function doSomething(){
        let x-1;
        let x=2;
         }
         //Uncaught syntax error  Identifer has already been declared

         
Block scope :--

Block scope is defined with curly braces. It is separated by { and }.
Variables declared with let and const can have block scope. 
They can only be accessed in the block in which they are defined.

Example : let x=1;
         {
             let x=2;

         }
         console.log(x)//prints 1

In contrast, the var declaration has no block scope:

Example : var x=1;
         {
             var x=2;

         }
         console.log(x)//prints 2

Another common problem with not having block scope is the use of an asynchronous operation Example setTimeout() in a loop.
 The flowing loop code displays the number 5, five times.

 Example: (function run(){
     for(var i=0;i<5;i++){
         setTimeout(() => {
            console.log(i); // 5 5 5 5 5
         })
        }
        })();

The for loop statement, with the let declaration, creates a new variable locale to the block scope, for each iteration. 
The next loop code shows 0 1 2 3 4 5.

 Example: (function run(){
     for(let i=0;i<5;i++){
         setTimeout(() => {
            console.log(i); // 0 1 2 3 4
         })
        }
        })();

Lexical Scope :-- Lexical scope is the ability of the inner function to access the outer scope in which it is defined.

        (function autorun(){
            let x=1;
            function log(){
                console.log(x);
            };
            function run(fn){
                let x=100;
                fn();
            }
            run(log);//1
        })();

The log function is a closure. It refers the x variable from its parent function autorun(), not the one from the run() function.

The closure function has access to the scope in which it was created, not the scope in which it was executed.
The local function scope of autorun() is the lexical scope of the log() function.


Scope Chain :-- Every scope has a link to the parent scope. When a variable is used, 
                JavaScript looks down the scope chain until it either finds the requested variable or until it reaches the 
                global scope, which is the end of the scope chain.

 */
