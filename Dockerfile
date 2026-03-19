
#FROM python:3.9

#WORKDIR /app

#COPY . .

#RUN pip install -r requirements.txt

#CMD ["python", "app.py"]



# ----------- Builder Stage -----------
#FROM python:3.9-slim AS builder

#WORKDIR /app

# Install dependencies
#COPY requirements.txt .
#RUN pip install --no-cache-dir --user -r requirements.txt

# ----------- Final Stage -----------
#FROM python:3.9-slim

# Create non-root user
#RUN useradd -m appuser

#WORKDIR /app

# Copy installed dependencies from builder
#COPY --from=builder /root/.local /home/appuser/.local

# Copy app code
#COPY . .

# Set permissions
#RUN chown -R appuser:appuser /app

# Switch to non-root user
#USER appuser

# Add local bin to PATH
#ENV PATH=/home/appuser/.local/bin:$PATH

#EXPOSE 5000

#CMD ["python", "app.py"]


FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "app.py"]