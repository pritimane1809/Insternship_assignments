# 🚀 GitHub Actions: Reusable CI Workflow Implementation

## 📌 Overview

This assignment demonstrates how to create and use **reusable GitHub Actions workflows** to standardize CI (Continuous Integration) processes across multiple repositories.

Instead of duplicating workflows in every project, a **central shared workflow** is created and reused, improving consistency and maintainability.

---

# ✅ Task 1: Create Shared CI Quality Check Workflow

## 🎯 Objective

Create a centralized workflow that can be reused by multiple repositories.

## 🛠️ Implementation

* Created a repository:

  ```
  Internship_assignment
  ```

* Added workflow file:

  ```
  .github/workflows/shared-ci.yml
  ```


<img width="519" height="553" alt="d3-1" src="https://github.com/user-attachments/assets/832bc05d-620c-4d07-8030-dee6b7940899" />



* Workflow includes:

  * Code checkout
  * Basic CI check
  * Node.js setup
  * Dependency installation
  * Lint check
  * Test execution


## ✅ Outcome

* Created a reusable CI workflow
* Eliminated duplication across repositories

---

# ✅ Task 2: Call Shared Workflow from Another Repository

## 🎯 Objective

Reuse the shared workflow in a different repository.

## 🛠️ Implementation

* Created repository:

  ```
  demo-project
  ```

* Added workflow:

  ```
  .github/workflows/use-shared-ci.yml
  ```

## 🔧 Workflow Code

```yaml
name: use-shared-ci

on:
  push:

jobs:
  run-shared-ci:
    uses: pritimane1809/Internship_assignment/.github/workflows/shared-ci.yml@main
```

## 📌 Key Concept

* Used `workflow_call` to invoke shared workflow
* No duplication of CI logic

## ✅ Outcome

* Shared workflow successfully executed in another repository
* Centralized CI pipeline achieved

---

# ✅ Task 3: Modify Shared Workflow & Observe Impact

## 🎯 Objective

Verify that changes in shared workflow reflect automatically in all consuming repositories.

## 🛠️ Implementation

* Updated shared workflow:

```yaml
- name: Run Updated CI check
  run: echo "Shared workflow updated!"
```

* Triggered workflow in `demo-project`

## 🔍 Observation

* The updated message appeared in the workflow logs:

  ```
  Shared workflow updated!
  ```

## ✅ Outcome

* Demonstrated real-time propagation of changes
* Confirmed effectiveness of reusable workflows

---

# 💡 Key Learnings

* 🔁 Reusable workflows reduce duplication
* ⚙️ `workflow_call` enables cross-repository workflow usage
* 🚀 Centralized CI improves consistency
* 🔧 Changes in one place reflect everywhere






---

✨ *End of Project*

Lint check
Test execution
