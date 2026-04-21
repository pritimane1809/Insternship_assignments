# 🚀 AWS S3 Static Website Hosting & CloudFront Setup

## 📌 Project Overview

This task demonstrates how to configure Amazon S3 for static website hosting, apply multiple bucket policies for security use-cases, and integrate CloudFront CDN to securely deliver content with improved performance.

---

## 🧱 Prerequisites

* AWS Account
* Basic knowledge of S3 and networking
* Sample files (`index.html`, `.png`, `.jpg`)

---

## 🪣 Step 1: Create S3 Bucket

* Go to AWS Console → S3
* Click **Create bucket**
* Provide a globally unique bucket name
* Select region
* Uncheck **Block all public access** (for static hosting)
* Create bucket

---

## 📤 Step 2: Upload Website Files

Upload:

* `index.html`
* Image files (`.png`, `.jpg`)

---

## 🌐 Step 3: Enable Static Website Hosting

* Go to **Properties**
* Enable **Static Website Hosting**
* Set:

  * Index document: `index.html`

### 🔗 Access URL:

```
http://your-bucket-name.s3-website-region.amazonaws.com
```

---

## 🖼️ Step 4: Access Images Without “Open” Button

Update `index.html`:

```html
<html>
  <body>
    <h1>My Image Gallery</h1>
    <img src="https://your-bucket-name.s3.amazonaws.com/image1.png" width="300">
    <img src="https://your-bucket-name.s3.amazonaws.com/image2.jpg" width="300">
  </body>
</html>
```

---

## 🔐 Step 5: S3 Bucket Policies (10 Use Cases)

Go to **Permissions → Bucket Policy** and apply:

---

### 1. Public Read Access

```json
{
  "Effect": "Allow",
  "Principal": "*",
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::your-bucket-name/*"
}
```

---

### 2. Deny Delete Objects

```json
{
  "Effect": "Deny",
  "Principal": "*",
  "Action": "s3:DeleteObject",
  "Resource": "arn:aws:s3:::your-bucket-name/*"
}
```

---

### 3. Allow Access from Specific IP

```json
{
  "Effect": "Allow",
  "Principal": "*",
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::your-bucket-name/*",
  "Condition": {
    "IpAddress": {"aws:SourceIp": "YOUR-IP"}
  }
}
```

---

### 4. Deny Unencrypted Uploads

```json
{
  "Effect": "Deny",
  "Principal": "*",
  "Action": "s3:PutObject",
  "Resource": "arn:aws:s3:::your-bucket-name/*",
  "Condition": {
    "StringNotEquals": {"s3:x-amz-server-side-encryption": "AES256"}
  }
}
```

---

### 5. Enforce HTTPS Only

```json
{
  "Effect": "Deny",
  "Principal": "*",
  "Action": "s3:*",
  "Resource": "arn:aws:s3:::your-bucket-name/*",
  "Condition": {
    "Bool": {"aws:SecureTransport": "false"}
  }
}
```

---

### 6. Allow Specific IAM User

```json
{
  "Effect": "Allow",
  "Principal": {"AWS": "arn:aws:iam::ACCOUNT-ID:user/username"},
  "Action": "s3:*",
  "Resource": "arn:aws:s3:::your-bucket-name/*"
}
```

---

### 7. Deny Bucket Listing

```json
{
  "Effect": "Deny",
  "Principal": "*",
  "Action": "s3:ListBucket",
  "Resource": "arn:aws:s3:::your-bucket-name"
}
```

---

### 8. Allow Upload to Specific Folder

```json
{
  "Effect": "Allow",
  "Principal": "*",
  "Action": "s3:PutObject",
  "Resource": "arn:aws:s3:::your-bucket-name/uploads/*"
}
```

---

### 9. Restrict Region Access

```json
{
  "Effect": "Deny",
  "Principal": "*",
  "Action": "s3:*",
  "Resource": "arn:aws:s3:::your-bucket-name/*",
  "Condition": {
    "StringNotEquals": {"aws:RequestedRegion": "ap-south-1"}
  }
}
```

---

### 10. Allow CloudFront Access

```json
{
  "Effect": "Allow",
  "Principal": {"Service": "cloudfront.amazonaws.com"},
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::your-bucket-name/*"
}
```

---

## 🌍 Step 6: Create CloudFront Distribution

* Go to AWS Console → CloudFront
* Click **Create Distribution**

### Configure:

* Origin: Select S3 bucket

* Enable **Origin Access Control (OAC)**

* Viewer protocol: Redirect HTTP to HTTPS

* Create distribution

* Wait for deployment

---

## 🔗 Step 7: Access via CloudFront

```
https://dxxxxx.cloudfront.net
```

---

## 🔐 Step 8: Update Bucket Policy for CloudFront (OAC)

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontAccess",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::ACCOUNT-ID:distribution/DISTRIBUTION-ID"
        }
      }
    }
  ]
}
```
---

## 🧠 Key Learnings

* Hosting static websites using S3
* Writing secure and conditional bucket policies
* Using CloudFront for CDN and secure access
* Implementing Origin Access Control (OAC)

---

