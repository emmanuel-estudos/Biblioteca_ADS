import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...e(),...t.components},{Aba:i,Abas:o,Code:s,Comentario:c,Linha:l,Terminal:u}=r;return i||a(`Aba`,!0),o||a(`Abas`,!0),s||a(`Code`,!0),c||a(`Comentario`,!0),l||a(`Linha`,!0),u||a(`Terminal`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`nginx-domínio-único`,children:`Nginx Domínio Único`}),`
`,(0,n.jsx)(r.p,{children:`Agora o mesmo domínio será servido pelo Nginx.`}),`
`,(0,n.jsx)(r.p,{children:`O Apache precisa ser parado antes de iniciar o Nginx.`}),`
`,(0,n.jsx)(r.h2,{id:`trocando-o-servidor-ativando`,children:`Trocando o Servidor Ativando`}),`
`,(0,n.jsxs)(u,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Ubuntu 26s`})}),(0,n.jsxs)(s,{children:[(0,n.jsx)(c,{children:`Parando o Apache`}),(0,n.jsx)(l,{texto:``,children:`apache2ctl stop`}),(0,n.jsx)(c,{children:`Criando a pasta 'nginx'`}),(0,n.jsx)(l,{texto:``,children:`mkdir -p /var/www/nginx`}),(0,n.jsx)(l,{texto:``,children:`echo "<h1>Servidor Nginx - SEU NOME</h1><p>HTTPS e HTTP/2 funcionando no Nginx.</p><p>Configurado em: $(date)</p>" > /var/www/nginx/index.html`})]})]}),`
`,(0,n.jsx)(r.h2,{id:`gerando-certificado-nginx`,children:`Gerando Certificado Nginx`}),`
`,(0,n.jsxs)(u,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Ubuntu 26s`})}),(0,n.jsx)(s,{children:(0,n.jsx)(l,{texto:``,children:`openssl req -x509 -nodes -newkey rsa:2048 -days 365 -keyout /etc/ssl/seunome/nginx.key -out /etc/ssl/seunome/nginx.crt -subj "/C=BR/ST=Paraiba/L=Cajazeiras/O=IFPB/OU=ADS/CN=www.seunome.com.br" -addext "subjectAltName=DNS:www.seunome.com.br" chmod 600 /etc/ssl/seunome/nginx.key`})})]}),`
`,(0,n.jsx)(r.h2,{id:`criando-configurações-para-o-nginx`,children:`Criando Configurações para o Nginx`}),`
`,(0,n.jsx)(r.p,{children:`Abrindo arquivo.`}),`
`,(0,n.jsxs)(u,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Ubuntu 26s`})}),(0,n.jsx)(s,{children:(0,n.jsx)(l,{texto:``,children:`nano /etc/nginx/sites-available/seunome`})})]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-html`,children:`server {\r
    listen 80;\r
    listen [::]:80;\r
    server_name www.seunome.com.br;\r
    return 301 https://www.seunome.com.br$request_uri;\r
}\r
\r
server {\r
    listen 443 ssl http2;\r
    listen [::]:443 ssl http2;\r
    server_name www.seunome.com.br;\r
\r
    root /var/www/nginx;\r
    index index.html;\r
\r
    ssl_certificate /etc/ssl/seunome/nginx.crt;\r
    ssl_certificate_key /etc/ssl/seunome/nginx.key;\r
\r
    location / {\r
        try_files $uri $uri/ =404;\r
    }\r
\r
    access_log /var/log/nginx/seunome-access.log;\r
    error_log /var/log/nginx/seunome-error.log;\r
}
`})}),`
`,(0,n.jsx)(r.h2,{id:`ativando-e-testando`,children:`Ativando e Testando`}),`
`,(0,n.jsxs)(u,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Ubuntu 26s`})}),(0,n.jsxs)(s,{children:[(0,n.jsx)(c,{children:`Comentário`}),(0,n.jsx)(l,{texto:``,children:`rm -f /etc/nginx/sites-enabled/default`}),(0,n.jsx)(l,{texto:``,children:`ln -sfn /etc/nginx/sites-available/seunome /etc/nginx/sites-enabled/seunome`}),(0,n.jsx)(l,{texto:``,children:`nginx -t`}),(0,n.jsx)(l,{texto:``,children:`nginx`}),(0,n.jsx)(l,{texto:``,children:`ss -lntp | grep -E ':(80|443)'`}),(0,n.jsxs)(l,{texto:``,children:[`curl -k -I --http2 --resolve `,(0,n.jsx)(r.a,{href:`http://www.seunome.com.br:443:127.0.0.1`,children:`www.seunome.com.br:443:127.0.0.1`}),` `,(0,n.jsx)(r.a,{href:`https://www.seunome.com.br/`,children:`https://www.seunome.com.br/`})]}),(0,n.jsx)(l,{texto:``,children:`openssl s_client -connect 127.0.0.1:443 -servername www.seunome.com.br -alpn h2 </dev/null 2>/dev/null | grep -aE "ALPN protocol|subject=|issuer="`})]})]}),`
`,(0,n.jsx)(r.h2,{id:`print`,children:`Print`}),`
`,(0,n.jsx)(r.p,{children:`Mostre HTTP/2 200, Server: nginx e ALPN protocol: h2.\r
Depois abra o site e os detalhes do certificado no navegador.`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};