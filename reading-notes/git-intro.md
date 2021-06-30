# Intro to Git
### Version Control 

* **Version Control System** - Version control tracks changes allowing you to see, and revert back to, previous versions as well as track the individuals who make them.
* **Local Version Control** - One database on your hard disk that stores changes to files.
* **Centralized Version Control** - A single server that stores all changes and file versions. Useful when working in teams.
* **Distributed Version Control** - Allows clients to create mirrored repositories. Gives more backup options than CVCS.

### What's Git?
A DVCS that creates a snapshot of the files, and stores a reference to it, when you commit (save) changes. Git relies on local operations, which speeds the process because a projects history is stored on the local disk, so it wont have to connect to servers. Git tracks all changes and detects file corruption minimizing lost data and makes it difficult for committed snapshots to be lost. There are three main states to Git, **committed**; data is securely stored in local database, **modified**; file is changed but not committed, and **staged**; flagged a files changed version to be committed in the next snapshot.

### Lets get started
#### Download Git

**Mac OS X** - This can be downloaded using the *Terminal*, simply try to run Git and if it is not installed it will prompt you to install. You can also download through [Git Website](http://git-scm.com/download/mac) or [GitHub](http://mac.github.com). 

**Windows** - Through the [Git Website](http://git-scm.com/download/win) or [GitHub Site](http://windows.github.com/).

**Linux** - Through the *Package Manager* with Fedora: `sudo yum install git`, or with Ubuntu: `sudo apt-get install git`. Another option is the [Git Website](http://git-scm.com/download/linux).

### Setup

Git comes with Graphical User Interface (GUI) tools but there are also third part options called GUI Clients. Mac, Windows and Linux systems can download GUI Clients [Here](https://git-scm.com/downloads/guis).

Configuration of Variables - `git config` allows the setting of configuration variables that control aspects of Git's operation and look. 

Identity Setting - **Set Username** In the Terminal or Command line type: `git config --global user.name "Jane Smith"` and then `git config --global user.email "example@email.com"`. Check the settings by entering: `git config --global user.name` (should return Jane Smith) and `git config --global user.email` (should return example@email.com). Using the --global option sets that option for the whole system, for specific projects enter the desired Git repository instead.  

Default Text Editor - Unless configured with a default text editor, Git will use the systems. If you wanted to set a different text editor, for example Emacs, you would type `git config --global core.editor emacs` into your command line.  

Checking settings - Use `git config --list` to get a list of your current settings. 

![Screen Shot 2021-06-26 at 10 53 51 AM](https://user-images.githubusercontent.com/84751034/123517003-ee6f0f80-d66c-11eb-9f71-f715f5e33b2d.png)

Getting Help - This can be done one of three ways.

![Screen Shot 2021-06-26 at 11 05 14 AM](https://user-images.githubusercontent.com/84751034/123517346-71449a00-d66e-11eb-90b4-3d0312b0f9fc.png)

### Setting up a Git Repository
#### Importing 

You can import an existing project or directory into Git by following these steps:

1. Switch to the target project's directory. 
   - `cd test (cd = change directory)`
2. Use git init.
   - `git init`
3. Start tracking these repository files by forming an initial commit.
   - `git add *.c`
   - `git add LICENSE`
   - `git commit -m "any message here"`

The files are now tracked and there is an initial commit. 

#### Cloning

The clone command `git clone https://github.com/test` is used to make a copy of an existing Git repository by adding its URL. When you clone a file you copy all versions of all files for the project. This creates a directory called test with an initialized .git directory inside it. The command will also check out a copy of the newest version of the project. To clone a repository into a directory with a name of your choosing use: `git clone https://github.com/test mydirectory`. This makes a copy of the target repository in a directory named "my directory".  

### Workflow
#### Local Repository Structure

The local Git repository has three components. The **Working Directory** is where the actual files reside, the **Index** is the area used for staging and the **Head** points to the most recent commit.

![Screen Shot 2021-06-26 at 3 48 47 PM](https://user-images.githubusercontent.com/84751034/123524118-1de64200-d696-11eb-9d02-bef312da53dd.png)

#### Saving Changes 

All files in a working copy of a project file are either in a tracked or untracked state. 

**Tracked** files can be modified, unmodified or staged; they were part of the most recent file snapshot. **Untracked** files were not in the last snapshot and are not currently in the staging area. 

After cloning a repository, files have a tracked status and are unmodified because they have been checked out but not edited. 

![Screen Shot 2021-06-26 at 3 56 52 PM](https://user-images.githubusercontent.com/84751034/123524287-32770a00-d697-11eb-8c3c-ce8f55cee553.png)

#### Checking File Status

The `git status` command will show the state of files. This will tell you which branch you are on as well as tracked, "working directory clean", or untracked.  

#### Tracking and Staging a New File 

You can track a single file with the command `git add filename` or all files with `git add *`. After using these the files are tracked and staged for committing.  

You can see information regarding changes after adding a new file by using the git status command. 

![Screen Shot 2021-06-26 at 4 11 46 PM](https://user-images.githubusercontent.com/84751034/123524573-4f144180-d699-11eb-952a-f506c7f84f34.png)

**Committing Files** should be done after staging them using `git commit -m “made change x,y,z”` it is always a good idea to leave detailed messages about your changes. If you want to commit all files you would use `git commit -a`.

#### Pushing Changes 

Pushing changes to a remote repository is done using `git push origin master`, this pushes changes from the local master branch to remote repository named origin. For cloned repositories Git gives the name origin to the server that was cloned and master to the local repository. These can be changed if desired.

#### Stashing Changes

The command `git stash` will remove and hide changes and `git stash apply` will retrieve them when ready to continue working. 

### Remote Repositories

When working in teams you will need to use remote repositories which reside online or on a network. This allows teams to push and pull information. 

#### Seeing Your Remotes

The `git remote` command allows you to see the short names of all specified remote handles. 

The `git remove -v` lets you view all remote URLs next to their short names. 

![Screen Shot 2021-06-26 at 4 56 08 PM](https://user-images.githubusercontent.com/84751034/123525539-7b32c100-d69f-11eb-8edf-c6ed761f21fa.png)




## Site Contents 
Return [**_HOME_**](https://DustinHall.github.io/reading-notes)
* [Markdown Basics](https://dustinhall.github.io/reading-notes/markdown)
* [Text Editors, IDEs and Terminals](https://dustinhall.github.io/reading-notes/text-editor)
* [Wireframe](https://dustinhall.github.io/reading-notes/wireframe-html)
* [CSS](https://dustinhall.github.io/reading-notes/css)
* [JavaScript](https://dustinhall.github.io/reading-notes/javascript)
* [Programming JS](https://dustinhall.github.io/reading-notes/programming-with-javascript) 
* [Operators and Loops](http://dustinhall.github.io/reading-notes/operators-loops)

<footer>
    <p> Page managed by Dustin Hall </p> 
</footer>
