Day -03

Task 1 : Verify Your Systemʼs Network Identity

- Check IP = ip addr (172.30.32.0)
- Check Gateway = ip route
- Ping Gateway = ping -c 4 172.30.32.0
- Ping Public IP = ping -c 4 8.8.8.8
- Ping Domain = ping google.com
- Use dig = dig google.com
- Use traceroute = traceroute google.com

  <img width="1366" height="768" alt="Task1-1 1" src="https://github.com/user-attachments/assets/cc4755e9-033c-4d00-8458-9e4736d22c73" />
<img width="1366" height="768" alt="Task1-1 2" src="https://github.com/user-attachments/assets/64157022-af07-4fc7-a59b-92193ddd537b" />


Task 2 : Test Internet Connectivity Flow

- Successfully verified internet connectivity by pinging 8.8.8.8.
- Confirmed DNS resolution by pinging google.com.
- Used traceroute to analyze network path and identify intermediate hops.
- Verified end-to-end connectivity

<img width="1366" height="768" alt="Task2" src="https://github.com/user-attachments/assets/5cc3239e-7a02-40aa-87a8-2f9409571c95" />


Task 3 : Analyze DNS in Detail

- After analysing following are the output:
- IP Address: 142.250.70.110
- DNS Server: 172.30.32.1
- Response Time: 12 msec

<img width="1366" height="768" alt="Task3" src="https://github.com/user-attachments/assets/8ab21c50-f843-48d6-812f-3f39895b8e35" />



Task 4 : Host a Simple Website Locally

- Installed ngnix
- tested through localhost
- tested through browser

<img width="1366" height="768" alt="Task4-1 1" src="https://github.com/user-attachments/assets/836dac83-e525-4c37-8a33-ff0778e1c49e" />
<img width="1366" height="768" alt="Task4-1 2" src="https://github.com/user-attachments/assets/4e4d5739-6d6c-4d52-bc5e-2dcfe24bb7dc" />



Task 5 : Check Listening ports

- Verified port 80 was listening.
- Stopped Nginx service.
- Confirmed port 80 disappeared from listening ports.
- Successfully validated web server status

<img width="1366" height="768" alt="Task5" src="https://github.com/user-attachments/assets/c33fa2fd-0ddd-49f7-ad92-54df1f5ae0e8" />


Task 6 : Test application connectivity

- Used curl -I to verify HTTP headers and server response.
- Observed status code 200 OK indicating server is active.
- Used wget to download web content.

<img width="1366" height="768" alt="Task6" src="https://github.com/user-attachments/assets/d5ce2801-cff5-48aa-b216-08c91339df4b" />


Task 7 : Simulate firewall restrictions (UFW)

- Firewall enabled
- Only ports 80 and 443 allowed
- SSH blocked (port 22)
- SSH restricted

<img width="1366" height="768" alt="Task7" src="https://github.com/user-attachments/assets/69e894e8-852b-4e8f-a853-be9878938ba7" />


Task 8 : Create a Local Domain Using /etc/hosts

This task demonstrates local DNS resolution using the /etc/hosts file. By adding the entry 127.0.0.1 mytest.local, we map a custom domain name to the local machine (localhost).

<img width="1366" height="768" alt="Task8" src="https://github.com/user-attachments/assets/2d4fd85c-5e3d-4769-a7c0-117fd5f78aaf" />

