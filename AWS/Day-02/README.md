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

# Task 2: 🔐 IAM Role Creation & S3 Bucket Deletion (Least Privilege)

## 📌 Overview

This task demonstrates how to:

* Create an IAM Role in AWS
* Assign least-privilege permissions to the role
* Assume the IAM role
* Delete an existing S3 bucket securely using the IAM role

---

## 🛠️ Prerequisites

* AWS Account
* AWS CLI installed and configured (with admin/root user initially)
* Existing S3 bucket (created in previous task)

---

## 👤 Step 1: Create IAM Role

1. Login to AWS Console
2. Navigate to IAM → Roles → Create role
3. Select **Trusted entity type**:

   * AWS Service → EC2 (recommended for learning)
4. Click **Next**

---

## 🔒 Step 2: Create Least Privilege Policy

1. Go to IAM → Policies → Create Policy
2. Select **JSON** and paste:

```json id="y1c5jd"
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:DeleteBucket",
        "s3:ListBucket",
        "s3:DeleteObject"
      ],
      "Resource": [
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    }
  ]
}
```

> 🔁 Replace `your-bucket-name` with your actual bucket name.

3. Click **Next**
4. Name the policy: `S3DeletePolicy`
5. Create policy

---

## 🔗 Step 3: Attach Policy to IAM Role

1. Go back to IAM → Roles
2. Select the role being created
3. Attach the policy: `S3DeletePolicy`
4. Provide role name: `S3DeleteRole`
5. Click **Create role**

---

## 💻 Step 4: Use IAM Role

### ✅ Option 1: Attach Role to EC2 Instance

1. Go to EC2 → Launch Instance
2. Under **IAM Role**, select `S3DeleteRole`
3. Launch instance
4. Connect to EC2

---

### 🔑 Option 2: Assume Role Using AWS CLI

Run:

```bash id="nhmqx2"
aws sts assume-role \
  --role-arn arn:aws:iam::ACCOUNT_ID:role/S3DeleteRole \
  --role-session-name deletesession
```

You will receive temporary credentials:

* AccessKeyId
* SecretAccessKey
* SessionToken

Export them:

```bash id="a1cm57"
export AWS_ACCESS_KEY_ID=your_access_key
export AWS_SECRET_ACCESS_KEY=your_secret_key
export AWS_SESSION_TOKEN=your_session_token
```

---

## 🪣 Step 5: Empty the S3 Bucket

⚠️ Bucket must be empty before deletion

```bash id="tm9j1z"
aws s3 rm s3://your-bucket-name --recursive
```

---

## 🗑️ Step 6: Delete S3 Bucket

```bash id="gkfx35"
aws s3 rb s3://your-bucket-name
```

---

## ✅ Step 7: Verify Deletion

```bash id="r9ktcf"
aws s3 ls
```

The bucket should no longer appear.

---

## 🎯 Outcome

* IAM Role created with least-privilege permissions
* Role assumed using EC2 or CLI
* S3 bucket securely deleted using IAM role

---

<img width="700" height="125" alt="2 1" src="https://github.com/user-attachments/assets/628ad3ff-e155-4c6f-88c8-5fbea58835f9" />

---

<img width="1404" height="641" alt="2 2" src="https://github.com/user-attachments/assets/c291314e-f3f4-4a95-b807-65cf655f91fa" />

---
# 🔐 Task 3:  IAM Role Trust Relationship & S3 Bucket Creation

## 📌 Overview

This task demonstrates how to:

* Create two IAM roles
* Configure a trust relationship between roles
* Ensure one role has **no direct S3 permissions**
* Allow role assumption using AWS STS
* Create an S3 bucket using the assumed role

---

## 🛠️ Prerequisites

* AWS Account
* AWS CLI installed
* Basic understanding of IAM Roles and policies

---

## 👤 Step 1: Create IAM-ROLE-1 (No S3 Access)

1. Login to AWS Console
2. Navigate to IAM → Roles → Create role
3. Select:

   * Trusted entity: AWS Service → EC2
4. Click **Next**
5. Do NOT attach any S3 policies
6. Name the role: `IAM-ROLE-1`
7. Click **Create role`

📌 This role has **no permissions to access S3**

---

## 👤 Step 2: Create IAM-ROLE-2 (S3 Access Role)

1. Go to IAM → Roles → Create role
2. Select:

   * Trusted entity: Another AWS account
   * Enter your AWS Account ID
3. Click **Next**

---

## 🔒 Step 3: Create S3 Permission Policy

1. Go to IAM → Policies → Create Policy
2. Select JSON and paste:

```json id="q2j9fz"
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

3. Name the policy: `S3CreatePolicyRole2`
4. Attach this policy to `IAM-ROLE-2`

---

## 🔗 Step 4: Configure Trust Relationship

1. Open `IAM-ROLE-2`
2. Go to **Trust relationships → Edit trust policy**
3. Update the policy:

```json id="nb34dn"
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::ACCOUNT_ID:role/IAM-ROLE-1"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

🔁 Replace `ACCOUNT_ID` with your AWS account ID.

---

## 💻 Step 5: Launch EC2 with IAM-ROLE-1

1. Go to EC2 → Launch Instance
2. Attach IAM Role: `IAM-ROLE-1`
3. Launch and connect to the instance

---

## 🔑 Step 6: Assume IAM-ROLE-2

Run:

```bash id="bcaxxt"
aws sts assume-role \
  --role-arn arn:aws:iam::ACCOUNT_ID:role/IAM-ROLE-2 \
  --role-session-name testsession
```

You will receive temporary credentials:

* AccessKeyId
* SecretAccessKey
* SessionToken

Export them:

```bash id="qyk7p3"
export AWS_ACCESS_KEY_ID=your_access_key
export AWS_SECRET_ACCESS_KEY=your_secret_key
export AWS_SESSION_TOKEN=your_session_token
```

---

## 🪣 Step 7: Create S3 Bucket

```bash id="h7b1r6"
aws s3 mb s3://trust-demo-bucket-12345 --region ap-south-1
```

⚠️ Bucket name must be globally unique.

---

## ✅ Step 8: Verification

```bash id="n4gjtp"
aws s3 ls
```

✔ Bucket is created successfully
✔ IAM-ROLE-1 alone cannot access S3
✔ Access is granted only via IAM-ROLE-2

---

## 🎯 Outcome

* Created IAM roles with clear separation of permissions
* Implemented trust relationship between roles
* Used AWS STS to assume role securely
* Created S3 bucket using assumed role credentials

---
<img width="588" height="63" alt="Screenshot (897)" src="https://github.com/user-attachments/assets/23350ab3-4b48-451e-a294-725efa07f2ce" />

---



