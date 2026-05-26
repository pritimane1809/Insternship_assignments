# 🚀 Helm Charts in Kubernetes

## 📌 What is Helm?

Helm is a package manager for Kubernetes that helps you define, install, upgrade, and manage Kubernetes applications easily.

A Helm package is called a **Chart**.

Helm simplifies Kubernetes deployments by using reusable templates instead of writing long YAML files manually every time.

---

# 🎯 Why Do We Need Helm?

Managing Kubernetes applications manually becomes difficult when applications contain multiple YAML files such as:

- Deployment
- Service
- ConfigMap
- Secret
- Ingress
- StatefulSet

Helm helps by:

✅ Automating deployments  
✅ Reusing templates  
✅ Managing application versions  
✅ Simplifying upgrades and rollbacks  
✅ Reducing duplicate YAML code  
✅ Supporting environment-based configurations

---

# 📦 What is a Helm Chart?

A Helm Chart is a collection of files that describe Kubernetes resources.

It contains:

- Templates for Kubernetes objects
- Configuration values
- Metadata about the application

Helm Charts make deployments reusable and configurable.

---

# 📁 Basic Helm Chart Structure

```bash
mychart/
│
├── Chart.yaml
├── values.yaml
├── charts/
├── templates/
│   ├── deployment.yaml
│   ├── service.yaml
│   └── ingress.yaml
└── .helmignore
```

---

# 📄 What is Chart.yaml?

`Chart.yaml` contains metadata information about the Helm Chart.

It defines:

- Chart name
- Version
- Description
- Application version

## Example:

```yaml
apiVersion: v2
name: mychart
description: A Helm chart for Kubernetes
type: application
version: 0.1.0
appVersion: "1.0"
```

## Important Fields

| Field | Description |
|-------|-------------|
| apiVersion | Helm chart API version |
| name | Name of the chart |
| description | Information about the chart |
| type | application or library |
| version | Helm chart version |
| appVersion | Application version |

---

# 📄 What is values.yaml?

`values.yaml` stores configurable values used inside templates.

Instead of hardcoding values in YAML files, Helm uses values from this file dynamically.

## Example:

```yaml
replicaCount: 2

image:
  repository: nginx
  tag: latest

service:
  type: ClusterIP
  port: 80
```

These values are accessed in templates using:

```yaml
{{ .Values.replicaCount }}
```

---

# 📂 What is templates/ Directory?

The `templates/` folder contains Kubernetes resource templates.

Examples:

- deployment.yaml
- service.yaml
- ingress.yaml
- configmap.yaml

Helm converts these templates into actual Kubernetes YAML files during deployment.

---

# ⚙️ Basic Helm Commands

## 1️⃣ Install Helm

### Ubuntu/Linux

```bash
curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```

---

# 🔍 Verify Helm Installation

```bash
helm version
```

---

# 📦 Create a Helm Chart

```bash
helm create mychart
```

---

# 📁 View Chart Structure

```bash
tree mychart
```

---

# 🚀 Install Helm Chart

```bash
helm install myrelease mychart
```

---

# 🚀 Install in Custom Namespace

```bash
helm install myrelease mychart -n dev --create-namespace
```

---

# 📋 List Helm Releases

```bash
helm list
```

---

# 📋 List Releases in All Namespaces

```bash
helm list -A
```

---

# 🔄 Upgrade Helm Release

```bash
helm upgrade myrelease mychart
```

---

# 📝 Upgrade Using Updated values.yaml

```bash
helm upgrade myrelease mychart -f values.yaml
```

---

# ⏪ Rollback Helm Release

```bash
helm rollback myrelease 1
```

Where `1` is the revision number.

---

# 📜 View Release History

```bash
helm history myrelease
```

---

# ❌ Uninstall Helm Release

```bash
helm uninstall myrelease
```

---

# 🔍 Validate Templates

```bash
helm template mychart
```

---

# 🧪 Dry Run Deployment

```bash
helm install myrelease mychart --dry-run
```

---

# 🔍 Check Kubernetes Resources

## View Pods

```bash
kubectl get pods
```

## View Services

```bash
kubectl get svc
```

## View Deployments

```bash
kubectl get deploy
```

## View All Resources

```bash
kubectl get all
```

---

# ✅ Advantages of Helm

- Faster Kubernetes deployments
- Reusable templates
- Easy configuration management
- Supports version control
- Simple upgrades and rollbacks
- Reduces manual YAML writing
- Improves deployment consistency

---

# 📚 Summary

Helm is an essential Kubernetes tool that simplifies application deployment and management using reusable charts and templates. It helps DevOps engineers automate deployments, manage versions, and perform upgrades and rollbacks efficiently.
