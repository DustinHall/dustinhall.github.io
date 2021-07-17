# Class 02 Reading Notes 
## Duckett HTML

**Chapter 2: "Text" (pp. 40-61)** 

- Structural Markup - The elements that you can use to describe both headings and paragraphs.   
- Semantic Markup - Provides extra information including emphasis in a sentence, quotes, acronyms and more.   
- Headings - Have six levels `<h1> through <h6>` with `<h1>` being a main heading with the largets font and `<h6>` being smallest and least important.   
- Paragraphs - `<p>` Consist of one or more sentences.`    
- Bold and Italic - `<b>` will make a word appear bold while `<i>` will make it italicized.    
- Superscript & Subscript - `<sup>` can be used for characters that should be superscript and `<sub>` for those that should be subscript.    
- White Space Collapsing - A browser will only show one space even if two or more are used. Coders will use this as an advantage to make code easier to follow.   
- Line Breaks and Horizontal Rules - `<br />` is used to create breaks in line. `<hr />` will create a horizontal line where it is used.     
- Visual Editors - Often resemble word processors and do differ slightly but offer features that are common to each other. They will have a code view and a visual view.   
- Semantic Markup - Examples include emphasis (italics) `<em>` blockquote `<blockquote>` to indicate that a block of text is a quotation. Strong importance (bold) `<strong>` and `<q>` for shorter quotes within text.   
- Abbeviations & Acronyms - `<abbr title="Full Word">`abbreviated word `</abbr>` is used to abbreviate. html5 uses `<abbr>` for both abbreviations and acronyms while html4 uses `<acronym>`   
- Citations and Definitions - `<cite>` is used where a citation is from when referencing work. `<dfn>` is used to indicate the defining  instance of a new term.    
- Auther Details - `<address>` can be used for a physical address as well as email or phone numbers.   
- Changes To Content - `<ins>` is used to show content inserted into a document and is usually underlined while `<del>` shows text that has been deleted from it and will have a line through it.

**Chapter 10: ch.10 "Introducing CSS" (pp. 226-245)** 

- CSS allows you to create rules that control the way that each individual box (and their contents) gets presented.   
- Associates style rules with HTML elements. A rule contains two parts: a selector and a declaration. Selectors indicate which element the rule applies to, declarations indicate how the elements should be styled.    
- Declarations are split into two parts, properties and values which get separated by a colon. You can have several properties in one declaration separated by semi-colon.   
- External CSS gets added in the head of the page ex: `<link href="css/styles.css" type="text/css" rel="stylesheet" />`   
- Internal CSS can be added using the `<style>` tag either in the head of the page or inline in an element.   
- Selectors allow you to target rules to specific elements in an html document. There is a list of standard selectors on page 238.   
- If two selectors are identical the latter will take precedence. The most specific will take precedence as well as those marked `!important`

## Duckett JS

**Chapter 2: "Basic JavaScript Instructions" (pp. 53-84)**

- JavaScript is case sensitive.    
- A script is a series of instructions that a computer can follow. Each instruction or step is known as a statement which should end with a semi-colon.   
- Comments should be written to explain what your code does. `// This would be a single line comment in JS` while `/* This would be a multi line comment */`    
- A script will need to store bits of information in variables. To use a variable you must first declare it using a keyword followed by the variable name ` var quantity;`. Now that it is declared you can assign a value to it by using name = value `quantity = 3`.    
- Data types that JavaScript can distinguish between include numeric, string and boolean.   
- Rules for naming variables:
  - Must begin with a letter, dollar sign or underscore. Not a number.
  - The name can contain letters, numbers, dollar sign or underscore but not a dash or period. 
  - Cannot use keywords or reserved words. 
  - Are case sensitive.
  - Use a name that describes the kind of information that the variable stores.
  - If name is made up of more than one word the first is lowercase and every other word starts uppercase. 
  - Arrays are a special type of variable that stores a list of values.   
  - Values in arrays will start with 0 not 1.   
  - Expressions result in a single value. There are two broad types of expressions; those that just assign a value to a variable and those that use two or more values to return a single value.    
  - Expressions use Operators which allow programmers to create a single value from one or more values. Some example operators: assignment = arithmetic * string 'this' + 'this' comparison 3 > 5 and logical (5>3) && (2<4). Examples in more detail pages 76-84.

**Chapter 4: "Decisions and Loops" *only up to the section on switch statements* (pp. 145-162)**

- There can be several places in script where a decision will be made. Flowcharts can help plan for these. In order to know which path to take you must make conditions. For example if one value is equal to the other do this else do this. 
- There are two components in a decision - 1. An expression is evaluated, which returns a value and 2. A conditional statement that says what to do in a given situation.    
- Comparison operators to evaluate conditions listed on page 150-151   
- A condition will have one operator and two operands, one on each side of the operator, (score >= pass).   
- Logical Operators allow you to compare the result of more than one comparison operator and are listed from page 156-159.
- If statements checks a condition and if true executes a block of code.    
- If else checks a condition and if true runs one block, if false runs a separate block of code.
- Switch statements starts with a variable and each case indicates a possible value and code that should be ran if they match 

## Additional Resource 

[web article](https://chris.beams.io/posts/git-commit/)

## 201 Contents
Return [**_HOME_**](https://DustinHall.github.io/reading-notes)
* [class-01](https://dustinhall.github.io/reading-notes/class-01)
* [class-03](http://dustinhall.github.io/reading-notes/class-03)