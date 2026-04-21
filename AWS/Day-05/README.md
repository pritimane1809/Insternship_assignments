# 🚀 AWS Launch Template with Apache Web Server (User Data)

## 📌 Overview

This task demonstrates how to create an AWS Launch Template to automatically provision EC2 instances with an Apache web server using user data. The instance serves a custom HTML page displaying a message.

---

## 🧱 Prerequisites

* AWS Account
* Basic knowledge of EC2
* Key Pair (create or use existing)

---

## ⚙️ Step 1: Navigate to Launch Templates

* Open AWS Console
* Go to EC2 Dashboard
* Select **Launch Templates**
* Click **Create launch template**

---

## 🏷️ Step 2: Configure Template Details

* **Template Name**: `apache-template`
* **Description**: Launch template with Apache setup

---

## 🖥️ Step 3: Select AMI

* Ubuntu

---

## ⚙️ Step 4: Choose Instance Type

```
t3.micro
```

---

## 🔑 Step 5: Key Pair

* Select existing key pair
  OR
* Create a new key pair

---

## 🔐 Step 6: Configure Security Group

### Inbound Rules:

* SSH (22) → Your IP
* HTTP (80) → 0.0.0.0/0

---

## 📜 Step 7: Add User Data Script

### 🔹 For Ubuntu:

```bash
#!/bin/bash
apt update -y
apt install apache2 -y
systemctl start apache2
systemctl enable apache2

echo "<h1>Apache - Hello from Your Name!</h1>" > /var/www/html/index.html
```

---

## 💾 Step 8: Configure Storage

* Default: 8 GB (recommended)

---

## ✅ Step 9: Create Launch Template

* Click **Create launch template**

---

## 🚀 Step 10: Launch Instance from Template

* Select the created template
* Click **Launch instance from template**
* Choose:

  * Public Subnet
  * Enable Auto-assign Public IP

---

## 🌐 Step 11: Verify Deployment

Open browser:

```
http://<Public-IP>
```

### ✅ Expected Output:

```
Apache - Hello from Your Name!
```
---

## 🧠 Key Learnings

* Launch Templates simplify EC2 provisioning
* User Data automates server configuration
* Apache web server deployment on instance startup

---

<img width="698" height="207" alt="Screenshot (914)" src="https://github.com/user-attachments/assets/80209a1a-d563-41f1-91d1-3a0e26790a8d" />

---


