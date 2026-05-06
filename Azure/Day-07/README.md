# 🚀 AKS Public Cluster Deployment Lab (Versioned Web App)

## 📌 Overview

This lab demonstrates how to:

* Build a custom web application on a VM
* Push Docker images to Azure Container Registry (ACR)
* Deploy the application on Azure Kubernetes Service (AKS)
* Perform version updates (v1 → v2) using Kubernetes

---

## 🏗️ Architecture

* Virtual Network with separate subnets
* Jumpbox VM for building Docker images
* Azure Container Registry (ACR)
* AKS Cluster (public)
* Kubernetes Deployment + LoadBalancer Service

---

## ⚙️ Step-by-Step Implementation

### 1. Create Resource Group

* Name: `<your-name>-rg-aks-lab`
* Region: Same for all resources

---

<img width="1137" height="405" alt="01" src="https://github.com/user-attachments/assets/ed324af9-8292-42f0-8b7a-57f07e2f9bc7" />

---


### 2. Create Virtual Network

* Name: `<your-name>-vnet-aks`
* Address Space: `10.0.0.0/16`

#### Subnets:

* `vm-subnet` → `10.0.1.0/24`
* `aks-subnet` → `10.0.2.0/24`

---



### 3. Create Virtual Machine (Jumpbox)

* Name: `<your-name>-vm-jumpbox`
* Image: Ubuntu 22.04
* Subnet: `vm-subnet`
* Public IP: Enabled
* Allow SSH (port 22)

---

### 4. Create Azure Container Registry (ACR)

* Name: `<your-name>acr`
* SKU: Standard

---

### 5. Connect to VM

```bash
ssh azureuser@<VM-Public-IP>
```

---

### 6. Install Docker & Azure CLI

```bash
sudo apt update
sudo apt install -y ca-certificates curl apt-transport-https lsb-release gnupg

# Docker
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER
newgrp docker

# Azure CLI
curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash
```

---

### 7. Create Web App (Version 1)

```bash
mkdir aks-webapp
cd aks-webapp
```

#### index.html (v1)

```html
<!DOCTYPE html>
<html>
<head>
<title>Version 1</title>
<style>
body {
  font-family: Arial;
  background-color: #f4f7fb;
  text-align: center;
  padding-top: 80px;
}
.card {
  width: 60%;
  margin: auto;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
h1 { color: #0078d4; }
</style>
</head>
<body>
<div class="card">
<h1>Welcome to AKS - Version 1</h1>
<p>Built on VM and pushed to ACR.</p>
</div>
</body>
</html>
```

#### Dockerfile

```dockerfile
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
EXPOSE 80
```

---

### 8. Build & Push Image to ACR

```bash
az login
az acr login --name <your-name>acr

docker build -t <your-name>acr.azurecr.io/webapp:v1 .
docker push <your-name>acr.azurecr.io/webapp:v1
```

---

### 9. Create AKS Cluster

* Name: `<your-name>-aks-public`
* Network: Azure CNI
* Subnet: `aks-subnet`
* Identity: System-assigned
* Public access enabled

---

### 10. Attach ACR to AKS

* Go to AKS → Container Registry → Attach ACR

---

### 11. Connect to AKS

```bash
az login
az aks get-credentials --resource-group <your-name>-rg-aks-lab --name <your-name>-aks-public

kubectl get nodes
```

---

### 12. Deploy Version 1

#### deployment.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: webapp
spec:
  replicas: 2
  selector:
    matchLabels:
      app: webapp
  template:
    metadata:
      labels:
        app: webapp
    spec:
      containers:
        - name: webapp
          image: <your-name>acr.azurecr.io/webapp:v1
          ports:
            - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: webapp-service
spec:
  type: LoadBalancer
  selector:
    app: webapp
  ports:
    - port: 80
      targetPort: 80
```

```bash
kubectl apply -f deployment.yaml
kubectl get svc
```

➡️ Open in browser:

```
http://<EXTERNAL-IP>
```

---

## 🔄 Update to Version 2

### 13. Modify index.html (on VM)

Change heading to:

```
Welcome to AKS - Version 2
```

---

### 14. Build & Push v2

```bash
docker build -t <your-name>acr.azurecr.io/webapp:v2 .
docker push <your-name>acr.azurecr.io/webapp:v2
```

---

### 15. Update Deployment

Edit `deployment.yaml`:

```yaml
image: <your-name>acr.azurecr.io/webapp:v2
```

Apply:

```bash
kubectl apply -f deployment.yaml
kubectl rollout status deployment/webapp
```

---

## ✅ Final Output

* Version 1 → Initial deployment
* Version 2 → Updated app via rolling update
* Access via LoadBalancer public IP

---

## 🎯 Key Learnings

* Docker image lifecycle (build → push → deploy)
* ACR integration with AKS
* Kubernetes Deployment & Service
* Rolling updates in Kubernetes
* Real-world DevOps workflow

---

## 🧹 Cleanup (Optional)

```bash
az group delete --name <your-name>-rg-aks-lab --yes --no-wait
```

---

✨ Lab completed successfully!
