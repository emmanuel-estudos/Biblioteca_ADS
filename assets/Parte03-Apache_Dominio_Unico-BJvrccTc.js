import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={a:`a`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...e(),...t.components},{Aba:i,Abas:o,Code:s,Comentario:c,Linha:l,Resultado:u,Terminal:d}=r;return i||a(`Aba`,!0),o||a(`Abas`,!0),s||a(`Code`,!0),c||a(`Comentario`,!0),l||a(`Linha`,!0),u||a(`Resultado`,!0),d||a(`Terminal`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`apache-domínio-único`,children:`Apache Domínio Único`}),`
`,(0,n.jsxs)(r.p,{children:[`Nesta etapa o Apache publica uma página em `,(0,n.jsx)(r.a,{href:`https://www.seunome.com.br`,children:`https://www.seunome.com.br`}),`, redireciona HTTP para HTTPS e negocia HTTP/2.`]}),`
`,(0,n.jsx)(r.h2,{id:`parando-nginx-e-preparando-página`,children:`Parando Nginx e Preparando Página`}),`
`,(0,n.jsxs)(d,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Ubuntu 26s`})}),(0,n.jsxs)(s,{children:[(0,n.jsx)(c,{children:`Comentário`}),(0,n.jsx)(l,{texto:`root@atividade1:/#`,children:`nginx -s stop 2>/dev/null || true`}),(0,n.jsx)(l,{texto:`root@atividade1:/#`,children:`apache2ctl stop 2>/dev/null || true`}),(0,n.jsx)(l,{texto:`root@atividade1:/#`,children:`mkdir -p /var/www/apache`}),(0,n.jsx)(l,{texto:`root@atividade1:/#`,children:`echo "<h1>Servidor Apache2 - SEU NOME</h1><p>HTTPS e HTTP/2 funcionando.</p><p>Configurado em: $(date)</p>"> /var/www/apache/index.html`})]})]}),`
`,(0,n.jsx)(r.h2,{id:`criando-certificado-autoassinado-com-san`,children:`Criando Certificado Autoassinado com SAN`}),`
`,(0,n.jsxs)(d,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Ubuntu 26s`})}),(0,n.jsxs)(s,{children:[(0,n.jsx)(c,{children:`Criando diretório onde os certificados serão armazenados`}),(0,n.jsx)(l,{texto:`root@atividade1:/#`,children:`mkdir -p /etc/ssl/seunome`}),(0,n.jsx)(l,{texto:`root@atividade1:/#`,children:`openssl req -x509 -nodes -newkey rsa:2048 -days 365 -keyout /etc/ssl/seunome/apache.key -out /etc/ssl/seunome/apache.crt -subj "/C=BR/ST=Paraiba/L=Cajazeiras/O=IFPB/OU=ADS/CN=www.seunome.com.br" -addext "subjectAltName=DNS:www.seunome.com.br"`}),(0,n.jsx)(l,{texto:`root@atividade1:/#`,children:`chmod 600 /etc/ssl/seunome/apache.key`})]})]}),`
`,(0,n.jsx)(r.h2,{id:`criando-o-virtualhost`,children:`Criando o VirtualHost`}),`
`,(0,n.jsx)(r.p,{children:`Abrindo o arquivo.`}),`
`,(0,n.jsxs)(d,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Ubuntu 26s`})}),(0,n.jsx)(s,{children:(0,n.jsx)(l,{texto:`root@atividade1:/#`,children:`nano /etc/apache2/sites-available/seunome.conf`})})]}),`
`,(0,n.jsx)(r.p,{children:`Use a configuração abaixo:`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-html`,children:`<VirtualHost *:80>\r
    ServerName www.seunome.com.br\r
    Redirect permanent / https://www.seunome.com.br/\r
</VirtualHost>\r
\r
<VirtualHost *:443>\r
    ServerName www.seunome.com.br\r
    DocumentRoot /var/www/apache\r
\r
    Protocols h2 http/1.1\r
\r
    SSLEngine on\r
    SSLCertificateFile /etc/ssl/seunome/apache.crt\r
    SSLCertificateKeyFile /etc/ssl/seunome/apache.key\r
\r
    <Directory /var/www/apache>\r
        Require all granted\r
    </Directory>\r
\r
    ErrorLog \${APACHE_LOG_DIR}/seunome-erro.log\r
    CustomLog \${APACHE_LOG_DIR}/seunome-access.log combined\r
</VirtualHost>
`})}),`
`,(0,n.jsx)(r.h2,{id:`ativando-módulos-e-site`,children:`Ativando Módulos e Site`}),`
`,(0,n.jsx)(r.h3,{id:`ativando`,children:`Ativando`}),`
`,(0,n.jsxs)(d,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Ubuntu 26s`})}),(0,n.jsxs)(s,{children:[(0,n.jsx)(l,{texto:``,children:`a2enmod ssl http2`}),(0,n.jsx)(l,{texto:``,children:`a2dissite 000-default.conf`}),(0,n.jsx)(l,{texto:``,children:`a2ensite seunome.conf`})]})]}),`
`,(0,n.jsx)(r.h3,{id:`removendo-aviso-global`,children:`Removendo Aviso Global`}),`
`,(0,n.jsxs)(d,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Ubuntu 26s`})}),(0,n.jsxs)(s,{children:[(0,n.jsxs)(l,{texto:``,children:[`echo "ServerName `,(0,n.jsx)(r.a,{href:`http://www.seunome.com.br`,children:`www.seunome.com.br`}),`" > /etc/apache2/conf-available/servername.conf`]}),(0,n.jsx)(l,{texto:``,children:`a2enconf servername`}),(0,n.jsx)(l,{texto:``,children:`apache2ctl configtest`}),(0,n.jsx)(l,{texto:``,children:`apache2ctl restart`}),(0,n.jsx)(u,{children:`O teste deve mostrar Syntax OK.`})]})]}),`
`,(0,n.jsx)(r.p,{children:`Se houver erro, corrija antes do restart.`}),`
`,(0,n.jsx)(r.h2,{id:`validando-portas-https2-e-certificado`,children:`Validando Portas, HTTPS/2 e Certificado`}),`
`,(0,n.jsxs)(d,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Ubuntu 26s`})}),(0,n.jsxs)(s,{children:[(0,n.jsx)(l,{texto:``,children:`ss -lntp | grep -E ':(80|443)'`}),(0,n.jsx)(l,{texto:``,children:`apache2ctl -M | grep http2`}),(0,n.jsxs)(l,{texto:``,children:[`curl -k -I --http2 --resolve `,(0,n.jsx)(r.a,{href:`http://www.seunome.com.br:443:127.0.0.1`,children:`www.seunome.com.br:443:127.0.0.1`}),` `,(0,n.jsx)(r.a,{href:`https://www.seunome.com.br/`,children:`https://www.seunome.com.br/`})]})]})]}),`
`,(0,n.jsx)(r.p,{children:`A primeira linha deve ser HTTP/2 200 e o cabeçalho Server deve indicar Apache.`}),`
`,(0,n.jsxs)(d,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Ubuntu 26s`})}),(0,n.jsxs)(s,{children:[(0,n.jsx)(c,{children:`Comentário`}),(0,n.jsx)(l,{texto:``,children:`openssl s_client -connect 127.0.0.1:443 -servername www.seunome.com.br -alpn h2 </dev/null 2>/dev/null | grep -aE "ALPN protocol|subject=|issuer="`}),(0,n.jsx)(u,{children:`Deve mostrar ALPN protocol: h2`})]})]}),`
`,(0,n.jsx)(r.h2,{id:`print`,children:`Print`}),`
`,(0,n.jsx)(r.p,{children:`As evidências necessárias para mostrar que essa parte da atividade foi bem sucedida são:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Página aberta no Chrome com a URL completa.`}),`
`,(0,n.jsx)(r.li,{children:`Certificado na aba Geral.`}),`
`,(0,n.jsx)(r.li,{children:`Campo Nome alternativo do requerente mostrando o SAN.`}),`
`,(0,n.jsx)(r.li,{children:`Terminal mostrando HTTP/2 200 ou ALPN protocol: h2.`}),`
`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};