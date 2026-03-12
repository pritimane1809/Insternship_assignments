Docker Commands

#IMAGES

- docker images = list all local images
- docker rmi <image_name> = Delete an image
- docker build -t <image_name> = Build an image from a dockerfile

#CONTAINER

- docker ps -a = List all local containers
- docker ps =List all running containers
- docker run <image_name> = run a new container
- docker run -d <image_name> = run container in background
- docker start <container_name> = to start an existing container
- docker stop <container_name> = to stop anexisting container
- docker rm <container_name> = to delete a container

- docker pull <image_name> = Pull an image from DockerHub
- docker push <image_name> = Publish an image to DockerHub

#VOLUMES

- docker volume ls = list all volumes
- docker volume create <volume_name> = create new named volume
- docker volume rm <volume_name> = Delete a vlume

#NETWORk

- docker network ls = list all networks
- docker network create <network_name> = create a network
- docker network rm <network_name> = Remove a network

- What is Docker? : Docker is a containerisation tool which is used to package an application along with its dependencies to ensure that it runs consistently throghout the different environments.
- WHat is Dockerfle? : It is a text file which consists of instructions to buld a docker image. Dockerfile = Blueprint of image
- What is Docker image? : It is a template created using Dockerfile which consists of an instruction to run an application in isolated environment Docker Container
- What is Docker Container? : It is a lightweight isolated environment where an application runs.
- What is Docker Volume? : It persists data independently.
- What is Docker Nework? : It enables communication between containers.
- Dockerfile template

  FRON : specifies base image

  WORKDIR : creates working directory inside empty container

  COPY : copies files/ directories fromlocal machine to the container image

  RUN : Executes commands during the image build process

  CMD : Specifies the default command to run where a container starts from image

  
-  


