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

<img width="864" height="192" alt="2d" src="https://github.com/user-attachments/assets/5cc5b47b-f19b-44a5-b2ed-71240329dd69" />


2e.

- git push → uploads commits to remote repository
- origin → default remote name
- feature/add-calculator → branch being pushed

  <img width="804" height="311" alt="2e" src="https://github.com/user-attachments/assets/0f1b311a-e102-4e84-bced-7cb2480948a4" />

  
2f. 

  <img width="1366" height="657" alt="2e-1" src="https://github.com/user-attachments/assets/89895749-1a8e-4d68-94df-d7b15f16bd58" />


2g.

- git checkout -b main → switch to main branch
- git pull origin main → download merged changes

<img width="998" height="492" alt="2g" src="https://github.com/user-attachments/assets/7fecef40-ac0f-41ea-94fa-5b2155a7dd9b" />



PRACTICAL 03  |  Stash, Undo & History (Revert, Reset, Amend)

3a.

- git checkout → switches branches
- -b → creates a new branch
- bugfix/stash-demo → follows Git naming practice
- git stash temporarily saves uncommitted changes so you can work on something else without committing incomplete work.
- git stash pop restores the latest stash


<img width="985" height="589" alt="3a" src="https://github.com/user-attachments/assets/6cdd9b69-6605-41b1-9e0a-bceafe5ed8e3" />

3b.

- git revert undoes a commit safely
- Instead of deleting history, it creates a new commit that reverses the changes

<img width="913" height="311" alt="Screenshot (96)" src="https://github.com/user-attachments/assets/ac6a8b89-331d-49b5-8334-b1d7ce11cfa6" />


3c.

- git commit --amend: modifies last commit; can change commit message, files in commit


  <img width="993" height="444" alt="3c" src="https://github.com/user-attachments/assets/be1ea6cc-2234-4a63-9fc5-56efc35e75a4" />

3d.

- git reset → moves HEAD pointer
- --soft → keeps changes staged
- HEAD~1 → go back one commit

<img width="973" height="610" alt="3d" src="https://github.com/user-attachments/assets/d9848aff-70ee-45c7-9924-c157074e0aa8" />



PRACTICAL 04  |  NGINX Install, Config & Hosting Multiple Static Sites


4a.

- sudo apt update : Updates the Ubuntu package repository list
- sudo apt install nginx -y: Installs the NGINX web server
- systemctl status nginx: Shows whether NGINX is running
- sudo systemctl enable nginx: This ensures NGINX automatically starts when the system boots.


<img width="1920" height="1080" alt="4a" src="https://github.com/user-attachments/assets/53e1c24f-17d8-4c0b-b8ba-db42ffe6d071" />

4b.

nginx -t:
- Tests NGINX configuration files
- Detects syntax errors
- Prevents server crash after reload


<img width="902" height="174" alt="4b" src="https://github.com/user-attachments/assets/3fcff02e-d30c-499e-9d6c-8fbe104acd0d" />


4c.

- mkdir creates directories
- -p creates parent folders automatically

  <img width="982" height="285" alt="4c" src="https://github.com/user-attachments/assets/b36b01c3-7915-4d84-881a-d593dc796f4d" />

4d.

Location of configs: /etc/nginx/sites-available/

<img width="1323" height="374" alt="4d-1" src="https://github.com/user-attachments/assets/35a3e9b3-274f-492b-bab0-911466c6d9cd" />

<img width="973" height="180" alt="4d-2" src="https://github.com/user-attachments/assets/206dbfde-3be0-41c4-9dcd-dad149cb997b" />


4e.

Why symlinks are used: This allows:
- Easy enable/disable sites
- Keeps configs organized

  <img width="1230" height="225" alt="4e" src="https://github.com/user-attachments/assets/893e44ff-3edc-49ed-be40-0aab52b4bd2b" />


4f. 

Tested the app


<img width="667" height="231" alt="4f" src="https://github.com/user-attachments/assets/68fc96cb-e9ce-4a15-8520-188a4f4aac72" />
