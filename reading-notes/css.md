## CSS 
**CSS** (Cascading Style Sheets) is used to add style to your page and make it look good. 

The browser will default to some standard highlighting, spacing, link and text options but all of it can be changed with CSS. CSS is a rule based language that specifies how documents (text files) are presented (through chrome, firefox ect...) to the user.

Example: "I want the main heading to be large red text." Simple CSS rule:

h1 {

    color: red;

    font-size: 5em;

}

The rule opens with a selector deciding which HTML element will get styled, h1 in our example. Inside of the {} are declarations which have properties and values applied to those properties - property:value. 

Not all browsers update CSS features at the same time so it is useful to know what features are implemented on which browsers.

## How to add CSS 

There are three ways of inserting a style sheet: 
* External CSS
* Internal CSS
* Inline CSS 

### External CSS

With an external style sheet you can change the look of an entire webpage with one file. Each HTML sheet must include a reference to the css style sheet in the head. `<head> <link rel="stylesheet" href="mystyle.css"> </head>`. The file extension will be .css

### Internal CSS 

An internal style sheet can be used if one single HTML page has a unique style. This uses `<style> rules </style>`.

If some properties of the same selector have been defined in different style sheets, the value from the last read style sheet will be used.

### Inline CSS

 They can be used to style single elements.`<h1 style="color:blue;text-align:center;">This is a heading</h1>`

 ## Cascading Order

 The follow will be followed with 1 being the highest priority

 1. Inline style (Inside an HTML element)
 2. External and internal style sheets (in the head section)
 3. Browser Default

 ### CSS Color and Property 

Color can be set a few different ways. `color: red;` - `color: #00ff00;`(hex value) - `color: rgb(0,0,255);` - `color: rgba(201, 76, 76, 0.60);` - `color: hsl(89, 43%, 51%);` - `color: hsla(89, 43%, 51%, 0.6);`

`color: color|initial|inherit;` will set the color property to its default value `initial` and `inherits` this property from its parent element. 

## Site Contents 
* [Markdown Basics](https://dustinhall.github.io/reading-notes/markdown)
* [Text Editors, IDEs and Terminals](https://dustinhall.github.io/reading-notes/text-editor)
* [Git Intro](https://dustinhall.github.io/reading-notes/git-intro)
* [Wireframe and HTML](https://dustinhall.github.io/reading-notes/wireframe-html)
