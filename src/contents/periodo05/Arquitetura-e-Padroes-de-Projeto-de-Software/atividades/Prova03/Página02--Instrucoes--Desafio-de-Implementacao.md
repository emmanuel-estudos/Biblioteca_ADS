# Instruções

## Contexto

Uma empresa mantém um sistema interno de geração de relatórios (SistemaRelatorios).
O código atual funciona, mas foi crescendo "na marra": a cada nova necessidade (cache, log, controle de acesso), alguém adicionou mais um parâmetro booleano e mais um bloco if dentro do mesmo método.

Você recebeu os seguintes arquivos-fonte (pacote relatorios):

- GeradorRelatorio.java — interface do gerador de relatórios
- GeradorRelatorioPDF.java e GeradorRelatorioExcel.java — implementações concretas
- Usuario.java — classe de domínio simples (nome, autenticação, papel)
- SistemaRelatorios.java — classe cliente que orquestra tudo (é aqui que estão os problemas)
- Main.java — demonstração de uso com diferentes combinações de parâmetros

Refatore o sistema utilizando exatamente dois padrões de projeto estruturais (dentre os estudados na disciplina - Adapter, Facade, Decorator, Proxy, Flyweight, Composite), de forma que:

- O controle de acesso (usuário autenticado e com papel ADMIN ou OPERADOR) deixe de estar misturado com a lógica de geração do relatório.
- As funcionalidades de cache e de log deixem de depender de parâmetros booleanos e passem a poder ser combinadas livremente, sem exigir uma nova classe (ou um novo if) para cada combinação possível.
- O comportamento observado ao rodar Main (mensagens de log, acerto/erro de cache, bloqueio de usuários sem permissão) continue equivalente ao original — pequenas diferenças na ordem das mensagens de log são aceitáveis, desde que justificadas.
- As classes GeradorRelatorio, GeradorRelatorioPDF e GeradorRelatorioExcel podem ser reaproveitadas sem alteração na interface pública gerar(String).

## Código

### Arquivo 'src/main/java/br/edu/ifpb/padroes/estruturais/relatorios/GeradorRelatorio.java

```java
package br.edu.ifpb.padroes.estruturais.relatorios;

public interface GeradorRelatorio {
    String gerar(String dadosBrutos);
}
```

### Arquivo 'src/main/java/br/edu/ifpb/padroes/estruturais/relatorios/GeradorRelatorioExcel.java

```java
package br.edu.ifpb.padroes.estruturais.relatorios;

public class GeradorRelatorioExcel implements GeradorRelatorio {
    @Override
    public String gerar(String dadosBrutos) {
        // Simula processamento pesado de geração do relatório em Excel
        return "[XLSX] Relatorio gerado a partir de: " + dadosBrutos;
    }
}
```

### Arquivo 'src/main/java/br/edu/ifpb/padroes/estruturais/relatorios/GeradorRelatorioPDF.java

```java
package br.edu.ifpb.padroes.estruturais.relatorios;

public class GeradorRelatorioPDF implements GeradorRelatorio {
    @Override
    public String gerar(String dadosBrutos) {
        // Simula processamento pesado de geração do relatório em PDF
        return "[PDF] Relatorio gerado a partir de: " + dadosBrutos;
    }
}
```

### Arquivo 'src/main/java/br/edu/ifpb/padroes/estruturais/relatorios/Main.java

```java
package br.edu.ifpb.padroes.estruturais.relatorios;

public class Main {
    public static void main(String[] args) {
        SistemaRelatorios sistema = new SistemaRelatorios();

        Usuario admin = new Usuario("Ana", true, "ADMIN");
        Usuario visitante = new Usuario("Bruno", true, "VISITANTE");
        Usuario naoLogado = new Usuario("Carla", false, "OPERADOR");

        System.out.println("--- Cenario 1: admin, com cache e log ---");
        System.out.println(sistema.gerarRelatorio(admin, "vendas-julho", "PDF", true, true));

        System.out.println("--- Cenario 2: mesma consulta (deve vir do cache) ---");
        System.out.println(sistema.gerarRelatorio(admin, "vendas-julho", "PDF", true, true));

        System.out.println("--- Cenario 3: admin, sem cache, com log, outro tipo ---");
        System.out.println(sistema.gerarRelatorio(admin, "vendas-agosto", "EXCEL", false, true));

        System.out.println("--- Cenario 4: visitante (sem permissao) ---");
        System.out.println(sistema.gerarRelatorio(visitante, "vendas-julho", "PDF", true, false));

        System.out.println("--- Cenario 5: usuario nao autenticado ---");
        System.out.println(sistema.gerarRelatorio(naoLogado, "vendas-julho", "PDF", true, true));
    }
}
```

### Arquivo 'src/main/java/br/edu/ifpb/padroes/estruturais/relatorios/SistemaRelatorios.java

```java
package br.edu.ifpb.padroes.estruturais.relatorios;

import java.util.HashMap;
import java.util.Map;

public class SistemaRelatorios {

    private GeradorRelatorio geradorPDF = new GeradorRelatorioPDF();
    private GeradorRelatorio geradorExcel = new GeradorRelatorioExcel();

    private Map<String, String> cache = new HashMap<>();

    public String gerarRelatorio(Usuario usuario, String dadosBrutos, String tipo,
                                  boolean usarCache, boolean gerarLog) {

        // ---- Controle de acesso misturado com a regra de negócio ----
        if (!usuario.isAutenticado()) {
            System.out.println("[ERRO] Usuario nao autenticado tentou gerar relatorio.");
            return null;
        }
        if (!usuario.getPapel().equals("ADMIN") && !usuario.getPapel().equals("OPERADOR")) {
            System.out.println("[ERRO] Usuario sem permissao para gerar relatorios: " + usuario.getNome());
            return null;
        }

        String chaveCache = tipo + ":" + dadosBrutos;

        // ---- Cache espalhado dentro do método de negócio ----
        if (usarCache && cache.containsKey(chaveCache)) {
            if (gerarLog) {
                System.out.println("[LOG] Retornando resultado do cache para " + usuario.getNome());
            }
            return cache.get(chaveCache);
        }

        if (gerarLog) {
            System.out.println("[LOG] Usuario " + usuario.getNome() + " solicitou relatorio tipo " + tipo);
        }

        String resultado;
        if (tipo.equals("PDF")) {
            resultado = geradorPDF.gerar(dadosBrutos);
        } else if (tipo.equals("EXCEL")) {
            resultado = geradorExcel.gerar(dadosBrutos);
        } else {
            throw new IllegalArgumentException("Tipo de relatorio desconhecido: " + tipo);
        }

        if (usarCache) {
            cache.put(chaveCache, resultado);
        }

        if (gerarLog) {
            System.out.println("[LOG] Relatorio gerado com sucesso para " + usuario.getNome());
        }

        return resultado;
    }
}
```

### Arquivo 'src/main/java/br/edu/ifpb/padroes/estruturais/relatorios/Usuario.java

```java
package br.edu.ifpb.padroes.estruturais.relatorios;

public class Usuario {

    private String nome;
    private boolean autenticado;
    private String papel; // "ADMIN", "OPERADOR", "VISITANTE"

    public Usuario(String nome, boolean autenticado, String papel) {
        this.nome = nome;
        this.autenticado = autenticado;
        this.papel = papel;
    }

    public String getNome() {
        return nome;
    }

    public boolean isAutenticado() {
        return autenticado;
    }

    public String getPapel() {
        return papel;
    }
}
```
