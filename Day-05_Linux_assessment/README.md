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
   - Created the timer file
   - Enabled the timer
   - showed it in systemctl list-timers 














