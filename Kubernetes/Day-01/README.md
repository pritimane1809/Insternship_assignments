# Kubernetes Day 1 - Basics

## 📌 Objective
This session covers the fundamentals of Kubernetes including Pods, Deployments, Services, Namespaces, and basic kubectl commands.

---

# 📂 Project Structure

```bash
k8s/
└── day1/
    ├── pod.yaml
    ├── deployment.yaml
    ├── service.yaml
    └── namespace.yaml
```

---

# 🚀 Prerequisites

Make sure the following tools are installed:

- Docker
- Kubernetes Cluster (Minikube / Kind / EKS)
- kubectl

Verify installation:

```bash
kubectl version --client
docker --version
minikube version
```

---

# ▶️ Start Minikube

```bash
minikube start
```

Check cluster status:

```bash
kubectl cluster-info
```

---

# 📦 Create Namespace

```bash
kubectl apply -f namespace.yaml
```

Verify:

```bash
kubectl get ns
```

---

# 🐳 Create Pod

Apply pod manifest:

```bash
kubectl apply -f pod.yaml
```

Check pods:

```bash
kubectl get pods
```

Describe pod:

```bash
kubectl describe pod <pod-name>
```

View logs:

```bash
kubectl logs <pod-name>
```

---

# ⚙️ Create Deployment

Apply deployment manifest:

```bash
kubectl apply -f deployment.yaml
```

Check deployments:

```bash
kubectl get deployments
```

Check replica sets:

```bash
kubectl get rs
```

Scale deployment:

```bash
kubectl scale deployment nginx-deployment --replicas=3
```

---

# 🌐 Create Service

Apply service manifest:

```bash
kubectl apply -f service.yaml
```

Check services:

```bash
kubectl get svc
```

Expose application:

```bash
minikube service <service-name>
```

---

# 📋 Useful kubectl Commands

## Get Resources

```bash
kubectl get pods
kubectl get deployments
kubectl get svc
kubectl get all
```

## Describe Resources

```bash
kubectl describe pod <pod-name>
kubectl describe deployment <deployment-name>
```

## Delete Resources

```bash
kubectl delete pod <pod-name>
kubectl delete deployment <deployment-name>
kubectl delete svc <service-name>
```

---

# 📖 Kubernetes Concepts Covered

- Pod
- Deployment
- ReplicaSet
- Service
- Namespace
- Scaling
- kubectl commands

---

# ✅ Verification

Check all resources:

```bash
kubectl get all -n <namespace>
```

Access application:

```bash
minikube service <service-name>
```

---

# 🧹 Cleanup

Delete all resources:

```bash
kubectl delete -f .
```

Stop Minikube:

```bash
minikube stop
```

---

# 📚 Learning Outcome

After completing this lab, you will understand:

- How Kubernetes manages containers
- How to deploy applications using YAML manifests
- How services expose applications
- Basic troubleshooting using kubectl
- Scaling applications in Kubernetes

---

# 👨‍💻 Author

Priti Mane
