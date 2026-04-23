# 🚀 AWS RDS (MySQL) Setup in Private Subnet with EC2 Access

## 📌 Overview

This task demonstrates how to securely deploy an Amazon RDS MySQL database in a private subnet, connect to it from a public EC2 instance using MySQL CLI, create multiple databases and users, test access controls, simulate a break/fix scenario, and perform snapshot and instance modification.

---

## 🧱 Prerequisites

* AWS Account
* Custom VPC with Public & Private Subnets
* EC2 Key Pair
* Basic knowledge of MySQL

---

## 🗄️ Step 1: Create RDS MySQL Instance

* Go to AWS Console → RDS → **Create Database**
* Engine: MySQL
* Template: Free tier
* DB Identifier: `mydb-instance`
* Master Username: `admin`
* Password: set securely

### 🔹 Network Configuration

* VPC: Custom VPC
* Subnet Group: Private subnets only
* Public Access: No

### 🔹 Security Group

* Create `rds-sg`

* Inbound Rule:

  * MySQL (3306) → EC2 Security Group

* Create database and wait until status = **Available**

---

## 🖥️ Step 2: Launch EC2 in Public Subnet

* Go to EC2 → Launch Instance
* Choose Public Subnet
* Enable Public IP

### Security Group:

* SSH (22) → Your IP
* Outbound → Allow All

---

## 🔌 Step 3: Connect EC2 to RDS using MySQL CLI

### SSH into EC2:

```bash
ssh -i key.pem ubuntu@<Public-IP>
```

### Install MySQL Client

#### Ubuntu:

```bash
sudo apt update -y
sudo apt install mysql-client -y
```
---
### Connect to RDS:

```bash
mysql -h <RDS-ENDPOINT> -u admin -p
```

---

## 🗃️ Step 4: Create Databases & Users

### Create Databases:

```sql
CREATE DATABASE db_a;
CREATE DATABASE db_b;
```

### Create Users:

```sql
CREATE USER 'user_a'@'%' IDENTIFIED BY 'passwordA';
CREATE USER 'user_b'@'%' IDENTIFIED BY 'passwordB';
```

### Grant Permissions:

```sql
GRANT ALL PRIVILEGES ON db_a.* TO 'user_a'@'%';
GRANT ALL PRIVILEGES ON db_b.* TO 'user_b'@'%';

FLUSH PRIVILEGES;
```

---

## 🧪 Step 5: Test Database Access

### Access DB-A using User-A:

```bash
mysql -h <RDS-ENDPOINT> -u user_a -p db_a
```

```sql
CREATE TABLE test (id INT);
SHOW TABLES;
```

---

### Access DB-B using User-B:

```bash
mysql -h <RDS-ENDPOINT> -u user_b -p db_b
```

```sql
CREATE TABLE test2 (id INT);
SHOW TABLES;
```

---

### Cross Access Test (Expected to Fail):

```bash
mysql -h <RDS-ENDPOINT> -u user_a -p db_b
```

---

## 🔥 Step 6: Break/Fix Scenario

### Break Access:

* Go to RDS Security Group
* Remove MySQL (3306) inbound rule

### Test:

```bash
mysql -h <RDS-ENDPOINT> -u user_a -p
```

❌ Connection should fail

---

### Fix Access:

* Re-add inbound rule:

  * MySQL (3306) → EC2 Security Group

✅ Connection restored

---

## 📸 Step 7: Take Snapshot

* Go to RDS → Databases
* Select DB instance
* Click **Actions → Take snapshot**
* Name: `mydb-snapshot`

---

## 🔄 Step 8: Modify Instance Type

* Select DB instance → Click **Modify**
* Change instance type:

```
db.t3.micro → db.t3.small
```

* Apply changes immediately or during maintenance window

---

## 🧠 Key Learnings

* Secure database deployment in private subnet
* EC2-to-RDS connectivity using MySQL CLI
* Database-level user access control
* Snapshot and instance modification
* Security group-based access management

---
<img width="931" height="820" alt="01" src="https://github.com/user-attachments/assets/a58bb77b-94c7-414d-88f9-913bad91c156" />

---

<img width="1901" height="630" alt="02" src="https://github.com/user-attachments/assets/14c04e0d-341f-4362-9169-aecb789a5956" />

---

<img width="936" height="627" alt="03" src="https://github.com/user-attachments/assets/dab779fe-b1a5-401a-8ed9-24cad2669030" />

---

<img width="983" height="93" alt="04" src="https://github.com/user-attachments/assets/758a0161-6b89-4db6-9f2f-6fe617cbc1e9" />

---

<img width="1917" height="528" alt="05" src="https://github.com/user-attachments/assets/a28d8071-9e12-46ee-b763-e98f3175a4c4" />

---

<img width="1866" height="739" alt="06" src="https://github.com/user-attachments/assets/2d2a0f19-2be5-4a1d-ba09-317bc8af83a1" />

---

<img width="1916" height="568" alt="07" src="https://github.com/user-attachments/assets/04cea206-b8a5-43e1-9397-2300c5ea172a" />

---







