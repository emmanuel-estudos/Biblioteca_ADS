import{n as e,r as t}from"./lib-CrvGBhFj.js";var n=t();function r(t){let r={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,strong:`strong`,...e(),...t.components},{Aba:i,Abas:o,Code:s,Comentario:c,Linha:l,Terminal:u}=r;return i||a(`Aba`,!0),o||a(`Abas`,!0),s||a(`Code`,!0),c||a(`Comentario`,!0),l||a(`Linha`,!0),u||a(`Terminal`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:`configurações-iniciais`,children:`Configurações Iniciais`}),`
`,(0,n.jsx)(r.h2,{id:`virtualbox`,children:`VirtualBox`}),`
`,(0,n.jsx)(r.p,{children:`Importe a ISO da Server Image Ubuntu 26.`}),`
`,(0,n.jsx)(r.p,{children:`Nas configurações de rede, coloque o primeiro adaptador como NAT e o segundo como Host-Only.`}),`
`,(0,n.jsx)(r.p,{children:`Inicie a Ubuntu26s.`}),`
`,(0,n.jsx)(r.h2,{id:`verificando-enp0s8`,children:`Verificando 'enp0s8'`}),`
`,(0,n.jsxs)(r.p,{children:[`Se transforme em `,(0,n.jsx)(r.em,{children:`SuperUsuário`}),` para evitar problemas futuros com permissões.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Verifique a existência do IP referente ao `,(0,n.jsx)(r.strong,{children:`enp0s8`}),` usando o comando abaixo.`]}),`
`,(0,n.jsxs)(u,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Ubuntu26s`})}),(0,n.jsxs)(s,{children:[(0,n.jsx)(c,{children:`Comentário`}),(0,n.jsx)(l,{texto:`root@ubuntu26s:/home/ads#`,children:`ip -br a`})]})]}),`
`,(0,n.jsx)(r.h2,{id:`ip-enp0s8-com-status-down`,children:`IP 'enp0s8' com status 'down'`}),`
`,(0,n.jsxs)(r.p,{children:[`Se o estado referente ao `,(0,n.jsx)(r.strong,{children:`enp0s8`}),` estiver como `,(0,n.jsx)(r.code,{children:`down`}),`, rode o comando abaixo para mudar seu estado para `,(0,n.jsx)(r.code,{children:`up`}),`.`]}),`
`,(0,n.jsxs)(u,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Ubuntu26s`})}),(0,n.jsxs)(s,{children:[(0,n.jsx)(c,{children:`Comentário`}),(0,n.jsx)(l,{texto:`root@ubuntu26s:/home/ads#`,children:`ip link set enp0s8 upo`})]})]}),`
`,(0,n.jsx)(r.h2,{id:`criando-container-para-a-atividade`,children:`Criando Container para a Atividade`}),`
`,(0,n.jsxs)(r.p,{children:[`Baixe o `,(0,n.jsx)(r.strong,{children:`Docker`}),` caso não tenha instalado.`]}),`
`,(0,n.jsxs)(u,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Ubuntu26s`})}),(0,n.jsx)(s,{children:(0,n.jsx)(l,{texto:`root@ubuntu26s:/home/ads#`,children:`apt install docker.io`})})]}),`
`,(0,n.jsxs)(r.p,{children:[`Com o `,(0,n.jsx)(r.strong,{children:`Docker`}),` ja instalado, rode o comando abaixo.`]}),`
`,(0,n.jsxs)(u,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Ubuntu26s`})}),(0,n.jsxs)(s,{children:[(0,n.jsx)(l,{texto:`root@ubuntu26s:/home/ads#`,children:`docker run -dit --name atividade1 -p 80:80 -p 443:443 ubuntu bash`}),(0,n.jsx)(l,{texto:`root@ubuntu26s:/home/ads#`,children:`docker exec -it atividade1 bash`}),(0,n.jsx)(l,{texto:`root@[código_container]:/#`,children:`=== Esse é o prompt esperado`})]})]}),`
`,(0,n.jsx)(r.h2,{id:`instalando-ferramentas`,children:`Instalando Ferramentas`}),`
`,(0,n.jsx)(r.p,{children:`Estando dentro do container, rode os comandos a seguir:`}),`
`,(0,n.jsxs)(u,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Ubuntu26s`})}),(0,n.jsxs)(s,{children:[(0,n.jsx)(l,{texto:`root@[código_container]:/#`,children:`apt update`}),(0,n.jsx)(l,{texto:`root@[código_container]:/#`,children:`apt install -y apache2 nginx openssl curl iproute2 nano`})]})]}),`
`,(0,n.jsx)(r.h2,{id:`dns-local-no-windows`,children:`DNS Local no Windows`}),`
`,(0,n.jsxs)(r.p,{children:[`Abra o `,(0,n.jsx)(r.strong,{children:`Bloco de Notas`}),` como `,(0,n.jsx)(r.code,{children:`administrador`}),` e siga o caminho de `,(0,n.jsx)(r.em,{children:`Arquivo`}),` --> `,(0,n.jsx)(r.em,{children:`Abrir o`}),` --> [cole o caminho 'C:\\Windows\\System32\\drivers\\etc\\' no caminho do arquivo] --> Enter.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Abra o arquivo `,(0,n.jsx)(r.strong,{children:`host`}),` dentro da pasta `,(0,n.jsx)(r.code,{children:`etc`}),` e adicione as linhas a seguir.`]}),`
`,(0,n.jsxs)(u,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Bloco de Notas`})}),(0,n.jsxs)(s,{children:[(0,n.jsxs)(l,{texto:``,children:[`(IP_enp0s8) `,(0,n.jsx)(r.a,{href:`http://www.seu_nome.com.br`,children:`www.seu_nome.com.br`})]}),(0,n.jsx)(l,{texto:``,children:`(IP_enp0s8) www.seu_nome.com`}),(0,n.jsx)(l,{texto:``,children:`(IP_enp0s8) www.seu_nome.br`})]})]}),`
`,(0,n.jsx)(r.p,{children:`Salve o arquivo.`}),`
`,(0,n.jsx)(r.h2,{id:`terminal-do-pc`,children:`Terminal do PC`}),`
`,(0,n.jsxs)(u,{children:[(0,n.jsx)(o,{children:(0,n.jsx)(i,{active:!0,children:`Powershell`})}),(0,n.jsxs)(s,{children:[(0,n.jsx)(c,{children:`Comentário`}),(0,n.jsx)(l,{texto:`C:\\Users\\User`,children:`ipconfig /flushdns`}),(0,n.jsxs)(l,{texto:`C:\\Users\\User`,children:[`ping `,(0,n.jsx)(r.a,{href:`http://www.seu_nome.com.br`,children:`www.seu_nome.com.br`})]})]})]}),`
`,(0,n.jsx)(r.p,{children:`192.168.56.108`})]})}function i(t={}){let{wrapper:i}={...e(),...t.components};return i?(0,n.jsx)(i,{...t,children:(0,n.jsx)(r,{...t})}):r(t)}function a(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as default};