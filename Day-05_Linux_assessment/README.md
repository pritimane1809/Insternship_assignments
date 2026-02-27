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
  
   - tested passwordless login to localhost
   
   
