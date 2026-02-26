Day -03

Task 1 : Verify Your Systemʼs Network Identity

- Check IP = ip addr (172.30.32.0)
- Check Gateway = ip route
- Ping Gateway = ping -c 4 172.30.32.0
- Ping Public IP = ping -c 4 8.8.8.8
- Ping Domain = ping google.com
- Use dig = dig google.com
- Use traceroute = traceroute google.com

Task 2 : Test Internet Connectivity Flow

- Successfully verified internet connectivity by pinging 8.8.8.8.
- Confirmed DNS resolution by pinging google.com.
- Used traceroute to analyze network path and identify intermediate hops.
- Verified end-to-end connectivity

Task 3 : Analyze DNS in Detail

- After analysing following are the output:
- IP Address: 142.250.70.110
- DNS Server: 172.30.32.1
- Response Time: 12 msec

Task 4 : Host a Simple Website Locally

- Installed ngnix
- tested through localhost
- tested through browser

Task 5 : Check Listening ports

- Verified port 80 was listening.
- Stopped Nginx service.
- Confirmed port 80 disappeared from listening ports.
- Successfully validated web server status

Task 6 : Test application connectivity

- Used curl -I to verify HTTP headers and server response.
- Observed status code 200 OK indicating server is active.
- Used wget to download web content.

Task 7 : Simulate firewall restrictions (UFW)

- Firewall enabled
- Only ports 80 and 443 allowed
- SSH blocked (port 22)
- SSH restricted
