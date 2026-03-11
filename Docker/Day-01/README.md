
#IMAGES

docker images = list all local images
docker rmi <image_name> = Delete an image
docker build -t <image_name> = Build an image from a dockerfile

#CONTAINER

docker ps -a = List all local containers
docker ps =List all running containers
docker run <image_name> = run a new container
docker run -d <image_name> = run container in background
docker start <container_name> = to start an existing container
docker stop <container_name> = to stop anexisting container
docker rm <container_name> = to delete a container

docker pull <image_name> = Pull an image from DockerHub
docker push <image_name> = Publish an image to DockerHub

#VOLUMES

docker volume ls = list all volumes
docker volume create <volume_name> = create new named volume
docker volume rm <volume_name> = Delete a vlume

#NETWORk

docker network ls = list all networks
docker network create <network_name> = create a network
docker network rm <network_name> = Remove a network
