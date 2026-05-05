# 🚀 Azure Hands-On Lab

## Manage Users, Assign RBAC Roles & Apply Azure Policies

## 📌 Overview

This lab demonstrates how to:

* Create users and groups in **Azure Active Directory (Microsoft Entra ID)**
* Assign Role-Based Access Control (RBAC) roles
* Apply Azure Policies to enforce governance and compliance

---

## 🎯 Objectives

* Manage identities using Azure AD
* Implement secure access control using RBAC
* Enforce organizational standards using Azure Policy

---

## 🧱 Lab Architecture

* Azure Users & Groups (Identity Management)
* Resource Group (Scope for access & policy)
* RBAC Roles (Authorization layer)
* Azure Policy (Governance layer)

---

## 🔹 Step 1: Create Users & Groups

### 👤 Create a User

1. Login to Azure Portal
2. Search **Microsoft Entra ID**
3. Navigate to **Users**
4. Click **+ New User → Create new user**
5. Configure:

   * User Principal Name: `<your-user>@<yourdomain>.onmicrosoft.com`
   * Name: `<Your Name>`
   * Password: Auto-generate or manual
6. Click **Create**

✅ User created successfully

---

### 👥 Create a Group

1. Go to **Microsoft Entra ID**
2. Click **Groups**
3. Click **+ New Group**
4. Configure:

   * Group Type: **Security**
   * Group Name: `<your-name>-Team`
   * Add Members: Select created user
5. Click **Create**

✅ Group created and user added

---

## 🔹 Step 2: Assign RBAC Roles

### 🔐 About RBAC

Azure RBAC provides controlled access using built-in roles:

* **Reader** – View access only
* **Contributor** – Create & manage resources
* **Owner** – Full access including role assignments

---

### ⚙️ Assign Role

1. Navigate to your Resource Group (`<your-name>-rg`)
2. Click **Access Control (IAM)**
3. Click **+ Add → Add role assignment**
4. Select Role (e.g., **Contributor**)
5. Click **Next**
6. Assign access to:

   * User / Group / Service Principal
7. Click **Select Members**
8. Choose your User or Group
9. Click **Review + Assign**

✅ Role assigned successfully

---

### 🔍 Verify Role Assignment

1. Go to **Access Control (IAM)**
2. Click **Role assignments**
3. Confirm your user/group is listed

✅ RBAC configured correctly

---

## 🔹 Step 3: Apply Azure Policy

### 📜 About Azure Policy

Azure Policy helps enforce rules such as:

* Restrict allowed regions
* Enforce resource tagging
* Restrict VM sizes
* Require HTTPS

---

### 🛠️ Create & Assign Policy

1. Search **Policy** in Azure Portal
2. Click **Assignments**
3. Click **+ Assign Policy**
4. Select Scope:

   * Resource Group (`<your-name>-rg`)
5. Click **Next**
6. Select Policy Definition:

   * Example: **Allowed locations**
7. Click **Next**
8. Configure allowed region:

   * Example: **Central India**
9. Click **Review + Create**

✅ Policy assigned successfully

---

### ✅ Verify Policy Enforcement

1. Try creating a resource in a different region
2. Deployment will be blocked

✅ Governance is working as expected

---

## 📊 Key Learnings

* Identity management using Azure AD
* Secure access control using RBAC
* Governance and compliance using Azure Policy
* Best practices for enterprise cloud security

---

## 🏁 Conclusion

This lab provides hands-on experience with **Azure Identity, Access Management, and Governance**, which are critical for real-world cloud environments.

---
<img width="1579" height="645" alt="01" src="https://github.com/user-attachments/assets/1f2de40c-ddf5-436e-82cc-a3a584af4773" />

---

<img width="1920" height="667" alt="02" src="https://github.com/user-attachments/assets/12666082-bd23-4616-b9bc-acb73bf345b7" />

---

<img width="1910" height="783" alt="03" src="https://github.com/user-attachments/assets/513715b2-3f2e-49bb-96eb-717ca2acb927" />

---

<img width="1204" height="743" alt="04" src="https://github.com/user-attachments/assets/307d4d73-40f0-4f64-a7bd-1f11d39f33f6" />

---

<img width="927" height="705" alt="05" src="https://github.com/user-attachments/assets/2336dfca-1f4f-4844-aebe-89afb3f957c3" />

---

# 🛡️ Hands-On Lab: The "Air-Gapped" Data Layer

## Deploying Azure VMs with Private PostgreSQL Database Access

---

## 📌 Overview

This hands-on lab demonstrates how to build a **secure, isolated Azure database architecture** using:

* **Azure Virtual Network (VNet)**
* **Azure Database for PostgreSQL Flexible Server**
* **Private Access (VNet Integration)**
* **Linux Jumpbox VM**
* **SSH Access**
* **Private Database Connectivity**

The goal is to implement a **Zero Trust architecture** where the database is completely inaccessible from the public internet.

---

## 🎯 Objective

By completing this lab, you will:

✅ Create a private Azure network
✅ Deploy a PostgreSQL database with **Private Access only**
✅ Deploy a Linux VM inside the same VNet
✅ Prove that public internet access is blocked
✅ Connect securely from the VM to the database

---

# 🏗️ Architecture

```id="x4f9tq"
Local Machine
     │
     │ (Fails ❌)
     ▼
Private PostgreSQL Database

Azure Virtual Network
├── Default Subnet → Linux VM (Jumpbox)
└── db-subnet → PostgreSQL Flexible Server
```

---

# 🔹 Step 1: Create the Virtual Network

## Objective

Create a secure private cloud network with separate subnets for:

* Linux VM
* PostgreSQL Database

---

## Steps

### 1. Login to Azure Portal

Open Azure Portal and sign in.

---

### 2. Create Virtual Network

Search for:

**Virtual Networks**

Click:

**Create**

---

### 3. Configure Basics

| Setting        | Value                         |
| -------------- | ----------------------------- |
| Resource Group | `<your-name>-rg`              |
| Name           | `<your-name>-vnet`            |
| Region         | Central India                 |

---

### 4. Configure Subnets

Azure creates a default subnet automatically.

Keep it for the VM.

Add a new subnet:

| Setting    | Value                                       |
| ---------- | ------------------------------------------- |
| Name       | `db-subnet`                                 |
| Delegation | `Microsoft.DBforPostgreSQL/flexibleServers` |

This reserves the subnet exclusively for PostgreSQL.

---

### 5. Create

Click:

**Review + Create → Create**

✅ Virtual Network created successfully

---

# 🔹 Step 2: Deploy Private PostgreSQL Database

## Objective

Deploy a PostgreSQL server with **no public internet access**

---

## Steps

### 1. Search

Search for:

**Azure Database for PostgreSQL**

Click:

**Create**

Select:

**Flexible Server**

---

### 2. Configure Basics

| Setting        | Value                    |
| -------------- | ------------------------ |
| Server Name    | `<your-name>-privatesql` |
| Workload Type  | Development              |
| Admin Username | `<your-username>`        |
| Password       | `<CreatePassword>`       |

---

### 3. Networking (Critical Step)

Select:

**Private Access (VNet Integration)**

Do NOT select Public Access.

---

### 4. Select Network Resources

| Setting          | Value                    |
| ---------------- | ------------------------ |
| Virtual Network  | `<your-name>-vnet`       |
| Subnet           | `db-subnet`              |
| Private DNS Zone | Create new automatically |

---

### 5. Deploy

Click:

**Review + Create → Create**

Deployment takes several minutes.

✅ Database deployed privately

---

# 🔹 Step 3: Deploy Linux Jumpbox VM

## Objective

Create a secure Linux VM inside the VNet to access the database

---

## Steps

### 1. Search

Search for:

**Virtual Machines**

Click:

**Create**

---

### 2. Configure Basics

| Setting        | Value                   |
| -------------- | ----------------------- |
| VM Name        | `<your-name>-vm`        |
| Region         | Same as VNet            |
| Image          | Ubuntu Server 22.04 LTS |
| Size           | Standard_B1s            |
| Authentication | Password                |
| Username       | `azureuser`             |
| Password       | `<CreatePassword>`      |

---

### 3. Networking

| Setting         | Value              |
| --------------- | ------------------ |
| Virtual Network | `<your-name>-vnet` |
| Subnet          | `default`          |
| Public IP       | Create new         |

Important:

Do NOT place VM in `db-subnet`

---

### 4. Deploy

Click:

**Review + Create → Create**

✅ VM deployed successfully

---

# 🔹 Step 4: Proof Test (Failing on Purpose)

## Objective

Verify the database is inaccessible from the public internet

---

## From Your Local Machine

Run:

```bash id="kz5q2m"
psql -h <server-name>.postgres.database.azure.com -U <username> -d postgres -p 5432
```

---

## Expected Result

Connection should fail:

```id="8wq1zt"
Connection timed out
```

or

```id="n2g6av"
Could not resolve host
```

---

## Why This is Good

This confirms:

✅ Database is private
✅ No public internet exposure
✅ Zero Trust enforced

---

# 🔹 Step 5: Connect to VM via SSH

## Objective

Enter the Azure private network

---

## Steps

### 1. Open VM in Azure Portal

Navigate to:

`<your-name>-vm`

---

### 2. Copy Public IP

From Overview page, copy:

**Public IP Address**

---

### 3. Connect via SSH

Run:

```bash id="s9v3pl"
ssh azureuser@<your-vm-public-ip>
```

---

### 4. Accept Host Key

Type:

```id="f6n1ye"
yes
```

Enter your password

---

## Success

Your terminal changes to:

```id="m7u4kd"
azureuser@your-vm:~$
```

You are now inside Azure private network

---

# 🔹 Step 6: Connect to Database Privately

## Objective

Connect to PostgreSQL from inside the secure perimeter

---

## Install PostgreSQL Client

Run:

```bash id="v2x8qr"
sudo apt update
sudo apt install postgresql-client -y
```

---

## Get Database Server Name

Azure Portal → PostgreSQL Server → Overview

Copy:

**Server Name**

---

## Connect Using psql

Run:

```bash id="e4r7hn"
psql -h <your-private-dns-name>.postgres.database.azure.com \
-U <your-username> \
-d postgres \
-p 5432
```

---

## Enter Password

Type your database password

---

## Expected Success

You should see:

```sql id="c5j9tm"
postgres=>
```

🎉 Connection successful

---

# ✅ Validation Checklist

* [x] VNet created
* [x] db-subnet delegated
* [x] PostgreSQL deployed privately
* [x] Local machine access blocked
* [x] Linux VM deployed
* [x] SSH connection successful
* [x] Private database connection successful

---

# 📚 Key Learnings

This lab teaches:

* Zero Trust cloud architecture
* Azure VNet segmentation
* Private database deployment
* SSH into cloud resources
* Secure internal-only connectivity
* Database isolation best practices

---

# 🏁 Conclusion

This lab demonstrates how to build an **air-gapped data layer** in Azure by isolating a PostgreSQL database inside a private subnet and allowing access only through an internal Linux jumpbox.

This mirrors real-world enterprise cloud security architecture.

---
<img width="641" height="637" alt="Screenshot (969)" src="https://github.com/user-attachments/assets/c82d05fa-9fc2-485c-801a-7228ce8e1f41" />

---

<img width="948" height="610" alt="Screenshot (970)" src="https://github.com/user-attachments/assets/b84a4a68-0a5d-4e7a-b49f-649b0778206d" />

---

<img width="941" height="624" alt="Screenshot (971)" src="https://github.com/user-attachments/assets/e5dccee5-1702-4315-99de-6162a7ab40c8" />

---

<img width="802" height="212" alt="Screenshot (972)" src="https://github.com/user-attachments/assets/d1b20ed4-3387-4a98-aa02-846000f3b81a" />

---








