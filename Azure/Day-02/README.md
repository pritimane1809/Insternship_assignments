# 🌐 Step 1:  Azure VNet Peering Lab (Step-by-Step)

## 📌 Objective

Create two Azure Virtual Networks (VNets) and configure **VNet Peering** so they can communicate with each other privately, as if they are part of the same network.

---

## 🏗️ Architecture Overview

* **VNet-Dev**

  * Address Space: `10.0.0.0/16`
  * Subnet: `10.0.1.0/24`

* **VNet-Test**

  * Address Space: `10.1.0.0/16`
  * Subnet: `10.1.1.0/24`

* **Peering**

  * Dev ↔ Test (bidirectional communication)

---

## 🚀 Step-by-Step Implementation

### 🔹 Step 1: Create VNet-Dev

1. Go to Azure Portal → **Virtual Networks**
2. Click **+ Create**
3. Fill details:

   * Name: `Priti-VNet-Dev`
   * Address Space: `10.0.0.0/16`
4. Add Subnet:

   * Name: `Dev-Subnet`
   * Address Range: `10.0.1.0/24`
5. Click **Review + Create → Create**

---

### 🔹 Step 2: Create VNet-Test

1. Go to **Virtual Networks**
2. Click **+ Create**
3. Fill details:

   * Name: `Priti-VNet-Test`
   * Address Space: `10.1.0.0/16`
4. Add Subnet:

   * Name: `Test-Subnet`
   * Address Range: `10.1.1.0/24`
5. Click **Review + Create → Create**

---

### 🔹 Step 3: Configure VNet Peering

1. Open `Priti-VNet-Dev`
2. Go to **Peerings**
3. Click **+ Add**

#### Configure:

* Peering Name (Dev → Test): `Dev-to-Test`
* Remote VNet: `Priti-VNet-Test`
* Reverse Peering Name: `Test-to-Dev`

#### Enable:

* ✔ Allow virtual network access
* ✔ Allow forwarded traffic (optional)

4. Click **Add**

---

## ✅ Validation

1. Go to **Peerings** in either VNet
2. Check status:

   * `Connected` ✅

---

## 🧠 Key Concepts

### 🔸 Why Peering is Required?

VNet Peering allows secure, private communication between VNets without using the public internet.

---


### 🔸 Why IP Ranges Must Not Overlap?

Overlapping IP ranges cause routing conflicts because Azure cannot determine the correct destination network.

---

## 🏁 Conclusion

This lab demonstrates how to build a **secure and scalable network architecture in Azure** using VNet Peering, which is a fundamental concept for cloud networking and real-world deployments.

---

<img width="1920" height="788" alt="T1" src="https://github.com/user-attachments/assets/13a3d66d-158e-4cf7-9949-52598ef424f1" />

---

# 🌐 Step 2 : Azure VM-to-VM Connectivity Test (VNet Peering Validation)

## 📌 Objective

Deploy two Virtual Machines (VMs) in different Virtual Networks and verify that **VNet Peering** allows secure communication using **private IP addresses** over Azure’s internal backbone network.

---

## 🏗️ Architecture Overview

* **VNet-Dev**

  * VM: `VM-Dev`
  * Private IP: `10.0.1.x`

* **VNet-Test**

  * VM: `VM-Test`
  * Private IP: `10.1.1.x`

* **Connectivity**

  * Communication via **Private IP (No Public Internet)**

---

## 🚀 Step-by-Step Implementation

### 🔹 Step 1: Create VM-Dev (in VNet-Dev)

1. Go to Azure Portal → **Virtual Machines**
2. Click **+ Create → Azure Virtual Machine**
3. Fill details:

   * Name: `VM-Dev`
   * Resource Group: `RG-Networking`
   * Image: Ubuntu Server 22.04
   * Region: Same as VNet
4. Networking:

   * Virtual Network: `Priti-VNet-Dev`
   * Subnet: `Dev-Subnet`
   * Public IP: Enabled
5. Click **Review + Create → Create**

---

### 🔹 Step 2: Create VM-Test (in VNet-Test)

1. Go to **Virtual Machines**
2. Click **+ Create**
3. Fill details:

   * Name: `VM-Test`
   * Resource Group: `RG-Networking`
   * Image: Ubuntu Server
4. Networking:

   * Virtual Network: `Priti-VNet-Test`
   * Subnet: `Test-Subnet`
   * Public IP: Enabled
5. Click **Review + Create → Create**

---

## 🔗 Step 3: Test Connectivity

1. Connect to `VM-Dev`
2. Run:

```bash
ping 10.1.1.4
```

*(Replace with actual private IP of VM-Test)*

---

## ✅ Validation

* ✔ Ping is successful
* ✔ Responses received from private IP
* ✔ Communication happens internally

---

## 🧠 Key Concepts

### 🔸 Why Use Private IP?

To ensure traffic:

* Stays within Azure network
* Is secure and not exposed to the internet

---

### 🔸 Is Public Internet Used?

❌ No

Traffic flows through Azure’s private backbone network.

---

### 🔸 What If Ping Fails?

Check:

* Network Security Group (NSG) rules
* OS firewall settings
* Correct private IP
* VNet Peering status = **Connected**
* 
---

## 🎯 Outcome

* Successfully deployed VMs in different VNets
* Verified VNet Peering connectivity
* Confirmed secure communication using private IP

---

## 🏁 Conclusion

This lab proves that **Azure VNet Peering enables private, secure, and high-speed communication** between virtual networks without using the public internet.

---

<img width="650" height="127" alt="T2 1" src="https://github.com/user-attachments/assets/c1f39b95-7f65-4de6-ac16-3a5778f12113" />

---

<img width="578" height="295" alt="T2 2" src="https://github.com/user-attachments/assets/dd91acad-3fcf-403b-9d17-bdffc0391d5c" />

---








