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



Task 4 : Reverse proxy and docker

<img width="1206" height="227" alt="01" src="https://github.com/user-attachments/assets/28351c43-7688-4561-b55c-dfdd426cf722" />


Run twodocker containers : nginx:alpine on port 8081 and traefik/whoami on port 8082



<img width="772" height="632" alt="02" src="https://github.com/user-attachments/assets/5e3952e9-9d8a-4873-a3d8-6e056256dc73" />



<img width="685" height="709" alt="03" src="https://github.com/user-attachments/assets/893417d0-c4ca-4fb7-9f8f-efaec126be07" />





- Two Docker containers running
- Reverse proxy configured
- Two location blocks working
- X-Real-IP header confirmed >> 127.0.0.1




Task 5: Multiple sites

<img width="850" height="595" alt="01" src="https://github.com/user-attachments/assets/c480dbbd-74ae-4c05-a213-29cd8acf91b2" />


<img width="635" height="306" alt="02" src="https://github.com/user-attachments/assets/f9ea216f-a433-40db-92e2-32d4c1f5597e" />


<img width="875" height="233" alt="03" src="https://github.com/user-attachments/assets/a59b38c2-dbf1-4633-9a6d-6a1e079e0cc5" />



- Created two virtual host websites app1.local and app2.local in NGINX by setting up separate directories under /var/www
- added unique HTML pages for each site.
- Configured server blocks in /etc/nginx/sites-available and enabled them using symbolic links in /etc/nginx/sites-enabled.
- Added domain entries for both sites in /etc/hosts and verified they were accessible through the browser.
- Then disabled app2.local by removing its symlink and confirmed that app1.local still worked while app2.local returned an error.
- Finally, re-enabled app2.local and reloaded NGINX to restore access to both sites.


Task 6 : Troubleshooting

<img width="1363" height="421" alt="Screenshot (653)" src="https://github.com/user-attachments/assets/c49b2c50-45b8-4b9b-a76d-152a3c72921a" />


<img width="1900" height="240" alt="Screenshot (655)" src="https://github.com/user-attachments/assets/9c67aaf8-e443-4f63-9a2e-4707f6cc0fa5" />








