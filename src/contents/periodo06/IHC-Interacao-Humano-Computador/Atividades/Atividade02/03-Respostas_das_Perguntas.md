# Respostas das Perguntas

## 1. Quem são os potenciais usuários?

Em um contexto brasileiro de atendimento municipal (prefeitura), o público-alvo é extremamente heterogêneo. A análise sob a ótica de IHC deve considerar barreiras de letramento digital, acessibilidade e o ambiente físico do totem.

- **Perfil dos Usuários:**
  - **Cidadãos em geral (Idade variada):** Desde jovens adultos habituados a smartphones até idosos (muitas vezes com baixa familiaridade com telas touch screen, digitação de documentos ou leitura de interfaces digitais).
  - **Pequenos empreendedores / Contadores:** Usuários que utilizam o totem buscando serviços voltados para CNPJ (alvarás, certidões de regularidade fiscal, taxas municipais).
  - **Pessoas com deficiência (PcD):** Usuários cadeirantes (exigindo altura adequada de toque), pessoas com baixa visão (necessidade de alto contraste e fontes ampliadas) ou deficiência auditiva/motora.


- **Fatores Sociais e Ambientais:**
  - **Ambiente Físico (Ruído e Iluminação):** O totem geralmente fica instalado no saguão de entrada da prefeitura ou em postos de atendimento descentralizados. É um local barulhento, com circulação intensa de pessoas, eco e, muitas vezes, incidência de luz solar direta ou lâmpadas fluorescentes fortes, o que pode causar reflexos na tela e dificultar a leitura.
  - **Pressão e Ansiedade:** O cidadão costuma ir à prefeitura para resolver pendências urgentes (multas, emissão de guias com vencimento próximo, certidões para emprego). A presença de filas atrás do totem gera ansiedade e pressa para concluir a tarefa.
  - **Fadiga Postural:** O atendimento é feito em pé (a menos que o totem seja adaptado para cadeirantes/assento), o que exige que a interação seja rápida, direta e sem fluxos longos.

---

## 2. Como essa interação/tarefa poderia ser feita sem a tecnologia?

Sem o totem digital, o fluxo tradicional em uma prefeitura brasileira ocorre da seguinte forma:

1. **Triagem Manual:** O cidadão chega à recepção, pega uma senha de papel em uma impressora térmica simples ou com um atendente humano na porta.
2. **Espera na Fila:** O cidadão aguarda em cadeiras do saguão até que sua senha seja chamada no painel eletrônico (ou gritada pelo atendente).
3. **Atendimento no Guichê:** O cidadão se dirige a um atendente humano (fiscal, recepcionista ou protocolista), entrega documentos físicos ou dita verbalmente seu CPF/CNPJ.
4. **Direcionamento/Resolução:** O atendente consulta o sistema interno da prefeitura, responde à dúvida, emite a guia de pagamento em papel ou direciona o cidadão para o setor específico (ex: Sala do Empreendedor, Secretaria de Obras, Tributos).

- **Gargalos eliminados pelo totem:** O totem atua como uma **triagem digital inteligente**, reduzindo filas no balcão de informações para dúvidas simples e direcionando o fluxo de forma autônoma antes mesmo da emissão de senhas de atendimento humano.

---

## 3. Quais funções essenciais devem existir nesse sistema?

Para manter o escopo simples e focado no direcionamento (conforme as diretrizes extras), o segundo nível apresentará três serviços comuns e essenciais em prefeituras brasileiras:

1. **Consulta e Emissão de IPTU / Taxas Municipais (Segunda via de carnê/boleto).**
2. **Emissão de Certidão Negativa de Débitos (CND) – Pessoa Física ou Jurídica.**
3. **Abertura de Protocolo de Solicitação de Serviços Urbanos (ex: Iluminação pública, tapa-buraco ou poda de árvore).**

---

## 4. Esboce as telas previstas para o atendimento das funções estabelecidas

Abaixo está o detalhamento estrutural dos três níveis de telas projetados para o totem.

### 🟢 Nível 1: Tela Inicial (Identificação)

- **Objetivo:** Capturar a identificação base do cidadão para registrar o atendimento ou puxar cadastros vinculados.
- **Layout e Elementos:**
- **Cabeçalho:** Logotipo oficial da Prefeitura e título amigável (*"Bem-vindo ao Autoatendimento Municipal"*).
- **Centro da Tela:** Um campo de texto único, amplo e centralizado na horizontal, com o *placeholder*: *"Digite seu CPF ou CNPJ"*. O campo deve abrir um teclado numérico virtual na própria tela ao ser tocado.
- **Rodapé (Inferior Direito):** Botão de destaque visual **"Continuar"** (habilitado apenas após o preenchimento válido dos dígitos).
* *(Opcional de Acessibilidade):* Ícone de alto contraste ou libras no canto superior direito.

---

### 🟡 Nível 2: Tela de Menu de Ações (Direcionamento)

- **Objetivo:** Apresentar as opções de serviços de forma clara e espaçada para toque rápido.
- **Layout e Elementos:**
- **Canto Superior Esquerdo:** Botão **"Voltar"** (com ícone de seta para a esquerda), permitindo retornar à tela de CPF/CNPJ caso o documento tenha sido digitado errado.
- **Cabeçalho:** Instrução clara: *"Olá, [CPF/CNPJ reconhecido]. O que você deseja resolver hoje?"*
- **Centro da Tela:** 3 botões grandes, dispostos de forma centralizada (vertical e horizontalmente), com espaçamento igual (respiro visual) entre eles:
1. **[ 📄 Emissão de IPTU / Guias ]**
2. **[ 📜 Certidão Negativa (CND) ]**
3. **[ 🛠️ Solicitar Serviço Urbano ]**

---

### 🟠 Nível 3: Telas de Atendimento Específicas (Contextualizadas)

As telas deste nível variam de acordo com a escolha feita no Nível 2, mas mantêm o padrão de usabilidade e o botão de retorno.

#### Opção A: Emissão de IPTU (Se a 1ª opção foi escolhida)

- **Cabeçalho:** Botão **"Voltar"** (superior esquerdo) + Título: *"Consulta de IPTU / Imóveis"*.
- **Conteúdo Central:**
* Exibição de uma lista simplificada de imóveis vinculados ao CPF/CNPJ informado (ex: *"Imóvel 01 - Rua X, nº 123"*).
* Opção de selecionar o exercício/ano desejado (ex: `[ 2026 ]` `[ 2025 ]`).


- **Ação Final (Rodapé):** Botão grande de **"Imprimir Comprovante / Guia"** (simulando a impressão física pelo totem) ou *"Enviar por E-mail / SMS"* para desmaterializar o papel.

#### Opção B: Certidão Negativa (Se a 2ª opção foi escolhida)

- **Cabeçalho:** Botão **"Voltar"** (superior esquerdo) + Título: *"Certidão Negativa de Débitos"*.
- **Conteúdo Central:**
* Mensagem de status do sistema após verificação rápida: *"Situação Cadastral: REGULAR"*.
* Breve texto informativo: *"Sua certidão está apta para emissão."*


- **Ação Final (Rodapé):** Botão de destaque **"Gerar e Imprimir Certidão"** ou opção de direcionamento para retirada no guichê humano caso haja pendências.

#### Opção C: Solicitação de Serviço Urbano (Se a 3ª opção foi escolhida)

- **Cabeçalho:** Botão **"Voltar"** (superior esquerdo) + Título: *"Abertura de Chamado - Zeladoria Urbana"*.
- **Conteúdo Central:**
* Seleção visual por ícones/cards das subcategorias mais comuns: `[ 💡 Lâmpada Apagada ]` `[ 🕳️ Tapa-Buraco ]` `[ 🌳 Poda de Árvore ]`.
* Campo de digitação simples para o endereço ou ponto de referência (com teclado virtual alfa-numérico).

- **Ação Final (Rodapé):** Botão **"Confirmar Solicitação e Gerar Protocolo"**, exibindo na tela o número do protocolo para acompanhamento futuro.