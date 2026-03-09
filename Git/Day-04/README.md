Day 04

Task 1 : Inspect a live TLS cerificate

<img width="806" height="479" alt="01" src="https://github.com/user-attachments/assets/7c5dc1ad-997a-491f-b9fa-42c9d90de4a6" />


Website inspected: https://example.com

- Issuer (CA): C=US
- Subject (Domain): example.com
- Expiry Date: May 14 18:57:50 2026
- TLS Version: TLS 1.3
- Public Key Algorithm: RSA
- Key Size: 256 bit


Task 2: Simulate Certbot on a local domain with a self-signed cert

<img width="1920" height="596" alt="Task2-1" src="https://github.com/user-attachments/assets/7b888070-1d3a-465b-ae1f-c3455ee9e370" />

<img width="828" height="157" alt="Task2-2" src="https://github.com/user-attachments/assets/b27c0c3a-a84f-4966-9d98-74c21b8153bf" />


- Generated a self-signed SSL certificate for myapp.local using OpenSSL.
- Certificate and key were stored in:
/etc/ssl/certs/myapp.crt
/etc/ssl/private/myapp.key
- Added 127.0.0.1 myapp.local to /etc/hosts to map the local domain to the machine.
- Created an Nginx server block to enable HTTPS on port 443 using the generated certificate.
- Tested the configuration using sudo nginx -t and reloaded Nginx.




