Task Overview

This task demonstrates how to build and run a 3-tier containerized application using Docker Compose.

The application consists of:

Frontend: Nginx (Reverse Proxy)

Backend: Node.js 

Database: MySQL

The services communicate using a custom bridge network, and the database uses a named volume for persistent storage.


Technologies Used

Docker

Docker Compose

Nginx

Node.js

Express.js

MySQL


Project Structure


three-tier-docker-app
│
├── docker-compose.yml
│
├── backend
│   ├── Dockerfile
│   ├── package.json
│   └── app.js
│
└── nginx
    └── default.conf


 Learning Outcomes

- Containerizing applications using Docker

- Managing multi-container applications with Docker Compose

- Creating custom Docker networks

- Using named volumes for persistent storage

 Screenshots: 


 <img width="1306" height="999" alt="T3-1" src="https://github.com/user-attachments/assets/8ce3cc70-9a8f-4ef8-956c-808e71345d7a" />

 <img width="1920" height="992" alt="T3-2" src="https://github.com/user-attachments/assets/2f9b1c37-454f-4563-a0aa-490144910092" />

 <img width="951" height="213" alt="T3-3" src="https://github.com/user-attachments/assets/f2e4f6f5-a2f7-41dc-8202-e143e47ae8f6" />

 <img width="1458" height="368" alt="T3-4" src="https://github.com/user-attachments/assets/e4fc3a56-9d3d-4558-b821-3bf72c64efe2" />




 

 ![alt text](T3-1.png)

 ![alt text](T3-2.png)

 ![alt text](T3-3.png)

 ![alt text](T3-4.png)

 

