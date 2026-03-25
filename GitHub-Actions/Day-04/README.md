
# 🚀 Day -03

These tasks demonstrates a basic **CI/CD pipeline using GitHub Actions** with the following features:

* 🐳 Docker Image Build & Tagging
* 🔁 Pull Request (PR) Validation
* 🔐 Security Scanning using Trivy

---

## 📌 Task 1: Docker Image Build & Tagging

### ✅ Objective

Build a Docker image and tag it using the commit SHA.

### ⚙️ Implementation

```yaml
- name: Build Docker Image
  run: |
    IMAGE_NAME=my-app
    IMAGE_TAG=${{ github.sha }}

    docker build -t $IMAGE_NAME:$IMAGE_TAG .
    echo "Image built with tag: $IMAGE_TAG"
```

### 🧾 Output

* Docker image is built successfully
* Tagged with unique commit SHA
* Output visible in GitHub Actions logs



<img width="1594" height="759" alt="d4-1 1" src="https://github.com/user-attachments/assets/b3f50fc5-671f-4cf0-a8b1-3c3589bcfa19" />



<img width="1357" height="600" alt="d4-1 2" src="https://github.com/user-attachments/assets/7fa6f77d-b906-41fc-950e-866f48d1b024" />


---

## 📌 Task 2: PR Validation Workflow

### ✅ Objective

Run checks automatically when a Pull Request is created.

### ⚙️ Workflow Configuration

```yaml
name: PR Validation

on:
  pull_request:

jobs:
  pr-check:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - run: echo "Running PR checks"
```

### 🚀 How it Works

* Triggered on every PR
* Runs validation steps
* Helps maintain code quality


<img width="1685" height="851" alt="4 1" src="https://github.com/user-attachments/assets/2d256652-449c-4ff7-98f5-54d43b5aae7f" />


<img width="1896" height="630" alt="4 2" src="https://github.com/user-attachments/assets/03ab7911-5fe4-44b6-9054-ffa855d391ef" />


---

## 📌 Task 3: Security Scan using Trivy

### ✅ Objective

Scan project for vulnerabilities and misconfigurations.

### ⚙️ Implementation

```yaml
- name: Run Trivy Security Scan
  uses: aquasecurity/trivy-action@0.20.0
  with:
    scan-type: fs
    severity: HIGH,CRITICAL
```

### 🔍 Output

* Detects HIGH & CRITICAL vulnerabilities
* Displays results in workflow logs

---


## 📝 Summary

This project showcases a complete **CI pipeline** integrating:

* Docker for containerization
* GitHub Actions for automation
* Trivy for security scanning

---

