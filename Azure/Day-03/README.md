# 🔐 Azure Network Security Lab (NSGs, Subnets & Routing)

## 📌 Objective

Build a **secure 3-tier architecture** in Azure using:

* Virtual Network (VNet)
* Subnets (Web, App, DB)
* Network Security Groups (NSGs)
* Route Tables

This lab demonstrates:

* Tier isolation
* Controlled access using NSGs
* Jumpbox (bastion-style) access
* Blocking outbound internet traffic from backend systems

---

## 🏗️ Architecture Overview

```
Internet
   │
   ▼
[ Web Subnet ]  →  [ App Subnet ]  →  [ DB Subnet ]
     │                  │                 │
   Public             Private           Private
   Access             Access            Access
```

* **Web Tier** → Public-facing
* **App Tier** → Internal processing
* **DB Tier** → Data storage (isolated)

---

## ⚙️ Step 1: Create Virtual Network & Subnets

1. Go to **Azure Portal → Virtual Networks → Create**

2. Configure:

   * Resource Group: `RG-<YourName>-SecurityLab`
   * VNet Name: `<YourName>-VNet`
   * Address Space: `10.0.0.0/16`

3. Create Subnets:

| Subnet Name | Address Range |
| ----------- | ------------- |
| web-subnet  | 10.0.1.0/24   |
| app-subnet  | 10.0.2.0/24   |
| db-subnet   | 10.0.3.0/24   |

---

## 🔐 Step 2: Create Network Security Groups (NSGs)

Create two NSGs:

* `NSG-Web`
* `NSG-App`

Both in resource group:
`RG-<YourName>-SecurityLab`

---

## 🚧 Step 3: Configure NSG Rules

### 🔹 NSG-Web Rules

Allow admin access:

* Port: `22 (SSH)` or `3389 (RDP)`
* Source: Any
* Action: Allow
* Priority: 100

Associate with:

* `web-subnet`

---

### 🔹 NSG-App Rules

Allow traffic **only from Web Subnet**:

* Source: `10.0.1.0/24`
* Port: `22 / 3389`
* Action: Allow
* Priority: 100

Associate with:

* `app-subnet`

---

## 💻 Step 4: Deploy Virtual Machines

### 🌐 VM-Web

* Name: `<YourName>-VM-Web`
* Subnet: `web-subnet`
* Public IP: Yes
* NSG: None (uses subnet NSG)

### ⚙️ VM-App

* Name: `<YourName>-VM-App`
* Subnet: `app-subnet`
* Public IP: Yes
* NSG: None

---

## 🧪 Step 5: Test Security (Jumpbox Concept)

### ❌ Direct Access Test

Try SSH into **VM-App** from your local system:

```
ssh azureuser@<VM-App-Public-IP>
```

👉 Result: **Fails (Blocked by NSG-App)**

---

### ✅ Web Access

SSH into **VM-Web**:

```
ssh azureuser@<VM-Web-Public-IP>
```

👉 Result: **Success**

---

### 🔁 Jumpbox Access

From VM-Web → connect to VM-App (private IP):

```
ssh azureuser@10.0.2.x
```

👉 Result: **Success**

✔ This proves:

* App VM is NOT publicly accessible
* Only Web subnet can access App subnet

---

## 🌐 Step 6: Configure Route Table (Block Internet)

### 🔍 Test Before

Inside VM-App:

```
ping google.com
```

👉 Works (default internet access)

---

### 🚫 Create Route Table

1. Create Route Table:

   * Name: `RT-AppSubnet`

2. Add Route:

   * Destination: `0.0.0.0/0`
   * Next Hop: `None` (blackhole)

3. Associate with:

   * `app-subnet`

---

### 🔒 Test After

Run again:

```
ping google.com
```

👉 Result: **Fails**

✔ Internet access is successfully blocked

---

<img width="832" height="183" alt="05" src="https://github.com/user-attachments/assets/4addff40-99fe-43a0-90bd-c60cbb6eb747" />

---

## 🧠 Key Learnings

* Subnet-based NSGs enforce **automatic security**
* Tiered architecture improves **isolation**
* Jumpbox approach ensures **controlled access**
* Route Tables override Azure default routing
* Backend systems should **never directly access the internet**

---

## ✅ Final Outcome

✔ Secure 3-tier architecture
✔ Restricted App tier access
✔ Controlled lateral movement
✔ Outbound internet blocked for backend

---

<img width="662" height="186" alt="01" src="https://github.com/user-attachments/assets/f77645d4-4fd8-48e4-a861-1ccbd0a0d3f3" />

---

<img width="879" height="894" alt="02" src="https://github.com/user-attachments/assets/7a4aaca9-8bc5-4d1c-b61c-dadae7d06af6" />

---

<img width="1920" height="1031" alt="03" src="https://github.com/user-attachments/assets/86de9184-ed94-42df-a41f-eecb00defa38" />

---

<img width="1311" height="360" alt="04" src="https://github.com/user-attachments/assets/eebf0d25-d420-42a8-803d-44318f851444" />

---







