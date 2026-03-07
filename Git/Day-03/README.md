Task 1: Test all NGINX management commands

- Install NGINX

<img width="789" height="556" alt="01" src="https://github.com/user-attachments/assets/e57dda52-11cd-42dd-9de2-1cf480408ac5" />


<img width="1086" height="715" alt="02" src="https://github.com/user-attachments/assets/872d16c9-3044-41ac-8889-43f31d4a165f" />


- Welcome page at http://localhost

<img width="648" height="264" alt="03" src="https://github.com/user-attachments/assets/dc8c587c-c7ad-4b11-9123-921265ad0797" />

- Running start, stop, restart, relaod, enaable

  <img width="879" height="208" alt="05" src="https://github.com/user-attachments/assets/717883c1-aceb-45d9-a272-7f904b0e3273" />

- Changing nginx.conf

  <img width="1069" height="272" alt="06" src="https://github.com/user-attachments/assets/dc480186-b21d-488a-be58-04277e3a08c4" />


Task 2: Explore the NGINX config hierarchy

<img width="1366" height="768" alt="01" src="https://github.com/user-attachments/assets/92b44d2e-15f5-4505-8ced-957333ac88b9" />

worker_processes: 

Meaning:

Number of worker processes nginx runs

auto = nginx automatically uses the number of CPU cores.

If changed:

Higher value → more parallel processing

Too high → wastes CPU resources


worker_connections

Meaning:

Maximum connections one worker process can handle simultaneously

If increased:

Server can handle more simultaneous users


<img width="904" height="205" alt="02" src="https://github.com/user-attachments/assets/5650e044-4a6e-41d9-b1db-dd0449795f95" />

symbolic links (symlinks) pointing to files in sites-available.

default site is enabled


Task 3 :  Host a multi-page static site

<img width="927" height="390" alt="01" src="https://github.com/user-attachments/assets/5e1f7c06-b9df-4576-965e-e219154df3bf" />


<img width="894" height="293" alt="02" src="https://github.com/user-attachments/assets/178256a6-9e96-4810-ae66-a18a96e9bc84" />




 - Created a website directory at /var/www/mysite.local.
 - Added three web pages: index.html, about.html, and contact.html.
 - Configured an NGINX server block in /etc/nginx/sites-available/mysite.local to serve the website.
 - Enabled the site by creating a symbolic link in /etc/nginx/sites-enabled.
 - Added mysite.local to /etc/hosts to map it to 127.0.0.1.
 - Reloaded NGINX and verified that all pages load correctly using:
 - curl http://mysite.local
 - curl http://mysite.local/about.html
 - curl http://mysite.local/contact.html
 - Tested a non-existent page and confirmed that NGINX correctly returns a 404 Not Found error.




