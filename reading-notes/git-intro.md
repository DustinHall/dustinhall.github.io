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

**Linux** - Through the *Package Manager* with Fedora: '$ sudo yum install git', or with Ubuntu: '$ sudo apt-get install git'. Another option is the [Git Website](http://git-scm.com/download/linux).

### Setup

Git comes with Graphical User Interface (GUI) tools but there are also third part options called GUI Clients. Mac, Windows and Linux systems can download GUI Clients [Here](https://git-scm.com/downloads/guis).

Configuration of Variables - **git config** allows the setting of configuration variables that control aspects of Git's operation and look. 

Identity Setting - 
