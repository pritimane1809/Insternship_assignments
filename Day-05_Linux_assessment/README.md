1. Permissions & umask (Practical):

   - Created file = touch test.txt
   - check permission = ls -l test.txt
   - default permission for test.txt = 666 (rw-rw-rw)
   - umask value = 0022
   - final permission for file test.txt = (666 - 022) = 644 (rw-r--r--)
     i.e owner > read and write, group > read only , other > read only

     <img width="415" height="136" alt="Que-1" src="https://github.com/user-attachments/assets/0873a9f4-566b-4862-9d7a-4966c80aefea" />


2. Users (Practical):
   - created user named intern1 with /bin/bash as default shell
     

   <img width="508" height="122" alt="Que-2" src="https://github.com/user-attachments/assets/02b22ac4-85f0-4347-860e-073200f2d99d" />


3. SSH (Practical):
   - Generate an SSH keypair
     
      This creates:

     Private key → /home/acer/.ssh/id_ed25519

     Public key → /home/acer/.ssh/id_ed25519.pub

   - Added public key to authorized_keys

     <img width="885" height="507" alt="Que-3-3 1" src="https://github.com/user-attachments/assets/301f65e3-bc39-4505-a8ff-5b9a45879d80" />

  
   - tested passwordless login to localhost

     <img width="690" height="305" alt="Que-3-3 2" src="https://github.com/user-attachments/assets/68a57c2d-6ab3-42d4-b81e-eabdb059f2d7" />



4. Package management (Practical):

   - Installed htop using 'sudo apt install htop'

<img width="930" height="524" alt="Que-4-4 1" src="https://github.com/user-attachments/assets/237a0f09-ff96-4ea1-b2cc-96c6c8bf567a" />


   - The file /bin/bash is provided by the package bash.

<img width="1359" height="221" alt="Que-4-4 2" src="https://github.com/user-attachments/assets/8294f86c-3931-49b1-bfae-83aa858a921a" />


5. Cron (Practical):

- Created cron job that runs /usr/bin/date every minute
- Output appended to /tmp/cron_test.log


<img width="412" height="199" alt="Que-5" src="https://github.com/user-attachments/assets/58a9632b-fc1a-4990-b872-cc5ce47b942f" />


6. Systemd timer (Practical):

   - Created the service file

<img width="630" height="175" alt="Que-6-6 1" src="https://github.com/user-attachments/assets/fb2a9b3c-e487-4e2a-a939-726f7ad035a5" />

   - Created the timer file

<img width="417" height="190" alt="Que-6-6 2" src="https://github.com/user-attachments/assets/bb9a426d-b6cf-4af7-9a72-eb2757b24d9e" />

   - Enabled the timer
   - showed it in systemctl list-timers 

<img width="1119" height="343" alt="Que-6-6 3" src="https://github.com/user-attachments/assets/dc0212e2-236c-4827-b689-1b6dd5bcc841" />


7. Network (Practical):

   - Pinged Google DNS

<img width="533" height="191" alt="Que-7-7 1" src="https://github.com/user-attachments/assets/2da9e9b4-1a13-4b42-88be-d2ffcd2a8b94" />

   - Traceroute to example.com

<img width="1074" height="240" alt="Que-7-7 2" src="https://github.com/user-attachments/assets/cb81577f-f056-4a47-a5ce-62e6ae01fd67" />

   - showing listening tcp processes

<img width="1318" height="238" alt="Que-7-7 3" src="https://github.com/user-attachments/assets/1d657961-d862-461d-8eda-a0cecd293c04" />


   - checked if port 80 is open locally

<img width="1366" height="116" alt="Que-7-7 4" src="https://github.com/user-attachments/assets/c39669ee-eaa0-4c6f-945f-e9ee72f425c8" />

   - Showed HTTP headers & DNS A record

<img width="517" height="323" alt="Que-7-7 6" src="https://github.com/user-attachments/assets/e81d073f-01c6-4508-8a2e-60c5d477b0ca" />


8. Monitoring (Practical):
   - Checked overall disk usage and checked the size of /var/log directory

<img width="744" height="443" alt="Que-8-8 1" src="https://github.com/user-attachments/assets/09899175-87f6-4ec9-908c-a1edd609e428" />

   - showed top 3 processes by memory
            ps aux → shows all running processes
           --sort=-%mem → sorts by memory usage (highest first)
           head -4 → shows header + top 3 processes

   <img width="1341" height="140" alt="Que-8-8 2" src="https://github.com/user-attachments/assets/cd2b9e53-2e51-4355-8622-f650447727fa" />


- Showed the last 20 lines of the systemd journal and the last 20 lines of /var/log/syslog

<img width="1366" height="717" alt="Que-8-8 3" src="https://github.com/user-attachments/assets/b368aca0-0cc4-48c9-b7d5-3649bc493254" />


9. Logs (Practical):

    - Showed the last 20 lines of system logs using journalctl
    - If a web server is installed, logs are usually stored under /var/log/. For Apache deafault log location is /var/log/apache2/ and for Nginx the deafault log location is /var/log/nginx/

























