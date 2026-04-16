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

# 🚀 Task 2 : EC2, S3 & Instance Profile Setup in AWS

## 📌 Project Overview

This project demonstrates how to:

* Launch an EC2 instance with public access
* Connect to EC2 using SSH key pair
* Create an S3 bucket using AWS Console
* Attach an IAM Role (Instance Profile) to EC2
* Use AWS CLI from EC2 to upload files to S3
* Verify successful file upload

---

## 🛠️ Prerequisites

* AWS Account
* Basic knowledge of EC2, IAM, and S3
* SSH client (Git Bash / Terminal)

---

## 🖥️ Step 1: Launch EC2 Instance

1. Login to AWS Console
2. Navigate to EC2 Dashboard
3. Click **Launch Instance**

### Configuration:

* **Name**: `EC2-S3-Demo`
* **AMI**: Ubuntu Server (Latest LTS)
* **Instance Type**: `t2.micro`
* **VPC**: Default
* **Auto-assign Public IP**: Enable

---

## 🔑 Step 2: Create Key Pair

1. Click **Create new key pair**
2. Provide:

   * Name: `ec2-key`
   * Type: RSA
   * Format: `.pem`
3. Download and save securely

---

## 🔥 Step 3: Configure Security Group

* Create new security group
* Allow:

  * SSH (Port 22)
  * Source: `0.0.0.0/0` (for learning)

---

## 🚀 Step 4: Launch Instance

* Click **Launch Instance**
* Wait until status is **Running**
* Copy the **Public IP**

---

## 🔐 Step 5: Connect to EC2 via SSH

```bash id="c9l6ff"
chmod 400 ec2-key.pem
```

```bash id="zttc2q"
ssh -i ec2-key.pem ubuntu@your-public-ip
```

---

## 🪣 Step 6: Create S3 Bucket (Console)

1. Go to S3 service
2. Click **Create bucket**

### Configuration:

* Bucket name: `my-demo-bucket-16042026` (must be globally unique)
* Region: ap-south-1
* Keep default settings
* Click **Create**

---

## 🔐 Step 7: Create IAM Role (Instance Profile)

1. Go to IAM → Roles → Create role
2. Select:

   * AWS Service → EC2
3. Attach policy:

   * `AmazonS3FullAccess` *(or custom least privilege policy)*
4. Name the role: `EC2-S3-Role`
5. Create role

---

## 🔗 Step 8: Attach IAM Role to EC2

1. Go to EC2 → Instances
2. Select your instance
3. Click:

   * Actions → Security → Modify IAM Role
4. Attach: `EC2-S3-Role`

---

## 📂 Step 9: Create Sample Files

```bash id="vdwjo1"
echo "Hello AWS S3" > file.txt
```

```bash id="p8zgbw"
wget https://via.placeholder.com/150 -O image.png
```

```bash id="mnv14m"
curl -o sample.pdf https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf
```

---

## ⬆️ Step 10: Upload Files to S3

```bash id="2t6a8i"
aws s3 cp file.txt s3://my-demo-bucket-16042026/
```

```bash id="eqmb7x"
aws s3 cp image.png s3://my-demo-bucket-16042026/
```

```bash id="gdxr6c"
aws s3 cp sample.pdf s3://my-demo-bucket-16042026/
```

---

## ✅ Step 11: Verify Upload

### Using CLI:

```bash id="n7p4e4"
aws s3 ls s3://my-demo-bucket-16042026/
```

### Using AWS Console:

* Navigate to S3
* Open your bucket
* Verify uploaded files:

  * `file.txt`
  * `image.png`
  * `sample.pdf`

---

## 🎯 Outcome

<img width="1045" height="853" alt="2 1" src="https://github.com/user-attachments/assets/d12d752f-63cd-425d-9181-1889d78e6cc8" />

---

<img width="1885" height="869" alt="2 2" src="https://github.com/user-attachments/assets/9d7427a2-6b37-40f2-b0b9-f32d856c5b8d" />

---

# 🚀 Task 3 :  EC2 User Data Automation (Nginx & Docker Containers)

## 📌 Overview

This task demonstrates how to automate EC2 instance configuration using **User Data scripts**:

* Task 1: Deploy Nginx automatically on EC2
* Task 2: Install Docker and run Apache & Nginx containers automatically
* Access applications via public IP and ports

---

## 🛠️ Prerequisites

* AWS Account
* Basic knowledge of EC2 and networking
* SSH client (Terminal / Git Bash)

---

# 🧩 Task 1: EC2 with Nginx using User Data

## 🖥️ Step 1: Launch EC2 Instance

1. Login to AWS Console
2. Navigate to EC2 → Launch Instance

### Configuration:

* **Name**: `Nginx-Server`
* **AMI**: Ubuntu Server (Latest LTS)
* **Instance Type**: `t2.micro`
* **VPC**: Default
* **Auto-assign Public IP**: Enable

---

## 🔑 Step 2: Create Key Pair

* Create a new key pair (e.g., `my-key.pem`)
* Download and store securely

---

## 🔥 Step 3: Security Group

Allow:

* SSH (Port 22)
* HTTP (Port 80)

---

## ⚙️ Step 4: Add User Data Script

Paste the following script in **Advanced Details → User Data**:

```bash id="v67sfy"
#!/bin/bash
apt update -y
apt install nginx -y
systemctl start nginx
systemctl enable nginx
```

---

## 🚀 Step 5: Launch and Verify

* Launch instance
* Wait until status is **Running**

### Access Nginx:

```
http://your-ec2-public-ip
```

✔ Nginx welcome page should be visible

---

## 🎯 Task 1 Outcome

* EC2 instance created
* Nginx installed automatically
* Web server accessible via port 80

---
<img width="1203" height="395" alt="3 1" src="https://github.com/user-attachments/assets/80145e3b-3fbd-4f4a-9523-c5a2ab58789b" />

---

# 🧩 Task 2: EC2 with Docker, Apache & Nginx Containers

## 🖥️ Step 1: Launch EC2 Instance

* **Name**: `Docker-Server`
* Same configuration:

  * Ubuntu OS
  * Public IP enabled
  * Key pair attached

---

## 🔥 Step 2: Security Group

Allow:

* SSH (Port 22)
* HTTP (Port 80)
* Custom TCP (Port 8080)

---

## ⚙️ Step 3: Add User Data Script

Paste the following:

```bash id="1zcf6o"
#!/bin/bash
apt update -y
apt install docker.io -y
systemctl start docker
systemctl enable docker

# Pull Docker images
docker pull nginx
docker pull httpd

# Run Nginx container (Port 80)
docker run -d -p 80:80 --name nginx-container nginx

# Run Apache container (Port 8080)
docker run -d -p 8080:80 --name apache-container httpd
```

---

## 🚀 Step 4: Launch and Verify

* Launch instance
* Wait until running

---

## 🌐 Access Applications

### Nginx:

```
http://your-ec2-public-ip:80
```

### Apache:

```
http://your-ec2-public-ip:8080
```

---

## 🎯 Task 2 Outcome

* EC2 instance created
* Docker installed automatically
* Nginx container running on port 80
* Apache container running on port 8080

---

<img width="1729" height="535" alt="3 3" src="https://github.com/user-attachments/assets/0bc4c703-90e1-444e-b795-4a450375a7f7" />

---

<img width="1230" height="469" alt="3 2" src="https://github.com/user-attachments/assets/cfe58b7a-3e5d-47e0-91cd-7a8973d3dc54" />

---

<img width="891" height="183" alt="3 4" src="https://github.com/user-attachments/assets/efc80e8c-6636-40d3-91e4-e8a97b94f02f" />

---















