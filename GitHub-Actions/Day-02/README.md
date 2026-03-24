
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


---

# 🚀 Key Learnings

* GitHub Actions triggers (PR, manual)
* Job dependencies using `needs`
* Context variables usage
* PR-based CI pipelines
* Docker automation in CI/CD
