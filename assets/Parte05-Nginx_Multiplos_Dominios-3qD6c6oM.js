import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,...e(),...t.components},{Aba:i,Abas:o,Code:s,Linha:c,Terminal:l}=r;return i||a(`Aba`,!0),o||a(`Abas`,!0),s||a(`Code`,!0),c||a(`Linha`,!0),l||a(`Terminal`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`nginx-múltiplos-domínios`,children:`Nginx Múltiplos Domínios`}),`
`,(0,n.jsxs)(r.p,{children:[`Nesta etapa o mesmo Nginx atenderá dois nomes diferentes por `,(0,n.jsx)(r.strong,{children:`SNI`}),`: `,(0,n.jsx)(r.code,{children:`site1.seunome.com.br`}),` e `,(0,n.jsx)(r.code,{children:`site2.seunome.com.br`}),`.\r
Cada domínio terá página e certificado exclusivos.`]}),`
`,(0,n.jsx)(r.h2,{id:`criando-páginas`,children:`Criando Páginas`}),`
`,(0,n.jsxs)(l,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Ubuntu 26s`})}),(0,n.jsxs)(s,{children:[(0,n.jsx)(c,{texto:``,children:`mkdir -p /var/www/site1 /var/www/site2`}),(0,n.jsx)(c,{texto:``,children:`echo "<h1>Site 1 - Nginx</h1><p>Dominio: site1.seunome.com.br</p><p>Certificado exclusivo do Site 1</p><p>Data: $(date)</p>" > /var/www/site1/index.html`}),(0,n.jsx)(c,{texto:``,children:`echo "<h1>Site 2 - Nginx</h1><p>Dominio: site2.seunome.com.br</p><p>Certificado exclusivo do Site 2</p><p>Data: $(date)</p>" > /var/www/site2/index.html`})]})]}),`
`,(0,n.jsx)(r.h2,{id:`gerando-certificados-separados`,children:`Gerando Certificados Separados`}),`
`,(0,n.jsxs)(l,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Ubuntu 26s`})}),(0,n.jsxs)(s,{children:[(0,n.jsx)(c,{texto:``,children:`openssl req -x509 -nodes -newkey rsa:2048 -days 365 -keyout /etc/ssl/seunome/site1.key -out /etc/ssl/seunome/site1.crt -subj "/C=BR/ST=Paraiba/L=Cajazeiras/O=IFPB/OU=ADS/CN=site1.seunome.com.br" -addext "subjectAltName=DNS:site1.seunome.com.br"`}),(0,n.jsx)(c,{texto:``,children:`openssl req -x509 -nodes -newkey rsa:2048 -days 365 -keyout /etc/ssl/seunome/site2.key -out /etc/ssl/seunome/site2.crt -subj "/C=BR/ST=Paraiba/L=Cajazeiras/O=IFPB/OU=ADS/CN=site2.seunome.com.br" -addext "subjectAltName=DNS:site2.seunome.com.br" chmod 600 /etc/ssl/seunome/site1.key /etc/ssl/seunome/site2.key`})]})]}),`
`,(0,n.jsx)(r.h2,{id:`criando-o-arquivo-múltiplos`,children:`Criando o Arquivo Múltiplos`}),`
`,(0,n.jsxs)(l,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Ubuntu 26s`})}),(0,n.jsx)(s,{children:(0,n.jsx)(c,{texto:``,children:`nano /etc/nginx/sites-available/multiplos`})})]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`hljs language-html`,children:`server {\r
    listen 80;\r
    listen [::]:80;\r
    server_name site1.seunome.com.br;\r
    return 301 https://site1.seunome.com.br$request_uri;\r
}\r
server {\r
    listen 80;\r
    listen [::]:80;\r
    server_name site2.seunome.com.br;\r
    return 301 https://site2.seunome.com.br$request_uri;\r
}\r
server {\r
    listen 443 ssl http2;\r
    listen [::]:443 ssl http2;\r
    server_name site1.seunome.com.br;\r
\r
    root /var/www/site1;\r
    index index.html;\r
    ssl_certificate /etc/ssl/seunome/site1.crt;\r
    ssl_certificate_key /etc/ssl/seunome/site1.key;\r
\r
    location / { try_files $uri $uri/ =404; }\r
}\r
server {\r
    listen 443 ssl http2;\r
    listen [::]:443 ssl http2;\r
    server_name site2.seunome.com.br;\r
\r
    root /var/www/site2;\r
    index index.html;\r
    ssl_certificate /etc/ssl/seunome/site2.crt;\r
    ssl_certificate_key /etc/ssl/seunome/site2.key;\r
\r
    location / { try_files $uri $uri/ =404; }\r
}
`})}),`
`,(0,n.jsx)(r.h2,{id:`ativando---validando---testando`,children:`Ativando - Validando - Testando`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};