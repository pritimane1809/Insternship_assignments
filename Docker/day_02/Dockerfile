#Base image
FROM python:3.11-slim

#Working directory
WORKDIR /app

#Copy source code to container
COPY . .

#Install the requirements
RUN pip install -r requirements.txt

#
CMD [ "python", "run.py" ]