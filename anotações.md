### Exemplo para estilizar citações

```HTML
  <blockquote>
    "Com um caderno velho em mãos, presente de Cipfried, decidi registrar minhas aventuras e descobertas. Este diário será a chama que ilumina o meu passado esquecido e um guia para aqueles que um dia venham a buscar seus próprios mistérios nas terras de Rookgaard."
  </blockquote>
```

```css

  blockquote {
    font-style: italic;
    padding: 10px 20px;
    border-left: 5px solid #8b4513;
    background: rgba(245, 224, 195, 0.7);
  }

```

---

### Inserindo imagens no Díario

Insira a tag img no arquivo 
```Javascript
<img src="${aventura.imagem}" alt="${aventura.titulo}" class="img-fluid mb-3">
```


### To do

- [] Verificar background
- [] Remover borda nativa do Bootstrap
- [] Adicionar mais aventuras
- [] Responsivo
- [] Verificar favicon
