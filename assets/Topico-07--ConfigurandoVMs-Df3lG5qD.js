import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...e(),...t.components},{Aba:i,Abas:o,Comentario:s,Prompt:c,Resultado:l,Terminal:u}=r;return i||a(`Aba`,!0),o||a(`Abas`,!0),s||a(`Comentario`,!0),c||a(`Prompt`,!0),l||a(`Resultado`,!0),u||a(`Terminal`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`configurando-nginx`,children:`Configurando Nginx`}),`
`,(0,n.jsx)(r.h2,{id:`baixando-dependências`,children:`Baixando Dependências`}),`
`,(0,n.jsxs)(r.p,{children:[`Vá para o site do Ubuntu e baixe a versão `,(0,n.jsx)(r.a,{href:`https://releases.ubuntu.com/resolute/`,children:`server install image`}),`.`]}),`
`,(0,n.jsx)(r.h2,{id:`configurando-virtualbox`,children:`Configurando VirtualBox`}),`
`,(0,n.jsxs)(r.p,{children:[`Dentro do aplicativo VitualBox, clique em `,(0,n.jsx)(r.strong,{children:`Novo`}),` para a importação da imagem.`]}),`
`,(0,n.jsx)(r.h3,{id:`página-virtual-machine-name-and-operating-system`,children:`Página "Virtual machine name and operating system"`}),`
`,(0,n.jsxs)(r.p,{children:[`Dê um nome para a VM no campo `,(0,n.jsx)(r.code,{children:`VM Name`}),` e importe a imagem baixada no campo `,(0,n.jsx)(r.code,{children:`ISO Image`}),` e em `,(0,n.jsx)(r.strong,{children:`Outro...`}),`. Em seguida, clique em `,(0,n.jsx)(r.code,{children:`Próximo (N)`}),`.`]}),`
`,(0,n.jsx)(r.h3,{id:`página-set-up-unattended-guest-os-installation`,children:`Página "Set up unattended guest OS installation"`}),`
`,(0,n.jsxs)(r.p,{children:[`Dentro do campo `,(0,n.jsx)(r.code,{children:`User Name and Password`}),`, escolha um nome e uma senha para a Máquina Virtual. Exemplo:`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`User Name: ads`}),`
`,(0,n.jsx)(r.li,{children:`Password: 654123`}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`Depois de escolher o Nome e a Senha, pode apertar em `,(0,n.jsx)(r.code,{children:`Próximo (N)`}),`.`]}),`
`,(0,n.jsx)(r.h3,{id:`página-specify-virtual-hardware`,children:`Página "Specify virtual hardware"`}),`
`,(0,n.jsx)(r.p,{children:`Nessa página, você irá configurar as especificidades do hardware da Máquina Virtual.`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Base Memory: 4096MB`}),`
`,(0,n.jsx)(r.li,{children:`Numbers of CPUs: 2`}),`
`,(0,n.jsx)(r.li,{children:`Disk Size: 25,00 GB`}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`Depois de configurar, pode apertar em `,(0,n.jsx)(r.code,{children:`Próximo (N)`}),`.`]}),`
`,(0,n.jsx)(r.h3,{id:`página-sumário`,children:`Página "Sumário"`}),`
`,(0,n.jsxs)(r.p,{children:[`Nessa página, será informado um sumário geral das informações da Máquina Virtual para serem conferidas. Pode apertar em `,(0,n.jsx)(r.code,{children:`Próximo (N)`}),`.`]}),`
`,(0,n.jsxs)(r.p,{children:[`O VirtualBox irá abrir automaticamente a VM configurada, abrindo uma aba com o título com a estrutura de "`,(0,n.jsx)(r.em,{children:`UserName [Executando] - Oracle VirtualBox`}),`" e instalando automaticamente o Ubuntu.`]}),`
`,(0,n.jsxs)(r.p,{children:[`OBS: cuidado para não dar `,(0,n.jsx)(r.strong,{children:`Alt + Tab`}),` dentro da VM durante a instalação.`]}),`
`,(0,n.jsx)(r.h2,{id:`dentro-da-vm`,children:`Dentro da VM`}),`
`,(0,n.jsx)(r.p,{children:`Quando a instalação estiver concluída, aparecerá uma tela com a versão do Ubuntu que foi baixada e irá pedir o login informado na configuração.`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Nome: ads`}),`
`,(0,n.jsx)(r.li,{children:`Senha: 654123`}),`
`]}),`
`,(0,n.jsx)(r.h3,{id:`instalações-de-dependências-internas`,children:`Instalações de Dependências Internas`}),`
`,(0,n.jsx)(r.p,{children:`Se transforme o Super Usuário use os comandos a seguir.`}),`
`,(0,n.jsxs)(u,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Terminal`})}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(s,{children:`// Transformação em SuperUsuário`}),`\r
`,(0,n.jsx)(c,{children:``}),` sudo su\r
`,(0,n.jsx)(c,{children:``}),` ads\r
`,(0,n.jsx)(c,{children:``}),` 654123`]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(s,{children:`// Chegando o estado de atualização do sistema para garantir compatibilidade e segurança`}),`\r
`,(0,n.jsx)(c,{children:``}),` apt list --upgradeable`]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(s,{children:`// Instalando o Docker na VM`}),`\r
`,(0,n.jsx)(c,{children:``}),` apt install docker.io`]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(s,{children:`// Baixando a imagem oficial do Ubuntu do Docker`}),`\r
`,(0,n.jsx)(c,{children:``}),` docker pull ubuntu`]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(s,{children:`// Listando os Containers da VM`}),`\r
`,(0,n.jsx)(c,{children:``}),` docker ps -a`]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(s,{children:`// Criando e Ligando um container`}),`\r
`,(0,n.jsx)(c,{children:``}),` docker run -it ubuntu`]}),(0,n.jsx)(s,{children:`// O ID do Container serão os 2 primeiros caracteres `}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(s,{children:`// Saindo do Container`}),`\r
`,(0,n.jsx)(c,{children:``}),` exit`]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(s,{children:`// Ligando o Docker para rodar em segundo plano`}),`\r
`,(0,n.jsx)(c,{children:``}),` docker start 'ID'; docker attach 'ID'`]}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(s,{children:`// Configuração de Serviços Internos`}),`\r
`,(0,n.jsx)(c,{children:``}),` apt update `,(0,n.jsx)(s,{children:`// Atualizando a lista de comando`}),`\r
`,(0,n.jsx)(c,{children:``}),` apt install apache2 `,(0,n.jsx)(s,{children:`// Instalando o apache2`})]})]}),`
`,(0,n.jsx)(r.p,{children:`'apt list --upgradeable'. Baixe o docker usando 'apt install docker.io' e 'docker pull ubuntu' 'docker ps -a' 'docker run -it ubuntu' 'o ID no Docker são os 2 primeiros caracteres' 'exit' 'docker start 'ID'' 'docker attach 'ID''. instalando attach2: 'apt update' e 'apt install apache2'`}),`
`,(0,n.jsx)(r.p,{children:`awdawda`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`hljs language-bash`,children:`npm install
`})}),`
`,(0,n.jsx)(r.h1,{id:`mover-certificados-digitais-para-uma-pasta`,children:`Mover Certificados Digitais para uma pasta`}),`
`,(0,n.jsx)(r.p,{children:`Esses certificados podem ser usados para a atividade 01, sem a necessidade de recriá-los. Para fazer isso, siga o passo a passo abaixo:`}),`
`,(0,n.jsxs)(u,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Docker`})}),(0,n.jsxs)(r.p,{children:[(0,n.jsx)(s,{children:`// criando a pasta`}),`\r
`,(0,n.jsx)(c,{children:`root@24c166e57434:/var/www/html#`}),` mkdir atv1\r
`,(0,n.jsx)(s,{children:`// movendo todos os arquivos relacionados ao usuário para a pasta`}),`\r
`,(0,n.jsx)(c,{children:`root@24c166e57434:/var/www/html#`}),` mv djr.* atv1\r
`,(0,n.jsx)(s,{children:`// verificando os arquivos existentes`}),`\r
`,(0,n.jsx)(c,{children:`root@24c166e57434:/var/www/html#`}),` ls\r
`,(0,n.jsx)(s,{children:`// resultado esperado`}),`\r
`,(0,n.jsx)(l,{children:`atv1 daladierjr.key daladierjr.pem index.html index.nginx-debian.html`})]})]}),`
`,(0,n.jsx)(r.p,{children:`(root@24c166e57434:/var/www/html#) openssl req -x509 -nodes -days 365 -newkey rsa:2048 -extensions v3_ca -config /etc/ssl/openssl.cnf -keyout djr.kay -out djr.pem`}),`
`,(0,n.jsx)(r.p,{children:`// escolha as opções para a criação do nome do domínio`}),`
`,(0,n.jsx)(r.p,{children:`// nos arquivos a seguir, tire os parâmetros das linhas que iniciam com ""`}),`
`,(0,n.jsxs)(r.p,{children:[`(root@24c166e57434:/var/www/html#) pico /etc/nginx/sites-enabled/`,(0,n.jsx)(r.a,{href:`http://www.djr.com`,children:`www.djr.com`}),` '`,(0,n.jsx)(r.a,{href:`http://www.djr.com.br`,children:`www.djr.com.br`}),`'`,` '`,(0,n.jsx)(r.a,{href:`http://www.djr.net`,children:`www.djr.net`}),`'`,` '`,(0,n.jsx)(r.a,{href:`http://www.djr.br`,children:`www.djr.br`}),`'`]})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};