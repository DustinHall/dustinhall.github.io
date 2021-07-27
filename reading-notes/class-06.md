# class-06 

**From the [article](https://simpleprogrammer.com/understanding-the-problem-domain-is-the-hardest-part-of-programming)**

You can often make the problem domain easier by cutting out cases and narrowing your focus to a particular part of the problem.

## JavaScript Book

**Chapter 3: “Object Literals” (pp.100-105)**

Objects group together a set of variables and functions to create a model of something you would recognize from the real world.

In objects variables become known as properties and functions become known as methods. 

Literal Notation is the easiest and most popular way to create objects. The object is the curly brackets and thier contents. Keys and values are separated by a ':' each property and method are separated by ','.

Properties or methods of an object get accessed with dot notation or '[]'


**Chapter 5: “Document Object Model” (pp.183-242)**

DOM specifies how browsers should create a model of an HTML page and how JavaScript can access and update the contents of a web page while it is in the browser window. It is not HTML or JS but a separate set of rules created by all major browser makers. 

DOM covers two primary areas. Making a model of the HTML page and Accessing and changing the HTML page.

The 'DOM tree' is a model of a webpage and consists of four main types of nodes. The document node, element nodes, attribute nodes and text nodes. 

To access the DOM tree you must first locate the node that represents the element you want to work with and then use its text content, child elements and attributes. 

Methods that find elements in the DOM tree are called DOM queries. DOM queries may return one element or a NodeList.

To get/update element content navigate to the text nodes or work with the containing element. When you select a text node you will use the nodeValue property.

Adding elements using DOM manipulation is done by creating the element , giving it content and then adding it to the DOM. Elements can be removed via DOM manipulation by storing the element to be removed in a variable, store the parent of that element in a variabele and then removing the element from its containing element. 

## 201 Contents
Return [**_HOME_**](https://DustinHall.github.io/reading-notes)
* [class-01](https://dustinhall.github.io/reading-notes/class-01)
* [class-02](http://dustinhall.github.io/reading-notes/class-02)
* [class-03](http://dustinhall.github.io/reading-notes/class-03)
* [class-04](http://dustinhall.github.io/reading-notes/class-04)
* [class-05](http://dustinhall.github.io/reading-notes/class-05)