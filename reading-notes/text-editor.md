Return [**_HOME_**](https://DustinHall.github.io/reading-notes)

## Text Editors
Text editors are critical software for web developers as they allow them to write text used to build websites. There are several different options to choose from including preloaded editors that come standard on your computer or third party editors which tend to have more features.

### Which Editor is Right For You?
There are several different options for text editors, and while they all get the job done there are different features across them that you want to consider when making this decision. If you prefer plain text you might just be happy with what comes loaded on your computer, be it Notepad (windows) or Text Edit (mac), these are basic editors with little to no added features. If you want features you will have to look into third party options, we will talk more about those in a minute but lets look at some popular features first.

Feature Name | Benefit
------------ | --------
Code Completion | Displays possible code suggestions as you type and can close tags and brackets in your code for you
Syntax Highlighting | Colorizes text to make it more decernable 
Different Themes | Reduce eyes strain and fatigue
Extensions | Adds more features to the text editor

### Third Party Editors

* Notepad ++ 
  - Notepad ++ is a free editor for windows only and is liked by many. Some of its features include syntax highlighting and code completion. There is also a good amount of support if learning such as an online community with a chat room for questions and even a wiki page. 
* BB Edit
  - BB Edit is mac only and has both free and paid options. The free mode has standard feautures that include syntax highlighting and code completion while the paid version allows for live previews and Grep patterns in live search. 
* Visual Studio Code
  - Made by Microsoft Visual Studio Code is a free editor compatible with windows, mac and linux. This comes with Emmet (shorthand HTML and CSS) as well as syntax highlighting, themes, extensions and code completion. 
* Atom
  - Developed by GitHub, Atom is a free editor compatible with windows, mac and linux. Like Visual Studio Code, Atom has many features including syntax highlighting, themes, extensions and code completion.   
* Brackets 
  - From Adobe, Brackets is a free editor for windows, mac and linux. While you can add extensions, Brackets only supports HTML, CSS and JavaScript. It does come with plenty of features including all those listed above, as well as live preview which will update your website automatically as you change it.  
* Sublime Text 
  - While Sublime Text does have all of the features you want in a text editor and can handle any level of coding, it is a premium software that you have to pay for. However, they do have a free version you just wont get everything with it. 

### Integrated Development Environment

IDE's are more of an all in one software package. They will allow you to write text while also being a file manager, a compiler, and a debugger. 

### Terminals 

A terminal is a text based interface to your system which can also be referrenced as command lines. You enter commands into your terminal using your keyboard and the terminal gives you feeedback in the form of text in the terminal.  

Terminals use what are called **shells** to define how the terminal will act and look after executing your commands. The most common shell is called bash (bourne again shell). You can verify which shell you are using by entering the command echo. Lets take a look at some basic commands.

Command | Action
------- | -------
pwd - print working directory | Tells you what your current or present working directory is
ls - list | Tells you what is in your current location
/etc | Tells ls not to list the current directory but rather to list the directories contents
cd - change directory | Allows you to move around in the system 

When using commands we are reffering to a path for that file or directory. A **path** is a means to get to a particular file or directory. There are two types of paths, absolute and relative. An **absolute path** (always begins with a /) specifies a location in reference to the root directory (denoted by a single / "ls /" lists root) while a **relative path** (no /) will specify the location based on where you are in the system. There are also some shortcuts when dealing with paths. The **~ (tilde)** is a shortcut for your home directory. If my home directory is /home/dustin I could use /home/dustin/documents to refer to the directory documents or ~/documents. The **.** references your current directory so instead of using ls documents to see what is in the current location you can use ./documents. You can use **..** to reference the parent directory so if I am in /home/dustin I can run ../../ to see a listing of the root directory.   

**Tab Completion** - When you start typing a path on the command line there is a shortcut called tab completion. Tab completion will complete the path if you have started typing it in and hit tab. If you get nothing hit tab again and you will see a list of all possibilities.  
