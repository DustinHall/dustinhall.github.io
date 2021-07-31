# class-05

## HTML book

**Chapter 5: “Images” (pp.94-125)**   
* Stock Images are images that you pay to use.
* It is a good idea to keep your images organized into a separate folder.
* Add using `<img src="image file" alt="describes image when you cant see it" title="some titile" />` you can also use the height and width attributes inside of the img tag though size is more commonly adjusted with CSS. 
* You should save the image at the same height and width that it will show on the page using pixels.
* JPEG should be used when you have many different colors in a picture.
* GIF or PNG should be used when there are few colors or large areas of the same color.
* Vector images are created by putting points on a grid and drawing lines between the points. In vector format you can increase the size of an image without affecting its quality. 
* Animated GIFs show several frames of an image in sequence and can be used to create simple animations.
* Transparency can be created using GIF or PNG. If 100% transparent and straight edged use GIF, for diagonal or rounded edges as well as semi-opaque and drop shadow designs use PNG.
* If you want to add a caption you can use the `<figure> and <figcaption>` tags. It would look a little like:   
`<figure>`   
`<img src="" alt="" />`   
`<br />`   
`<figcaption>` caption `</figcaption>`   
`</figure>`

**Chapter 11: “Color” (pp.246-263)**
* Colors can be selected by name (blue), rgb value (rgb(100,100,0)) and hex code(#ee3e80). 
* Foreground color allows you to specify the color of the text inside an element using `color:`
* Background color of an element is changed using `background-color`
* rgba(100,100,0,.5) allows opacity adjustments between 0 and 1. a for alpha
* hsl is hue, saturation and lightness. There is also hsla format


**Chapter 12: “Text” (pp.264-299)**
* There are two groups when it comes to controlling the appearance of text
  * Those that directly affect the font and its appearance (including typeface)
  * Those that would have the same affect on text no matter what (color and spacing)
* Typeface fonts can be serif (better for print), sans-serif (better for screens) or monospace (better for code)
* `font-family` allows you to specify the typeface that should be used. 
* `font-size` changes the size
* `@font-face` will use a font even if its not loaded on the users computer you will need to list the src inside:   
`@font-face {`   
`font-family:`   
`src:`   
`}`
* Different browsers support different formats for fonts so supply the font in several different variations. You should write the different font formats in this order; eot, woff, ttf/otf then svg (page 278).
* `font-weight:  bold;` will make the text bold. There is also a normal option used. 
* `font-style: italic;` causes text to appear italic. You can also use oblique or normal. 
* `text-transform: uppercase;` will make the text all uppercase. You can also use lowercase or capitalize for the first letter.
* `text-decoration: underline;` will underline the text. There is also none, overline, line-through and blink to animate (flash on and off)
* `line-height: 1.4em;` sets the height of an entire line of text. 
* `letter-spacing` and `word-spacing` controls the gap between letters and words.
* `text-align` can be left, right, center or justify (every line except the last takes up the whole width on the containing box)
* `verticle-align` most commonly used with inline elements can be; baseline, sub, super, top, text-top, middle, bottom or text-bottom. 
* `text-indent` indents the first line of text within an element. You can also assign a negative value to take it off of the screen. 
* `text-shadow: 1px, 1px, 0px, #000000;` is not supported in all browsers but allows you to create a drop shadow (dark version of the word offset just behind it). First value is how far to left or right the shadow should fall.  The second  value is the distance to the top or bottom. The third value is optional and specifies the amount of blur. The fourth is color of shadow.
* `first-letter` or `first-line` will allow you to specift different values for the first letter or line 
* `a:link` or `a: visited` allows you to set styles for links that have or have not been visited. 
* `:hover` applied when a user hovers over an element `:active` applied when an element is being activated `:focus` when an element has focus
* 


[JPEG vs PNG vs GIF](https://blog.imagekit.io/jpeg-vs-png-vs-gif-which-image-format-to-use-and-when-c8913ae3e01d)

### **201 Contents**
Return [**_HOME_**](https://DustinHall.github.io/reading-notes)
* [class-01](https://dustinhall.github.io/reading-notes/class-01)
* [class-02](http://dustinhall.github.io/reading-notes/class-02)
* [class-03](http://dustinhall.github.io/reading-notes/class-03)
* [class-04](http://dustinhall.github.io/reading-notes/class-04)
* [class-06](http://dustinhall.github.io/reading-notes/class-06)
* [class-07](http://dustinhall.github.io/reading-notes/class-07)