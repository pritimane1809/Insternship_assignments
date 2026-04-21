# 🚀 AWS Launch Template with Apache Web Server (User Data)

## 📌 Overview

This task demonstrates how to create an AWS Launch Template to automatically provision EC2 instances with an Apache web server using user data. The instance serves a custom HTML page displaying a message.

---

## 🧱 Prerequisites

* AWS Account
* Basic knowledge of EC2
* Key Pair (create or use existing)

---

## ⚙️ Step 1: Navigate to Launch Templates

* Open AWS Console
* Go to EC2 Dashboard
* Select **Launch Templates**
* Click **Create launch template**

---

## 🏷️ Step 2: Configure Template Details

* **Template Name**: `apache-template`
* **Description**: Launch template with Apache setup

---

## 🖥️ Step 3: Select AMI

* Ubuntu

---

## ⚙️ Step 4: Choose Instance Type

```
t3.micro
```

---

## 🔑 Step 5: Key Pair

* Select existing key pair
  OR
* Create a new key pair

---

## 🔐 Step 6: Configure Security Group

### Inbound Rules:

* SSH (22) → Your IP
* HTTP (80) → 0.0.0.0/0

---

## 📜 Step 7: Add User Data Script

### 🔹 For Ubuntu:

```bash
#!/bin/bash
apt update -y
apt install apache2 -y
systemctl start apache2
systemctl enable apache2

echo "<h1>Apache - Hello from Your Name!</h1>" > /var/www/html/index.html
```

---

## 💾 Step 8: Configure Storage

* Default: 8 GB (recommended)

---

## ✅ Step 9: Create Launch Template

* Click **Create launch template**

---

## 🚀 Step 10: Launch Instance from Template

* Select the created template
* Click **Launch instance from template**
* Choose:

  * Public Subnet
  * Enable Auto-assign Public IP

---

## 🌐 Step 11: Verify Deployment

Open browser:

```
http://<Public-IP>
```

### ✅ Expected Output:

```
Apache - Hello from Your Name!
```
---

## 🧠 Key Learnings

* Launch Templates simplify EC2 provisioning
* User Data automates server configuration
* Apache web server deployment on instance startup

---

<img width="698" height="207" alt="Screenshot (914)" src="https://github.com/user-attachments/assets/80209a1a-d563-41f1-91d1-3a0e26790a8d" />

---

# 🚀 AWS Auto Scaling Group using Launch Template

## 📌 Overview

This task demonstrates how to create an Auto Scaling Group (ASG) in AWS using a Launch Template. The setup ensures high availability, scalability, and fault tolerance by automatically adjusting the number of EC2 instances based on load.

---

## 🧱 Prerequisites

* AWS Account
* Existing Launch Template (with Apache setup)
* Configured VPC with public subnets

---

## ⚙️ Step 1: Navigate to Auto Scaling Groups

* Open AWS Console
* Go to EC2 Dashboard
* Click **Auto Scaling Groups**
* Click **Create Auto Scaling group**

---

## 🏷️ Step 2: Configure Auto Scaling Group

* **Auto Scaling Group Name**: `apache-asg`
* Select **Launch Template**
* Choose your existing template: `apache-template`
* Select latest version
* Click **Next**

---

## 🌐 Step 3: Network Configuration

* Select your **VPC**
* Choose **Public Subnets** (for web access)

Example:

* `10.0.1.0/24`
* `10.0.2.0/24`
* `10.0.3.0/24`

Click **Next**

---

## ⚖️ Step 4: Configure Load Balancer 

### Option 1: Skip (Basic Setup)

* Select **No Load Balancer**

### Option 2: Use Application Load Balancer 

* Select **Attach to new load balancer**
* Type: Application Load Balancer
* Protocol: HTTP (80)
* Create a new target group

---

## 📊 Step 5: Configure Group Size

```id="plr6y2"
Desired Capacity: 2
Minimum Capacity: 1
Maximum Capacity: 3
```

---

## 📈 Step 6: Configure Scaling Policy

### Target Tracking Policy

* Metric: Average CPU Utilization
* Target Value: 50%

Behavior:

* CPU > 50% → Scale Out (add instances)
* CPU < 50% → Scale In (remove instances)

---

## ⏱️ Step 7: Configure Notifications 

* Add SNS notifications to get alerts for scaling events

---

## 🏷️ Step 8: Add Tags

```id="3xq6hz"
Key: Name
Value: apache-asg-instance
```

---

## ✅ Step 9: Review and Create

* Review all configurations
* Click **Create Auto Scaling Group**

---

## 🌐 Step 10: Verify Deployment

* Go to EC2 → Instances
* Verify multiple instances are running
* Access application via Public IP (or Load Balancer DNS if configured)

---

## 🔍 Step 11: Test Auto Scaling

### Generate Load:

```bash id="c83a7n"
sudo apt install stress -y
stress --cpu 2 --timeout 300
```

### Observe:

* New instances launch when CPU increases
* Instances terminate when load decreases

---

## 🧠 Key Learnings

* Auto Scaling ensures high availability
* Launch Templates simplify instance configuration
* Dynamic scaling based on metrics improves performance and cost efficiency

---
<img width="1920" height="488" alt="Screenshot (916)" src="https://github.com/user-attachments/assets/119a67bb-78f1-4f1f-8fd7-016d1a546ef4" />

---
# 🚀 Update Launch Template (Apache ➝ Nginx) & Apply to Auto Scaling Group

## 📌 Overview

This task demonstrates how to update an existing AWS Launch Template by replacing Apache user data with Nginx configuration, apply the updated template to an Auto Scaling Group (ASG), and verify the deployment.

---

## 🧱 Prerequisites

* Existing Launch Template (with Apache setup)
* Existing Auto Scaling Group using that template
* Basic knowledge of EC2 and ASG

---

## ⚙️ Step 1: Create New Version of Launch Template

* Go to AWS Console → EC2 → **Launch Templates**
* Select existing template: `apache-template`
* Click **Actions → Modify template (Create new version)**

---

## 📜 Step 2: Update User Data (Replace Apache with Nginx)

### 🔹 For Ubuntu:

```bash
#!/bin/bash
apt update -y
apt install nginx -y
systemctl start nginx
systemctl enable nginx

echo "<h1>Nginx - Hello from Your Name!</h1>" > /var/www/html/index.html
```

---

* Click **Create template version**

---

## 🔄 Step 3: Update Auto Scaling Group

* Go to EC2 → **Auto Scaling Groups**
* Select your ASG (e.g., `apache-asg`)
* Click **Edit**
* Under Launch Template → Select **Latest Version**
* Click **Update**

---

## 🔁 Step 4: Refresh Instances

### Option 1: Instance Refresh (Recommended)

* In ASG → Click **Instance Refresh**
* Start refresh with rolling update

### Option 2: Manual Replacement

* Terminate existing instances
* ASG will automatically launch new instances

---

## 🌐 Step 5: Verify Nginx Deployment

* Go to EC2 → Instances
* Copy Public IP of new instance

Open in browser:

```
http://<Public-IP>
```

### ✅ Expected Output:

```
Nginx - Hello from Your Name!
```
---

## 🧠 Key Learnings

* Launch Template versioning enables easy updates
* Auto Scaling Group supports rolling updates
* User data automates web server configuration

---






