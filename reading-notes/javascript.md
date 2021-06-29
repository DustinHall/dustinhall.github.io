## JavaScript

JavaScript (JS) is a server-side case sensitive programming language mostly known for scripting web pages though it can also be used in non-browser applications. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.

The standards for JavaScript are the ECMA Script Language Specification (ECMA-262) and ECMA Script Internationalization API Specification (ECMA-402). Java and JavaScript are different. 

Use the **`<script>`** element inside of your HTML file to include JavaScript

External Loading - scripts with an **async** attribute will execute as soon the download is done. This blocks the page and does not guarantee any specific execution order. While scripts with a **defer** attribute will load in the order they are in and will only execute once everything has finished loading. If your scripts should be run immediately and they don't have any dependencies, then use async. If your scripts need to wait for parsing and depend on other scripts and/or the DOM being in place, load them using defer and put their corresponding `<script>` elements in the order you want the browser to execute them.

`<script async src="js/vendor/jquery.js"></script>`\
`<script defer src="js/vendor/jquery.js"></script>`


**Application Programming Interfaces (API)** provide you with extras to use in JavaScript code. They're ready made sets of code that allow a developer to implement otherwise impossible code to implement. 

**Browser APIs** are built into you web browser and are able to expose data from the surrounding computer environment, or do useful complex things. For example:

    * The DOM (Document Object Model) API allows you to manipulate HTML and CSS creating, removing and changing HTML, dynamically applying new styles to your page. Pop-Up windows are examples of the DOM in action.
    * Geolocation API retrieves geographical location.
    * The Canvas and WebGL APIs allow the creation of 2D and 3D graphics.
    * Audio/Vido APIs include HTMLMediaElement and WebRTC allow you to play audio and video. 



## Site Contents
Return [**_HOME_**](https://DustinHall.github.io/reading-notes) 
* [Markdown Basics](https://dustinhall.github.io/reading-notes/markdown)
* [Text Editors, IDEs and Terminals](https://dustinhall.github.io/reading-notes/text-editor)
* [Git Intro](https://dustinhall.github.io/reading-notes/git-intro)
* [Wireframe and HTML](https://dustinhall.github.io/reading-notes/wireframe-html)
* [CSS](https://dustinhall.github.io/reading-notes/css)