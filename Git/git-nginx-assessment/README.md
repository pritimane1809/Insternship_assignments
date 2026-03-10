PRACTICAL 01  |  Git Installation, Configuration & First Repository

1a. 

- sudo apt update: Updates the Ubuntu package list so the system knows the latest versions of software.
- sudo apt install git -y : Installs Git on the Ubuntu system.
-y automatically confirms installation.
- git --version: Checks whether Git is installed successfully by displaying the installed version.


  <img width="782" height="717" alt="1a" src="https://github.com/user-attachments/assets/94c5ec11-1766-4356-926e-5d008c06ad86" />

1b.

- git config: Used to configure Git settings.
- --global: Applies this configuration to all repositories for the current user.
- user.name: Sets the author name for commits.
- user.email: Sets the email associated with commits.


<img width="678" height="282" alt="1b" src="https://github.com/user-attachments/assets/66fc28b6-1f86-4cd4-92ab-d3c4a6927901" />


1c.

- mkdir git-nginx-assessment: Creates a new directory for the project.
- cd git-nginx-assessment: Moves into the project directory.
- git init: Initializes a new Git repository and creates a hidden .git folder which tracks changes.

  <img width="670" height="271" alt="1c" src="https://github.com/user-attachments/assets/5df8f5ec-7cec-4a26-86de-17a765d633da" />

1d.

- echo: Prints text to the terminal
- README.md: Markdown file used to describe the project.
- app.py: Python script containing a simple print statement.

<img width="847" height="112" alt="1d" src="https://github.com/user-attachments/assets/f6ffab13-e7d1-44dd-bbeb-cedadd723562" />

1e.

- git status: Shows the current state of files in the repository.
- git add: Moves files to the staging area, preparing them for commit.
- git commit: Saves the staged files into the repository history.
- -m: Adds a commit message.

<img width="799" height="301" alt="1e" src="https://github.com/user-attachments/assets/7d644f5c-fab8-43b1-ae89-fec2b5f14824" />



1f.

git log displays the commit history including:
- Commit hash – unique identifier for each commit
- Author – person who made the commit
- Date – when the commit was made
- Commit message – description of the change


<img width="530" height="148" alt="1f" src="https://github.com/user-attachments/assets/77960916-468b-4f1d-933c-dd2e3260631c" />




PRACTICAL 02  |  Branching, Committing & Pull Request Workflow 

2a.

- git checkout → switches branches
- -b → creates a new branch
- feature/add-calculator → branch name following best practice
- feature/ prefix indicates a new feature


  <img width="702" height="129" alt="2a" src="https://github.com/user-attachments/assets/3d7ab51a-e950-4dbd-a34e-6805a577be52" />

2b.

- nano calculator.py → creates/opens a file
- We add basic calculator functions
- This file represents a new feature implementation

<img width="538" height="103" alt="2b" src="https://github.com/user-attachments/assets/5a0e2c78-ee4c-4e07-bc06-642288b14041" />


2c.

- git add moves the file to the staging area so Git knows what to include in the next commit.
- git commit → records changes in Git history
- -m → commit message

<img width="969" height="191" alt="2c" src="https://github.com/user-attachments/assets/61890e20-e782-439d-aac3-ed2137fcae2c" />


2d.


This commit documents the new feature.

2e.
2f.
2g.
