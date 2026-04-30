# 🌐 Azure VNet Peering Lab (Step-by-Step)

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




