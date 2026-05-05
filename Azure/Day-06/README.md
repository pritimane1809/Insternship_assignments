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




