# 🚀 AWS VPC Setup with Public & Private Subnets, NAT Gateway & EC2

## 📌 Task Overview

This project demonstrates how to design and implement a custom Virtual Private Cloud (VPC) in AWS with both public and private subnets. It includes internet access via an Internet Gateway (IGW) and secure outbound access for private subnets using a NAT Gateway. Additionally, EC2 instances are launched and configured with an Nginx web server.

---

## 🧱 Architecture Components

* 1 VPC
* 1 Internet Gateway (IGW)
* 1 NAT Gateway (with Elastic IP)
* 3 Public Subnets
* 3 Private Subnets
* 2 Route Tables (Public & Private)
* Security Groups & NACLs
* 2 EC2 Instances (Public & Private)

---

## 🌐 Step 1: Create VPC

* CIDR Block: `10.0.0.0/16`
* Name: `custom-vpc`

---

## 🌍 Step 2: Create and Attach Internet Gateway

* Create Internet Gateway
* Attach it to the VPC

---

## 🏗️ Step 3: Create Subnets

### 🔹 Public Subnets

* `10.0.1.0/24`
* `10.0.2.0/24`
* `10.0.3.0/24`
* Enable **Auto-assign Public IP**

### 🔹 Private Subnets

* `10.0.4.0/24`
* `10.0.5.0/24`
* `10.0.6.0/24`

---

## 📡 Step 4: Create NAT Gateway

* Create NAT Gateway in one Public Subnet
* Allocate and attach an Elastic IP

---

## 🛣️ Step 5: Configure Route Tables

### 🔹 Public Route Table

* Route:

  ```
  0.0.0.0/0 → Internet Gateway
  ```
* Associate with all Public Subnets

### 🔹 Private Route Table

* Route:

  ```
  0.0.0.0/0 → NAT Gateway
  ```
* Associate with all Private Subnets

---

## 🔐 Step 6: Security Groups

### Public EC2 Security Group

* Inbound Rules:

  * HTTP (80) → 0.0.0.0/0
  * SSH (22) → Your IP

### Private EC2 Security Group

* Inbound Rules:

  * HTTP (80) → 10.0.0.0/16
  * SSH (22) → Public EC2 Security Group

---

## 🚧 Step 7: Configure NACL

* Inbound:

  * Allow HTTP (80) from `0.0.0.0/0`
  * Allow SSH (22) from `0.0.0.0/0`
* Outbound:

  * Allow All Traffic

---

## 💻 Step 8: Launch EC2 Instances

### 🔹 Public EC2 Instance

* Launch in Public Subnet
* Enable Public IP

#### Install Nginx:

```
sudo apt update -y        # Ubuntu
sudo apt install nginx -y
```

#### Start Nginx:

```
sudo systemctl start nginx
sudo systemctl enable nginx
```

#### Access:

```
http://<Public-IP>
```
---

<img width="1010" height="403" alt="Screenshot (912)" src="https://github.com/user-attachments/assets/3cbc1aaa-591b-42a3-adfc-172736f0917b" />

---
---

### 🔹 Private EC2 Instance

* Launch in Private Subnet
* No Public IP

#### SSH from Public EC2:

```
ssh -i key.pem ec2-user@<Private-IP>
```

#### Install Nginx:

```
sudo yum update -y
sudo yum install nginx -y
sudo systemctl start nginx
```

---

## 🔍 Step 9: Test Private EC2

From Public EC2:

```
curl -I http://<Private-EC2-IP>:80
```

#### Expected Output:

```
HTTP/1.1 200 OK
```
---

## 🧠 Key Learnings

* Understanding of VPC networking architecture
* Difference between public and private subnets
* Secure internet access using NAT Gateway
* EC2 deployment and web server configuration

---
