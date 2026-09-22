# Configuração do Ambiente para Linguagem C

[← Voltar para o README](../README.md)

---

## 1. Download e Extração

1. Acesse o site oficial `winlibs.com` e baixe a versão compactada em `.zip` do compilador WinLibs (GCC + MinGW-w64 UCRT).
2. Extraia o conteúdo em um diretório de sua preferência (ex: `C:\winlibs`).

---

## 2. Adicionar o GCC às Variáveis de Ambiente (`Path`)

1. Pressione a tecla `Windows`, digite **Variáveis de Ambiente** e selecione **Editar as variáveis de ambiente do sistema**.
2. Clique no botão **Variáveis de Ambiente...** no canto inferior direito.
3. Na seção **Variáveis do usuário** (ou **Variáveis do sistema**), localize e selecione a variável **Path**.
4. Clique em **Editar...** e, na janela seguinte, clique em **Novo**.
5. Cole o caminho exato da pasta `bin` extraída:
   ```plaintext
   C:\caminho\da\pasta\extraida\bin
   ```
6. Clique em **OK** em todas as janelas para salvar as alterações.

---

## 3. Verificar a Instalação

Feche todos os terminais abertos (incluindo o terminal integrado do VS Code). Abra um novo terminal (`PowerShell` ou `CMD`) e execute:

```bash
gcc --version
```

Se a instalação foi bem-sucedida, o terminal exibirá a versão do compilador:

```plaintext
gcc (WinLibs ...) 14.x.x
Copyright (C) 2024 Free Software Foundation, Inc.
```

---

## 4. Configuração no VS Code (Opcional)

1. Abra o VS Code e pressione `Ctrl + Shift + P`.
2. Selecione **C/C++: Editar Configurações (UI)**.
3. No campo **Caminho do compilador** (*Compiler path*), informe o caminho do executável:
	```plaintext
	C:\caminho\da\pasta\extraida\bin\gcc.exe
	```
4. No campo **Modo do IntelliSense**, selecione `windows-gcc-x64`.

---

[← Voltar para o README](../README.md)
