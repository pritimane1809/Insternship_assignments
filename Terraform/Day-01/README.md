# Terraform Hands-On Lab

## Objective

This lab demonstrates the basics of Terraform by performing the following tasks:

- Install Terraform on the system
- Configure Terraform alias
- Deploy and destroy resources using Terraform
- Create and modify cloud resources
- Understand Terraform refresh vs plan
- Explore important Terraform commands

---

# Step 1: Install Terraform

## Update Packages

```bash
sudo apt update
```

## Install Required Dependencies

```bash
sudo apt install -y gnupg software-properties-common curl
```

## Add HashiCorp GPG Key

```bash
curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -
```

## Add Terraform Repository

```bash
sudo apt-add-repository \
"deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"
```

## Install Terraform

```bash
sudo apt update && sudo apt install terraform -y
```

## Verify Installation

```bash
terraform version
```

---

# Step 2: Configure Terraform Alias

## For Bash Users

Open bash configuration:

```bash
nano ~/.bashrc
```

Add the following line:

```bash
alias tf='terraform'
```

Reload configuration:

```bash
source ~/.bashrc
```

Verify alias:

```bash
tf version
```

---

# Step 3: Create Terraform Project

## Create Project Folder

```bash
mkdir terraform-lab
cd terraform-lab
```

---

# Step 4: Create Terraform Configuration

Create a file named `main.tf`

```bash
nano main.tf
```

Add the following Terraform configuration:

```hcl
provider "aws" {
  region = "ap-south-1"
}

resource "aws_instance" "my_ec2" {
  ami           = "ami-03f4878755434977f"
  instance_type = "t2.micro"

  tags = {
    Name = "Terraform-First-EC2"
  }
}
```

---

# Step 5: Configure AWS CLI

Install AWS CLI:

```bash
sudo apt install awscli -y
```

Configure credentials:

```bash
aws configure
```

Provide:

- AWS Access Key
- Secret Access Key
- Region
- Output format

---

# Step 6: Initialize Terraform

```bash
terraform init
```

### Purpose

- Downloads provider plugins
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

Displays what Terraform will create, modify, or destroy.

---

# Step 10: Deploy Infrastructure

```bash
terraform apply
```

Type:

```bash
yes
```

### Result

An EC2 instance will be created in AWS.

---

# Step 11: Destroy Infrastructure

```bash
terraform destroy
```

Type:

```bash
yes
```

### Result

All Terraform-managed resources will be deleted.

---

# Step 12: Add Another Resource

Update `main.tf` to add a security group.

```hcl
provider "aws" {
  region = "ap-south-1"
}

resource "aws_security_group" "my_sg" {
  name = "terraform-sg"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_instance" "my_ec2" {
  ami                    = "ami-03f4878755434977f"
  instance_type          = "t2.micro"
  vpc_security_group_ids = [aws_security_group.my_sg.id]

  tags = {
    Name = "Terraform-Updated-EC2"
  }
}
```

---

# Step 13: Check New Changes

```bash
terraform plan
```

Terraform will show:

- Security group creation
- EC2 modifications

Apply changes:

```bash
terraform apply
```

---

# Step 14: Modify Resource Values

Change:

```hcl
instance_type = "t2.micro"
```

To:

```hcl
instance_type = "t3.micro"
```

Run:

```bash
terraform plan
```

Then apply:

```bash
terraform apply
```

### Result

Terraform updates the EC2 instance configuration.

---

# Important Terraform Commands

## 1. terraform validate

```bash
terraform validate
```

Checks syntax and configuration errors.

---

## 2. terraform fmt

```bash
terraform fmt
```

Formats Terraform files properly.

---

## 3. terraform show

```bash
terraform show
```

Displays Terraform state and resource details.

---

## 4. terraform state

List resources:

```bash
terraform state list
```

Show resource details:

```bash
terraform state show aws_instance.my_ec2
```

### Purpose

Used to inspect and manage Terraform state.

---

# Learning Outcomes

After completing this lab, you will understand:

- Infrastructure as Code (IaC)
- Terraform workflow
- Terraform state management
- Resource deployment and updates
- Infrastructure planning
- Terraform debugging commands

---
