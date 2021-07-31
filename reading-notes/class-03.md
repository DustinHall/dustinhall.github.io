# Class 03 Reading Notes

## HTML Book

**Chapter 3: "Lists" (pp. 62-73)**    
There are three different list options in HTML -    
* Ordered Lists - Each item in the list is numbered.   
* Unordered Lists - Begin with a bullet point.   
* Definition Lists - Made up with a set of terms along with their definitions.

The ordered lists `<ol>` and unordered lists `<ul>` will us list items `<li>` while definition lists will have the definition term `<dt>` and the definition itself `<dd>`. You can also create nested lists inside of lists just by simply using another `<ul>` tag. 

**Chapter 13: "Boxes" (pp. 300-329)**   
Box Dimensions - Height and Width properties allow you to modify the size of your websites boxes, most popularly in pixels, percentages or ems. Min-width specifies the smallest size a box can be displayed at when the browser window is narrow and max-width indicates the max a box can stretch to when the browser window is wide. Min-height and max-height do the same for height. 

Overflowing Content - the overflow property tells the browser what to do with content that is larger than the box. Values of the overflow property are hidden and scroll. Hidden will simply hide extra content while scroll adds a scrollbar to the box. 

Border, Margin and Padding - Every box has a border that separates the edge of one box from another. Margins sit outside the edge of the border and setting the width will create a gap between the borders of the adjacent boxes. Padding is the space between the border of a box and the content within it. Border-width can be in pixels or thin, medium, thick. You can further customize the border using border-top-width, border-right-width ect... if you want to set them all on one line `border-width: 2px 1px 1px 2px;` would start with top border and work to the right, bottom then left. You can also use border-style and border color which can be individually adjusted like width. Shorthand border looks like `border: 3px dotted #0088dd;`

Centering a box is done by setting the left and right margins to auto. If centering a box on a page (not in an individual element) you will need to set a width for the box to prevent it from taking up the full width of the page. 

Displaying items inline `display: inline;` causes a block element to act like a inline element and display: block; will make an inline element act like a block element. Inline-block causes a block level element to flow like an inline element, while retaining other features of a block-level element. display: none; hides an element. 

Visibility - can be hidden or visible. hidden will leave a blank space, if you dont want a blank space use none. 

Border Images - border-image takes a background image and slices it into 9 pieces. This will require three pieces of information 1) The image URL 2) Where to slice the image 3) Whether to stretch, repeat or round the straight edges. 

## JavaScript Book

**Review from Reading 02 - Chapter 2:"Basic JavaScript Instructions" (pp. 70-73)**

Arrays - A special type of variable that stores a list of values. You should consider using and array when working with a list of set of related values. Values in an array are accessed as a numbered list whichs starts at 0, not 1. 

`var itemThree;`   
`itemThree = colors[2];`   
This sets itemThree to the third color on the colors array.

**Chapter 4:"Decisions and Loops" from switch on (pp. 162-182)**

Switch statements start with a variable called the switch value. 

Type Coercion - JavaScript can convert data types behind the scenes. It can cause unexpected values so when checking if two things are equal its best to use strict equals === 

Truthy Falsy - Truthy values are treated as if they are true and can also be treated as the number 1. Falsy statements are treated as if they are false and can also be treated as the number 0. 

Loops - Check a condition, if the condition returns true code will run then get checked again. It will run as along as it comes back true. For loop used when need to run code a specific number of times. While is used if you do not know how many times the code needs to run and do while will always run the statements inside the curly brackets at least once even if the condition is false. 




### **201 Contents**
Return [**_HOME_**](https://DustinHall.github.io/reading-notes)
* [class-01](https://dustinhall.github.io/reading-notes/class-01)
* [class-02](http://dustinhall.github.io/reading-notes/class-02)
* [class-04](http://dustinhall.github.io/reading-notes/class-04)
* [class-05](http://dustinhall.github.io/reading-notes/class-05)
* [class-06](http://dustinhall.github.io/reading-notes/class-06)
* [class-07](http://dustinhall.github.io/reading-notes/class-07)