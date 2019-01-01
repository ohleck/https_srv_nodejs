https_srv_nodejs
simple https server with nodejs

https ---> port 443

--------------------------------
How to generate and use same Cert for validating :

1) Install certbot package
2) Generate certificate for specific domain 
    cmd line :     certbot certonly --manual
              !!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Don't press Y and  proceed challenge,!!!!!!!!!!!!!!!!!!
              create two directories : .well-know   and inside this one, create :    acme-challenge
              like this :    /https_srv_nodejs/.well-known/acme-challenge/    
              
              create in this directory a file  with specific Name and content from challenge request certbot
              !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    Dont press Y then Enter (Open a second terminal)

3) Edit server.js file
    change the location file or adapt according your domain name
4) npm start    or node server.js
5) You can now press Y then enter (on first terminal to proceed challenge)
6) Congratulation !
