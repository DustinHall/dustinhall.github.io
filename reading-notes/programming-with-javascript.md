# Programming with JavaScript
## Control Flow
Control flow is the order in which the computer executes statements in a script. Code will typically run from top to bottom but can be changed. For example "if/else" statements can be used. 

`if (field==empty) {
    promptUser();
} else {
    submitForm();
}`

Control flow means that when you read a script, you must not only read from start to finish but also look at program structure and how it affects order of execution.

## JavaScript Functions 
Good [resource](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

A JavaScript function is a block of code designed to perform a particular task and is executed when "something" invokes, or calls, it. A function is defined with the function keyword, followed by a name, followed by parenthesis (). The code to be executed will be in curley brackets {}. 

`function myFunction(p1, p2) {
  return p1 * p2;   // The function returns the product of p1 and p2
}`

* Parameters act as local variables and are listed inside the parenthesis ()
* Arguments are the values received by the function when it is invoked.

`function name(parameter1, parameter2, parameter3) { // code to be executed }`

### Function Invocation

The code inside the function executes when invoked 

    * When an event occurs (user clicks a button)
    * When called by JavaScript code
    * Automatically (self-invoked)

### Function Return

When js reaches a return statement the function will stop. If the function was invoked from a statement, js will return to execute the code after the invoking statement. Functions compute a return value which is returned back to the caller. 

`let x = myFunction(4, 3);   // Function is called, return value will end up in x`

`function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}`

The result in x will be 12

Functions allow you to reuse code so you dont have to type it over and over. You can define the code once and use it multiple times. You can also use the same code with different arguments to produce different results.

Accessing a function without () will return the function object and not the result. 

### Functions used as variable Values

Functions can be used the same as  variables in all types of formulas, assignments and calculations. Instead of `let x = toCelsius(77); let text = "The temperature is " + x + " Celsius";` you can use the function directly. Try `let text = "The temperature is " + toCelsius(77) + " Celsius";`

### Local Variables

Variables declared within a function become local to the function. Local variables can only be accessed from within the function.

// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName

Since local variables can only be used within their function variables with the same name can be used in different functions.

## JavaScript Operators

An operator performs some operation on single, or multiple, operands (data value) and produces a result. There are Binary and Unary operators as well as one special ternary operator. 

**Binary**:Requires two operands one before and after the operator - operand1 operator operand2 - '3+4'.

**Unary**:Requires a single operand either before or after the operator - operator operand (or) operand operator - 'x++' or '++x'.

For a list of operators [js_operators](https://www.w3schools.com/js/js_operators.asp) or [another site](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

## Site Contents
Return [**_HOME_**](https://DustinHall.github.io/reading-notes) 
* [Markdown Basics](https://dustinhall.github.io/reading-notes/markdown)
* [Text Editors, IDEs and Terminals](https://dustinhall.github.io/reading-notes/text-editor)
* [Git Intro](https://dustinhall.github.io/reading-notes/git-intro)
* [Wireframe and HTML](https://dustinhall.github.io/reading-notes/wireframe-html)
* [CSS](https://dustinhall.github.io/reading-notes/css)
* [JavaScript](https://dustinhall.github.io/reading-notes/javascript)