/* The JavaScript parser will automatically add a semicolon when,
 during the parsing of the source code, it finds these particular situations:

when the next line starts with code that breaks the current one (code can spawn on multiple lines)
when the next line starts with a }, closing the current block
when the end of the source code file is reached
when there is a return statement on its own line
when there is a break statement on its own line
when there is a throw statement on its own line
when there is a continue statement on its own line 

(() => {
  return
  {
    color: 'white'
  }
})()

You’d expect the return value of this immediately-invoked function to be an object that contains the color property, but it’s not. Instead, it’s undefined, because JavaScript inserts a semicolon after return.

Instead you should put the opening bracket right after return:

(() => {
  return {
    color: 'white'
  }
})()


You’d think this code shows ‘0’ in an alert:

1 + 1
-1 + 1 === 0 ? alert(0) : alert(2)
but it shows 2 instead, because JavaScript per rule 1 interprets it as:

1 + 1 -1 + 1 === 0 ? alert(0) : alert(2)

Pick some rules:

be careful with return statements. 
If you return something, add it on the same line as the return (same for break, throw, continue)
never start a line with parentheses, those might be concatenated with the previous line to form a function call, or array element reference
And ultimately, always test your code to make sure it does what you want
*/
