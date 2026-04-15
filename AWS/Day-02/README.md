# 🔐 Task 1: IAM User Creation with Least Privilege & S3 Bucket Setup

## 📌 Overview

This task demonstrates how to:

* Create an IAM user in AWS
* Assign least-privilege permissions
* Configure AWS CLI using IAM credentials
* Create an S3 bucket using the IAM user

---

## 🛠️ Prerequisites

* AWS Account
* AWS CLI installed
* Basic understanding of AWS services

---

## 👤 Step 1: Create IAM User

1. Login to AWS Console
2. Navigate to IAM → Users → Create user
3. Enter username (e.g., `s3-user`)
4. Select:

   * Programmatic access (Access key)
5. Click **Next**

---

## 🔒 Step 2: Assign Least Privilege Permissions

### Create Custom Policy

1. Go to IAM → Policies → Create Policy
2. Select JSON and paste:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:CreateBucket",
        "s3:ListBucket"
      ],
      "Resource": "*"
    }
  ]
}
```

3. Name the policy: `S3CreatePolicy`
4. Attach this policy to the IAM user

---

## 🔑 Step 3: Download Credentials

After creating the user:

* Download the `.csv` file containing:

  * Access Key ID
  * Secret Access Key

---

## 💻 Step 4: Configure AWS CLI

Run the following command:

```bash
aws configure
```

Enter:

```
Access Key ID: YOUR_ACCESS_KEY
Secret Access Key: YOUR_SECRET_KEY
Region: ap-south-1
Output format: json
```

---

## 🪣 Step 5: Create S3 Bucket

Run:

```bash
aws s3 mb s3://your-unique-bucket-name --region ap-south-1
```

⚠️ Bucket name must be globally unique.

---
<img width="1854" height="742" alt="1 1" src="https://github.com/user-attachments/assets/26d54e84-3733-4ea6-9928-f8cd940bb945" />

---
<img width="1869" height="673" alt="1 2" src="https://github.com/user-attachments/assets/9fc5e1c1-b297-4e16-b0f0-fe15e6021dfc" />

---

## 🎯 Outcome

* IAM user created with restricted permissions
* AWS CLI configured using IAM credentials
* S3 bucket successfully created

---


