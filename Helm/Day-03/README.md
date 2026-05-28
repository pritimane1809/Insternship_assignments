# Helm Functions 

The lab includes examples for:

* trim
* add
* list
* date
* b64enc
* merge
* upper
* default
* replace
* len
* join
* quote

---

#  Structure

```text
helm-functions-demo/
│
├── Chart.yaml
├── values.yaml
└── templates/
    └── configmap.yaml
```

---

# Objective

The purpose of this lab is to practice Helm template functions and understand how Helm processes dynamic values inside Kubernetes YAML manifests.

---

# Functions Used in This Project

| Function | Definition                                              |
| -------- | ------------------------------------------------------- |
| trim     | Removes extra spaces from beginning and end of a string |
| add      | Adds numeric values                                     |
| list     | Creates a list of items                                 |
| date     | Formats date and time                                   |
| b64enc   | Encodes text into Base64 format                         |
| merge    | Combines multiple maps/dictionaries                     |
| upper    | Converts text to uppercase                              |
| default  | Sets a fallback value if actual value is missing        |
| replace  | Replaces characters or words in a string                |
| len      | Counts total items in a list/string                     |
| join     | Combines multiple strings using separator               |
| quote    | Adds double quotes around value                         |

---

# values.yaml

```yaml
app:
  name: "  nginx-app  "
  version: 2
  replicas: 3

user:
  firstName: "Priti"
  lastName: "Mane"

database:
  username: admin
  password: mysecretpassword

ports:
  - 80
  - 443
  - 8080

labels:
  env: dev
  team: platform

extraLabels:
  owner: priti
  project: helm-demo

message: "hello-world-app"
```

---

# templates/configmap.yaml

```yaml
apiVersion: v1
kind: ConfigMap

metadata:
  name: helm-functions-demo

  labels:

    app: {{ upper .Values.app.name | trim | quote }}

{{- $mergedLabels := merge .Values.labels .Values.extraLabels }}

{{ toYaml $mergedLabels | nindent 4 }}

data:

  trimmed-name: {{ trim .Values.app.name | quote }}

  total-replicas: "{{ add .Values.app.version .Values.app.replicas }}"

  fruits: |
    {{- $fruitList := list "apple" "banana" "mango" }}
    {{- range $fruitList }}
    - {{ . }}
    {{- end }}

  current-date: "{{ now | date "2006-01-02" }}"

  encoded-password: {{ .Values.database.password | b64enc | quote }}

  replaced-message: {{ replace "-" "_" .Values.message | quote }}

  total-ports: "{{ len .Values.ports }}"

  all-ports: "{{ join "," (list "80" "443" "8080") }}"

  image-name: {{ default "nginx:latest" .Values.image | quote }}

  first-name: {{ .Values.user.firstName | quote }}
```

---

# Helm Commands

## Create Helm Project

```bash
helm create helm-functions-demo
```

---

## Generate YAML Output

```bash
helm template demo .
```
---

# Example Outputs

## trim

Input:

```yaml
"  nginx-app  "
```

Output:

```yaml
"nginx-app"
```

---

## add

Input:

```yaml
2 + 3
```

Output:

```yaml
5
```

---

## list

Output:

```yaml
- apple
- banana
- mango
```

---

## date

Output:

```yaml
2026-05-28
```

---

## b64enc

Input:

```yaml
mysecretpassword
```

Output:

```yaml
bXlzZWNyZXRwYXNzd29yZA==
```

---

## merge

Output:

```yaml
labels:
  env: dev
  team: platform
  owner: priti
  project: helm-demo
```

---

# Important Helm Concepts

| Concept    | Description                  |
| ---------- | ---------------------------- |
| .Values    | Access values.yaml data      |
| {{ }}      | Helm template block          |
| pipe ( | ) | Pass output to next function |
| range      | Loop through list            |
| nindent    | Proper YAML indentation      |
| $variable  | Store temporary variable     |

---
<img width="1232" height="999" alt="01" src="https://github.com/user-attachments/assets/b4cad423-77d6-484a-8d6e-688ed8603978" />

---

<img width="1108" height="1020" alt="02" src="https://github.com/user-attachments/assets/3955402a-640c-45a5-a860-fb892db4e9ea" />

---

<img width="1330" height="1015" alt="03" src="https://github.com/user-attachments/assets/75595ac3-cd18-4323-9c92-721901b63e08" />

---



