##  Task 1: Problems Without CI/CD

###  Scenario  
A development team deploys applications manually to production without using a CI/CD pipeline.

---

### ✍️ Identified Risks & Problems

|  Issue |  Description |  Impact |
|---------|--------------|----------|
| 🧑‍💻 Human Errors | Manual deployments increase chances of mistakes like wrong commands or missing steps | ❌ Application failures, downtime |
| ⏳ Slow Deployment Process | Each deployment requires manual effort and validation | 🐢 Delayed releases and reduced productivity |
| 🔄 Inconsistent Environments | Differences between development, staging, and production setups | ⚡ Unexpected bugs in production |
| 🐞 Late Bug Detection | No automated testing before deployment | 🚨 Critical issues reach end users |
| 📉 Lack of Version Control in Deployments | Difficult to track which version is deployed | 🔍 Hard to debug or rollback changes |
| 🔥 Risky Rollbacks | No automated rollback mechanism | 💣 Increased downtime during failures |

---

### 🎯 Summary

> Manual deployments without CI/CD pipelines are **error-prone, slow, and unreliable**, leading to production issues and reduced team efficiency.

---

##  Task 2: Explore GitHub Actions in a Repository

### 📌 Steps Performed
-  Opened a public GitHub repository  
-  Navigated to the **Actions** tab  
-  Observed the available workflows and their execution  

---

### ✍️ Observations & Answers

|  Question |  Explanation |
|-----------|--------------|
| 🚀 What triggered the workflow? | The workflow was triggered by events such as **push**, **pull request**, or manual trigger (**workflow_dispatch**). Most commonly, it runs automatically when code is pushed to a branch or a PR is created. |
| 🛠️ What jobs are running? | The workflow contains multiple jobs like **build**, **test**, and sometimes **deploy**. Each job runs in a separate environment and may include steps like installing dependencies, running tests, and building the application. |
| 🎯 What is the workflow trying to achieve? | The workflow aims to **automate the development process** by ensuring code is tested, built, and validated before merging or deployment. This helps maintain code quality and reduces manual effort. |

---

### 🎯 Summary

> GitHub Actions helps automate tasks like **building, testing, and deploying code**, making the development process faster, more reliable, and error-free.


---

##  Task 3: Arrange the CI/CD Pipeline Flow

###  Given Steps
- Deploy Application  
- Write code  
- Run tests  
- Build Tests  
- Monitor Application  

---

### ✅ Correct CI/CD Pipeline Order

|  Step |  Stage |  Description |
|--------|---------|--------------|
| 1️⃣ | 💻 Write Code | Developers write and commit code to the repository |
| 2️⃣ | 🏗️ Build | Application is compiled and dependencies are installed |
| 3️⃣ | 🧪 Run Tests | Automated tests are executed to ensure code quality |
| 4️⃣ | 🚀 Deploy Application | Application is deployed to production or staging environment |
| 5️⃣ | 📊 Monitor Application | Performance and issues are tracked after deployment |

---

### 🎯 Summary

> A CI/CD pipeline ensures a smooth flow from **code development → build → testing → deployment → monitoring**, making software delivery faster and more reliable.
