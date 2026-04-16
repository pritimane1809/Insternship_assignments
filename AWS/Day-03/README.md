# 🚀 Task 1 :  EC2 Instance Setup (Ubuntu) in AWS

## 📌 Overview

This project demonstrates how to:

* Launch an EC2 instance using Ubuntu OS
* Configure networking with public access
* Create and use an SSH key pair
* Configure a default security group
* Customize storage to 20GB

---

## 🛠️ Prerequisites

* AWS Account
* Basic understanding of cloud computing
* SSH client (Git Bash / Terminal / PuTTY)

---

## 🖥️ Step 1: Launch EC2 Instance

1. Login to AWS Console
2. Navigate to EC2 Dashboard
3. Click **Launch Instance**

---

## 🏷️ Step 2: Configure Instance

* **Name**: `My-Ubuntu-Server`
* **AMI (OS)**: Ubuntu Server (Latest LTS)
* **Instance Type**: `t2.micro` (Free tier eligible)

---

## 🌐 Step 3: Network Configuration

* VPC: Default
* Subnet: Default
* Auto-assign Public IP: **Enable**

---

## 🔑 Step 4: Create SSH Key Pair

1. Click **Create new key pair**
2. Provide:

   * Name: `my-keypair`
   * Type: RSA
   * Format: `.pem`
3. Download and save securely

⚠️ This key is required to connect to your instance.

---

## 🔥 Step 5: Security Group Configuration

* Select **Create security group**
* Allow:

  * SSH (Port 22)
  * Source: `0.0.0.0/0` (for learning purpose)

---

## 💾 Step 6: Configure Storage

* Root Volume Size: **20 GB**
* Volume Type: Default (gp2/gp3)

---

## 🚀 Step 7: Launch Instance

1. Review all configurations
2. Click **Launch Instance**

---

## ✅ Step 8: Verify Instance

1. Go to EC2 → Instances
2. Wait until status shows **Running**
3. Copy the **Public IP address**

---

## 🔐 Step 9: Connect to EC2 via SSH

### Set permissions:

```bash
chmod 400 my-keypair.pem
```

### Connect:

```bash
ssh -i my-keypair.pem ubuntu@your-public-ip
```

---

## 🎯 Outcome

* EC2 instance successfully launched using Ubuntu
* Public IP enabled for internet access
* Secure SSH access configured using key pair
* Default security group applied
* Root volume configured to 20GB

---

<img width="1920" height="814" alt="1 1" src="https://github.com/user-attachments/assets/4ab43e65-7276-4e29-91ca-ea391527f9da" />

---

<img width="1348" height="922" alt="1 2" src="https://github.com/user-attachments/assets/70940147-9f40-4744-ad4d-61b1d1b2bb57" />

---



