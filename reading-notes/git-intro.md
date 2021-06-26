Return [**_HOME_**](https://DustinHall.github.io/reading-notes)

# Intro to Git

### Version Control 

* **Version Control System** - Version control tracks changes allowing you to see, and revert back to, previos versions as well as track the individuals who make them.
* **Local Version Control** - One database on your hard disk that stores changes to files.
* **Centralized Version Control** - A single server that stores all changes and file versions. Useful when working in teams.
* **Distributed Version Control** - Allows clients to create mirrored repositories. Gives more backup options than CVCS.

### What's Git?
A DVCS that creates a snapshot of the files, and stores a reference to it, when you commit (save) changes. Git relies on local operations, which speeds the process because a projects history is stored on the local disk, so it wont have to connect to servers. Git tracks all changes and detects file corruption minimizing lost data and makes it difficult for committed snapshots to be lost. There are three main states to Git, committed; data is securely stored in local database, modified; file is changed but not committed, and staged; flagged a files changed version to be committed in the next snapshot.

### Lets get started
#### Download Git

**Mac OS X** - This can be downloaded using the *Terminal*, simply try to run Git and if it is not installed it will prompt you to install. You can also download through [Git Website](http://git-scm.com/download/mac) or [GitHub](http://mac.github.com). 

**Windows** - Through the [Git Website](http://git-scm.com/download/win) or [GitHub Site](http://windows.github.com/).

**Linux** - Through the *Package Manager* with Fedora: `$ sudo yum install git`, or with Ubuntu: `$ sudo apt-get install git`. Another option is the [Git Website](http://git-scm.com/download/linux).

### Setup

Git comes with Graphical User Interface (GUI) tools but there are also third part options called GUI Clients. Mac, Windows and Linux systems can download GUI Clients [Here](https://git-scm.com/downloads/guis).

Configuration of Variables - **git config** allows the setting of configuration variables that control aspects of Git's operation and look. 

Identity Setting - **Set Username** In the Terminal or Command line type: `git config --global user.name "Jane Smith"` and then `git config --global user.email "example@email.com"`. Check the settings by entering: `git config --global user.name` (should return Jane Smith) and `git config --global user.email` (should return example@email.com). Using the --global option sets that option for the whole system, for specific projects enter the desired Git repository instead.  

Default Text Editor - Unless configured with a default text editor, Git will use the systems. If you wanted to set a different text editor, for example Emacs, you would type `$ git config --global core.editor emacs` into your command line.  

Checking settings - Use `git config --list` to get a list of your current settings. 

![Screen Shot 2021-06-26 at 10 53 51 AM](https://user-images.githubusercontent.com/84751034/123517003-ee6f0f80-d66c-11eb-9f71-f715f5e33b2d.png)

Getting Help - This can be done one of three ways.

![Screen Shot 2021-06-26 at 11 05 14 AM](https://user-images.githubusercontent.com/84751034/123517346-71449a00-d66e-11eb-90b4-3d0312b0f9fc.png)

### Setting up a Git Repository
#### Importing 

You can import an existing project or directory into Git by following these steps:

1. Switch to the target project's directory. 
   - `$ cd test (cd = change directory)`
2. Use git init.
   - `$ git init`
3. Start tracking these repository files by forming an initial commit.
   - `$ git add *.c`
   - `$ git add LICENSE`
   - `$ git commit -m "any message here"`
The files are now tracked and there is an initial commit. 


