# 🚀 Azure Hands-On Lab 1

## Create Storage Account, Upload Blobs, Configure Lifecycle & Secure Access

---

## 📌 Overview

This lab demonstrates how to work with Azure Storage by:

* Creating a Storage Account
* Uploading files to Blob Storage
* Configuring Lifecycle Management
* Securing access using best practices

---

## 🧱 Step 1: Create Storage Account

### 🎯 Objective

Deploy a storage service to store files, backups, and application data.

### 🛠️ خطوات (Steps)

1. Login to **Azure Portal**
2. Search for **Storage Accounts**
3. Click **Create → Storage Account**
4. Configure the following:

* **Resource Group:** `<your-name>-rg`
* **Storage Account Name:** `<your-name>storage01` *(must be globally unique)*
* **Region:** Central India / East US / Any
* **Performance:** Standard
* **Redundancy:** LRS *(or GRS/ZRS if required)*

5. Click **Review + Create → Create**

✅ Storage account will be successfully deployed.

---

## 📂 Step 2: Upload Blobs (Create Container & Add Files)

### 🎯 Objective

Store files inside Azure Blob Storage.

### 🛠️ Steps

1. Open your Storage Account
2. Navigate to **Data Storage → Containers**
3. Click **+ Container**
4. Configure:

* **Name:** `<your-name>-container`
* **Public Access Level:** Private *(recommended)*

5. Open the container → Click **Upload**
6. Select a file (image, document, etc.)
7. Click **Upload**

✅ File is now stored as a blob.

---

## 🔄 Step 3: Configure Lifecycle Management

### 🎯 Objective

Automatically manage and optimize storage cost.

### 🛠️ Steps

1. Go to **Lifecycle Management**
2. Click **+ Add Rule**
3. Configure:

* **Rule Name:** `<your-name>-cleanup-rule`
* **Scope:** Apply to all blobs *(or filtered)*

4. Define actions:

* Move to **Cool tier** after 30 days
* Move to **Archive tier** after 90 days
* Delete after 180 days

5. Click **Add**

✅ Lifecycle rules will run automatically.

---

## 🔐 Step 4: Secure Access (Best Practices)

### 🎯 Objective

Protect storage resources.

### 🔒 Option 1: Disable Public Access *(Recommended)*

* Go to **Configuration**
* Disable **Allow Blob Public Access**
* Save

---

### 🔑 Option 2: Shared Access Signature (SAS)

1. Go to **Security + Networking → Shared Access Signature**
2. Select required permissions
3. Generate SAS Token

✅ Provides temporary secure access.

---

### 👤 Option 3: Role-Based Access Control (RBAC)

1. Go to **Access Control (IAM)**
2. Click **Add Role Assignment**
3. Assign roles:

* Storage Blob Data Reader
* Storage Blob Data Contributor

✅ Enables secure access using identities.

---

## 🧪 Step 5: Test Storage Access

### 🛠️ Steps

1. Open uploaded blob
2. Copy **Blob URL / SAS URL**
3. Access via browser or application

✅ Access will follow configured permissions.

---

## 📚 Conclusion

In this lab, you learned how to:

* Create and configure Azure Storage Account
* Upload and manage blobs
* Automate lifecycle policies
* Secure access using best practices

---

<img width="1902" height="621" alt="01" src="https://github.com/user-attachments/assets/0e1f2e48-4dbe-457d-8522-b99c71e94efe" />

---

<img width="1866" height="478" alt="02" src="https://github.com/user-attachments/assets/76079a5e-59be-4065-a918-27393f751a4f" />

---

<img width="933" height="803" alt="03" src="https://github.com/user-attachments/assets/7d55cc68-921a-4b0e-a2b6-96b2160c368d" />

---

<img width="952" height="752" alt="04" src="https://github.com/user-attachments/assets/c5e10cac-34f7-46fe-8719-f3076d172e71" />

---

<img width="956" height="767" alt="05" src="https://github.com/user-attachments/assets/58775991-2b6d-4955-99b9-26406376cd44" />

---

<img width="964" height="628" alt="06" src="https://github.com/user-attachments/assets/8b096b7d-4001-42e5-a44b-72232e84d2d6" />

---

<img width="944" height="668" alt="07" src="https://github.com/user-attachments/assets/4a5f08a8-36b0-4bcd-a07b-6c2faa82701d" />

---

<img width="992" height="194" alt="08" src="https://github.com/user-attachments/assets/f7f33968-e64b-4abd-8306-e8c44d6be5cb" />

---







