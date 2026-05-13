# Terraform Variables Hands-On Lab (AWS)

## Objective

This lab demonstrates different Terraform variable declaration methods and applies them across multiple AWS resources.

Resources created in this lab:

- EC2 Instance
- Security Group
- S3 Bucket

The lab also covers:

- Default variables
- Variable files (`terraform.tfvars`)
- CLI variables (`-var`)
- Environment variables (`TF_VAR`)
- Terraform workflow commands
- 
---

# Step 1: Create Project Directory

```bash
mkdir terraform-variables-lab
cd terraform-variables-lab
```

---

# Step 2: Create Variables File

Create a file named `variables.tf`

```bash
vi variables.tf
```

Add the following content:

```hcl
variable "aws_region" {
  description = "AWS Region"
  type        = string
  default     = "ap-south-1"
}

variable "instance_type" {
  description = "EC2 Instance Type"
  type        = string
}

variable "bucket_name" {
  description = "S3 Bucket Name"
  type        = string
}

variable "sg_name" {
  description = "Security Group Name"
  type        = string
  default     = "terraform-sg"
}

variable "ami_id" {
  description = "AMI ID"
  type        = string
}
```

---

# Step 3: Create Main Terraform Configuration

Create file:

```bash
vi main.tf
```

Add the following configuration:

```hcl
provider "aws" {
  region = var.aws_region
}

# Security Group Resource
resource "aws_security_group" "my_sg" {
  name = var.sg_name

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = var.sg_name
  }
}

# EC2 Instance Resource
resource "aws_instance" "my_ec2" {
  ami                    = var.ami_id
  instance_type          = var.instance_type
  vpc_security_group_ids = [aws_security_group.my_sg.id]

  tags = {
    Name = "Terraform-EC2"
  }
}

# S3 Bucket Resource
resource "aws_s3_bucket" "my_bucket" {
  bucket = var.bucket_name

  tags = {
    Name = "Terraform-S3"
  }
}
```

---

# Step 4: Use terraform.tfvars File

Create file:

```bash
vi terraform.tfvars
```

Add:

```hcl
instance_type = "t2.micro"
bucket_name   = "priti-terraform-demo-bucket"
ami_id        = "ami-03f4878755434977f"
```

### Purpose

This file automatically loads variable values into Terraform.

---

# Step 5: Variable Declaration Methods

## 1. Default Variables

Used in:

```hcl
default = "ap-south-1"
```

and

```hcl
default = "terraform-sg"
```

Terraform automatically uses these values if no input is provided.

---

## 2. terraform.tfvars File

Terraform automatically loads values from:

```bash
terraform.tfvars
```

Example:

```hcl
instance_type = "t2.micro"
```

---

## 3. CLI Variables

Pass variables directly during execution.

Example:

```bash
terraform apply -var="instance_type=t3.micro"
```

Another example:

```bash
terraform apply -var="bucket_name=my-cli-bucket"
```

---

## 4. Environment Variables

Export variables using:

```bash
export TF_VAR_ami_id="ami-03f4878755434977f"
```

Example:

```bash
export TF_VAR_instance_type="t2.micro"
```

Terraform automatically reads variables prefixed with:

```bash
TF_VAR_
```

---

# Step 6: Initialize Terraform

```bash
terraform init
```

### Purpose

- Downloads required providers
- Initializes Terraform working directory

---

# Step 7: Validate Configuration

```bash
terraform validate
```

### Purpose

Checks Terraform syntax and configuration correctness.

---

# Step 8: Format Terraform Files

```bash
terraform fmt
```

### Purpose

Formats Terraform files automatically.

---

# Step 9: Preview Infrastructure Changes

```bash
terraform plan
```

### Purpose

Displays infrastructure changes before deployment.

---

# Step 10: Deploy Resources

```bash
terraform apply
```

Type:

```bash
yes
```

### Resources Created

- EC2 Instance
- Security Group
- S3 Bucket

---

# Step 11: Verify Resources

Verify resources in:

- AWS EC2 Console
- AWS S3 Console
- Security Groups Dashboard

---

<img width="1376" height="398" alt="01" src="https://github.com/user-attachments/assets/eb5a910d-9899-4ce0-b786-159f3d2b87a0" />

---

<img width="1875" height="258" alt="02" src="https://github.com/user-attachments/assets/950c85af-bb03-4900-b37c-e207e7457ee6" />

---

# Step 12: Destroy Infrastructure

```bash
terraform destroy
```

Type:

```bash
yes
```

### Purpose

Deletes all Terraform-managed resources.

---

# Terraform Variable Declaration Summary

| Variable Method | Example |
|-----------------|---------|
| Default Variable | `default = "value"` |
| tfvars File | `terraform.tfvars` |
| CLI Variable | `terraform apply -var="name=value"` |
| Environment Variable | `export TF_VAR_name=value` |

---

# Terraform Commands Used

```bash
terraform init
terraform validate
terraform fmt
terraform plan
terraform apply
terraform show
terraform state list
terraform destroy
```

---

# Learning Outcomes

After completing this lab, you will understand:

- Terraform variable declaration methods
- Variable precedence
- Reusable Terraform configurations
- AWS infrastructure provisioning using Terraform
- Managing multiple resources using variables

---
