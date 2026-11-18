# ✍️ Tarefa 1.3 — Caixa de diálogo de RPG

🎯 **Objetivo:** criar uma tela de RPG com a imagem da tarefa anterior e uma **caixa de diálogo** com uma fala do personagem.

<p align="center">
  <img src="https://github.com/kyurybarros/IFPB/blob/main/PDI/Projeto_Unidade_1/dialogo.webp?raw=true" width="420" alt="Game Boy original">
</p>

**Como é a tela?** Nos RPGs clássicos, as falas dos personagens aparecem numa caixa na parte inferior da tela, desenhada **por cima** da cena do jogo. A tela desta tarefa contém a cena em pixel art e, na parte inferior, uma caixa de cor sólida, com borda e o `texto` da fala.

**Partindo da Tarefa 1.2:** o aspecto de pixel art da cena vem do seu `filtro_8bit`. A caixa é uma **região de interesse** pintada com uma única cor por atribuição a uma fatia. A borda e o texto são desenhados com `cv2.rectangle` e `cv2.putText`, lembrando que essas funções usam coordenadas **(x, y)**, ao contrário da indexação `img[y, x]`.

```ipynb
# 📤 Para usar outra imagem nesta tarefa, altere ENVIAR para True, execute e selecione o arquivo.
#    A imagem permanece armazenada; após o envio, retorne ENVIAR para False.
ENVIAR = False
img_1_3 = imagem_da_tarefa("1.3", ENVIAR, padrao=img_teste)

def caixa_de_dialogo(img, texto="SAUDACOES, AVENTUREIRO! (use sua criatividade)"):
    # SEU CÓDIGO AQUI
    raise NotImplementedError

_ = mostrar_resultado(caixa_de_dialogo, img_1_3)
```