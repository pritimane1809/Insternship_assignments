# Helm Built-in Objects and `_helpers.tpl`

This assignment explains Helm built-in objects and `_helpers.tpl` using.

---

# Objective

Learn:
- Helm built-in objects
- `.Values`
- `.Release`
- `.Chart`
- `.Files`
- `_helpers.tpl`
- `define` and `include`

---

# Create Helm Chart

```bash
helm create mychart
cd mychart
```

---

# Built-in Objects in Helm

Helm provides predefined objects that can be used inside templates.

## Common Built-in Objects

| Object | Purpose |
|---|---|
| `.Values` | Reads data from `values.yaml` |
| `.Release` | Provides release information |
| `.Chart` | Provides chart details |
| `.Files` | Reads files from chart |
| `.Template` | Current template details |

---

# Example Using `.Values`

## values.yaml

```yaml
appName: nginx-app
replicaCount: 2
```

## deployment.yaml

```yaml
metadata:
  name: {{ .Values.appName }}

spec:
  replicas: {{ .Values.replicaCount }}
```

## Generate YAML

```bash
helm template test .
```

---

# Example Using `.Release`

## deployment.yaml

```yaml
metadata:
  name: {{ .Release.Name }}
```

## Install Chart

```bash
helm install myapp .
```

---

# Example Using `.Chart`

## deployment.yaml

```yaml
labels:
  chart: {{ .Chart.Name }}
  version: {{ .Chart.Version }}
```

---

# Understanding `_helpers.tpl`

`_helpers.tpl` is used to create reusable template blocks in Helm.

Location:

```text
templates/_helpers.tpl
```

It helps avoid writing the same code multiple times.

---

# Example of `_helpers.tpl`

## `_helpers.tpl`

```yaml
{{- define "mychart.appname" -}}
nginx-custom-app
{{- end }}
```

## deployment.yaml

```yaml
metadata:
  name: {{ include "mychart.appname" . }}
```

---

# Generate Final YAML

```bash
helm template test .
```

---

# Common Helper Functions

| Function | Purpose |
|---|---|
| `define` | Create reusable block |
| `include` | Use reusable block |
| `default` | Set default value |
| `quote` | Add quotes |
| `upper` | Convert to uppercase |
| `lower` | Convert to lowercase |

---

# Example Using `default`

```yaml
{{ .Values.name | default "nginx" }}
```

---

# Example Using `quote`

```yaml
{{ .Values.name | quote }}
```

---

# Useful Commands

```bash
helm create mychart
helm template test .
helm install myapp .
helm list
helm uninstall myapp
```
