1. Permissions & umask (Practical):

   - Created file = touch test.txt
   - check permission = ls -l test.txt
   - default permission for test.txt = 666 (rw-rw-rw)
   - umask value = 0022
   - final permission for file test.txt = (666 - 022) = 644 (rw-r--r--)
     i.e owner > read and write, group > read only , other > read only    
   
