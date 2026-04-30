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

# 🔐 Step 3 : Azure NSG and Traffic Control Lab

## 📌 Objective

Understand how **Network Security Groups (NSGs)** control traffic between peered Virtual Networks by:

* Blocking traffic (ICMP/Ping)
* Allowing traffic using priority rules

---

## 🏗️ Architecture Overview

* **VNet-Dev**

  * CIDR: `10.0.0.0/16`

* **VNet-Test**

  * CIDR: `10.1.0.0/16`
  * Subnet: `10.1.1.0/24`

* **NSG**

  * Name: `NSG-Test`
  * Attached to: `Test-Subnet`

---

## 🚀 Step-by-Step Implementation

### 🔹 Step 1: Create Network Security Group

1. Go to Azure Portal → **Network Security Groups**
2. Click **+ Create**
3. Fill details:

   * Name: `NSG-Test`
   * Resource Group: `RG-Networking`
   * Region: Same as VNets
4. Click **Review + Create → Create**

---

### 🔹 Step 2: Associate NSG with Subnet

1. Open `NSG-Test`
2. Go to **Subnets**
3. Click **+ Associate**
4. Select:

   * Virtual Network: `Priti-VNet-Test`
   * Subnet: `Test-Subnet`
5. Click **OK**

---

## 🚫 Step 3: Add Deny Rule (Block Ping)

1. Go to **Inbound Security Rules**
2. Click **+ Add**

Configure:

* Source: Any
* Destination: Any
* Protocol: ICMP
* Action: Deny
* Priority: `200`
* Name: `Deny-Ping`

Click **Add**

---

## 🧪 Step 4: Test Connectivity

From `VM-Dev`, run:

```bash id="q5n5n9"
ping 10.1.1.4
```

❌ Expected Result:

* Ping fails (Request timed out)

---

<img width="486" height="95" alt="T3 1" src="https://github.com/user-attachments/assets/9dfac54f-1aa5-457f-b564-8f05fa042d9b" />

---

## ✅ Step 5: Add Allow Rule (Override Deny)

1. Click **+ Add** in Inbound Rules

Configure:

* Source: IP Addresses
* Source IP: `10.0.0.0/16`
* Destination: Any
* Protocol: ICMP
* Action: Allow
* Priority: `100`
* Name: `Allow-Ping-From-Dev`

Click **Add**

---

<img width="734" height="320" alt="T3 2" src="https://github.com/user-attachments/assets/4ef0eb06-9e1d-4eb0-b50b-777de4bc3ec5" />

---

## 🧠 Key Concepts

### 🔸 NSG Rule Priority

* Lower number = Higher priority
* Rule with priority `100` is processed before `200`

---

### 🔸 Why Did It Work the Second Time?

The **Allow rule (priority 100)** was evaluated before the **Deny rule (priority 200)**, so traffic was permitted.

---

### 🔸 Does VNet Peering Override NSG?

❌ No

* VNet Peering = Network connection (road)
* NSG = Traffic control (security checkpoint)

Even if peering exists, NSG rules can block traffic.

---

## ✅ Validation Checklist

* ✔ Ping fails after Deny rule
* ✔ Ping succeeds after Allow rule
* ✔ NSG correctly controls traffic

---

## 🎯 Outcome

* Implemented NSG as a firewall
* Controlled traffic between VNets
* Understood rule priority and evaluation

---

## 🏁 Conclusion

This lab demonstrates how **NSGs enforce security policies in Azure**, ensuring that even with VNet Peering, traffic can be strictly controlled based on defined rules.

---








