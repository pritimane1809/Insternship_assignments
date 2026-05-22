# Kubernetes YAML Practice Lab

## Overview

This lab demonstrates basic Kubernetes resources using YAML configuration files.  
It includes examples of:

- Pod
- ReplicaSet
- Deployment
- ConfigMap
- Secret
---

# Kubernetes Resource 

## 1. Pod

A Pod is the smallest deployable unit in Kubernetes.

It contains one or more containers that share:
- Network
- Storage
- IP Address

Pods are mainly used to run applications inside Kubernetes.

### Example Use Case
Running a single Nginx container.

---

## 2. ReplicaSet

A ReplicaSet ensures that a specified number of identical Pods are always running.

If a Pod crashes, ReplicaSet automatically creates a new Pod.

### Features
- Maintains desired Pod count
- Provides high availability
- Supports scaling

### Example
Maintain 3 running Nginx Pods.

---

## 3. Deployment

A Deployment manages ReplicaSets and Pods.

It is the most commonly used Kubernetes object for application deployment.

### Features
- Rolling updates
- Rollback support
- Auto-healing
- Scaling

### Example
Deploy and manage multiple Nginx Pods.

---

## 4. ConfigMap

A ConfigMap stores non-sensitive configuration data in key-value format.

Applications can use ConfigMaps as:
- Environment variables
- Command-line arguments
- Configuration files

### Example
Store application name and environment settings.

---

## 5. Secret

A Secret stores sensitive information securely.

Examples:
- Passwords
- API Keys
- Tokens
- Database credentials

Secrets use Base64 encoded values.

### Example
Store username and password securely.

---

# Project Structure

```text
kubernetes-practice/
│
├── pod.yaml
├── replicaset.yaml
├── deployment.yaml
├── configmap.yaml
└── secret.yaml
```
---

# Prerequisites

Install the following tools before starting:

## 1. Docker Desktop

Install Docker Desktop and enable Kubernetes.

### Enable Kubernetes

```text
Docker Desktop → Settings → Kubernetes → Enable Kubernetes
```

Click:

```text
Apply & Restart
```

---

## 2. Visual Studio Code

Install VS Code.

---

## 3. Kubernetes Extension

Install the Kubernetes extension in VS Code.

---

## 4. Install kubectl

Verify installation:

```bash
kubectl version --client
```
---

# Verification Commands

## Check Pods

```bash
kubectl get pods
```
---

<img width="875" height="262" alt="01" src="https://github.com/user-attachments/assets/f9015999-dcff-4145-bed1-5816c5fea257" />

---

## Check ReplicaSets

```bash
kubectl get rs
```
---

<img width="758" height="192" alt="RS" src="https://github.com/user-attachments/assets/628aebd5-eb09-4a7d-b23e-5f44ce1c4db0" />

---

## Check Deployments

```bash
kubectl get deployments
```
---

<img width="989" height="233" alt="deployment" src="https://github.com/user-attachments/assets/599f1b85-7932-4d66-bd1a-f3c882b0609f" />

---

## Check ConfigMaps

```bash
kubectl get configmaps
```

---

<img width="897" height="134" alt="03" src="https://github.com/user-attachments/assets/84551ecc-2ea9-45e1-9dd9-a3360fedae54" />

---

## Check Secrets

```bash
kubectl get secrets
```

---

<img width="1253" height="258" alt="04" src="https://github.com/user-attachments/assets/007ee640-7f3a-41c6-9882-6452c0f9c1b1" />

---

# Describe Resources

## Pod Details

```bash
kubectl describe pod nginx-pod
```

---

## Deployment Details

```bash
kubectl describe deployment nginx-deployment
```

---

# Useful Commands

## View Logs

```bash
kubectl logs <pod-name>
```

Example:

```bash
kubectl logs nginx-pod
```

---

## Execute Inside Container

```bash
kubectl exec -it <pod-name> -- /bin/bash
```

Example:

```bash
kubectl exec -it nginx-pod -- /bin/bash
```

---

# Delete Resources

```bash
kubectl delete -f pod.yaml
kubectl delete -f replicaset.yaml
kubectl delete -f deployment.yaml
kubectl delete -f configmap.yaml
kubectl delete -f secret.yaml
```

---

# Expected Outcome

After completing this lab, you will be able to:

- Understand Kubernetes basic resources
- Create and manage Pods
- Scale applications using ReplicaSets
- Deploy applications using Deployments
- Store configuration using ConfigMaps
- Store sensitive data using Secrets
- Run Kubernetes YAML files using VS Code and kubectl

---
