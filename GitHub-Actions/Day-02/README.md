
# 🚀 GitHub Actions Hands-on (Day 2)

This repository demonstrates the implementation of key GitHub Actions concepts including triggers, job dependencies, context variables, pull request workflows, and Docker image automation.

---

#  Task 1: Trigger Configuration

## 🎯 Objective

Configure a workflow that:

* Runs automatically on Pull Requests
* Can also be triggered manually

## ⚙️ Implementation

* Used `pull_request` trigger to run workflow on PR creation and updates
* Used `workflow_dispatch` to allow manual execution


## 🧾  Configuration

<img width="453" height="194" alt="01" src="https://github.com/user-attachments/assets/fc5f111d-388a-4e5b-ad09-c9caa7f8bad2" />



<img width="1920" height="746" alt="1 1" src="https://github.com/user-attachments/assets/64928a5e-b47c-4b29-b94b-8359d1a59361" />



<img width="1885" height="680" alt="1 2" src="https://github.com/user-attachments/assets/f6eaa43a-d3be-4561-af0e-4cfa8b82a7a8" />



---

#  Task 2: Job Dependency Design

## 🎯 Objective

Ensure:

* Build job runs first
* Test job runs only after successful build

## ⚙️ Implementation

* Created two jobs: `build` and `test`
* Used `needs: build` to define dependency



## 🧾  Configuration

<img width="590" height="368" alt="02" src="https://github.com/user-attachments/assets/0fab132b-402c-4af9-a468-a0a52e082a0c" />



<img width="1920" height="886" alt="2 1" src="https://github.com/user-attachments/assets/6ea448a0-253f-4268-aec0-b2d7dcf8dda3" />



<img width="1891" height="709" alt="2 2" src="https://github.com/user-attachments/assets/87923c0c-353c-4ce1-8169-8a76ed75bf09" />


---

#  Task 3: Using GitHub Context Variables

## 🎯 Objective

Print:

* Branch name
* Commit ID

## ⚙️ Implementation

Used GitHub context variables:

* `${{ github.ref }}`
* `${{ github.sha }}`


## 🧾  Steps

<img width="507" height="342" alt="03" src="https://github.com/user-attachments/assets/faafbbb8-a84d-499d-add5-cfaa891f7798" />



<img width="1914" height="669" alt="3 1" src="https://github.com/user-attachments/assets/5908efc2-01ab-47de-a5b9-96b086fc4899" />



<img width="1920" height="833" alt="3 2" src="https://github.com/user-attachments/assets/65fb5782-22d0-4549-b7f9-f9dee2034350" />

---

#  Task 4: Pull Request Workflow

## 🎯 Objective

* Trigger workflow on Pull Requests
* Execute Build → Test sequence

## ⚙️ Implementation

* Used `pull_request` trigger
* Created two jobs with dependency


## 🧾  Configuration

<img width="686" height="438" alt="04" src="https://github.com/user-attachments/assets/e4321a2c-639e-4c7e-bb2a-27ad76b3b65e" />



<img width="1685" height="851" alt="4 1" src="https://github.com/user-attachments/assets/7a13c82a-0578-4ff1-8600-83dbe9181316" />



<img width="1896" height="630" alt="4 2" src="https://github.com/user-attachments/assets/72f7431a-771b-4ca4-8d1b-7972e82da743" />


---

# 📌 Task 5: Docker Build & Push

## 🎯 Objective

* Build Docker image
* Tag using environment variables
* Push to container registry
* Remove local image

## ⚙️ Implementation

* Used environment variables for flexibility
* Used Docker CLI commands inside workflow
* Secured login using GitHub Secrets



## 🧾  Steps

<img width="1087" height="665" alt="05" src="https://github.com/user-attachments/assets/6cea7eae-60be-4338-acd4-9a1b7d33fa84" />



<img width="1879" height="876" alt="5 1" src="https://github.com/user-attachments/assets/c10e660a-8a67-4c32-80de-823f2235de12" />



<img width="1896" height="639" alt="5 2" src="https://github.com/user-attachments/assets/6c22654e-db35-43a5-b51b-bf2fe105f66b" />


---

# 🚀 Key Learnings

* GitHub Actions triggers (PR, manual)
* Job dependencies using `needs`
* Context variables usage
* PR-based CI pipelines
* Docker automation in CI/CD.
