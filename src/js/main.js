fetch('aventuras.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao carregar o arquivo JSON.");
        }
        return response.json();
    })
    .then(aventuras => {
        const lista = document.getElementById("aventuras-lista");
        const conteudo = document.getElementById("aventura-conteudo");

        // Gera a lista de aventuras
        aventuras.forEach(aventura => {
            const item = document.createElement("li");
            item.className = "list-group-item list-group-item-action";
            item.textContent = aventura.titulo;
            item.setAttribute("data-id", aventura.id);
            lista.appendChild(item);
        });

        // Adiciona evento de clique nos itens da lista
        lista.addEventListener("click", (e) => {
            if (e.target && e.target.nodeName === "LI") {
                const id = parseInt(e.target.getAttribute("data-id"));
                const aventura = aventuras.find(av => av.id === id);

                // Verifica se a imagem existe
                let imagemHTML = '';
                if (aventura.imagem) {
                    imagemHTML = `<img src="${aventura.imagem}" alt="${aventura.titulo}" class="img-fluid mb-3">`;
                }

                // Atualiza o conteúdo da aventura com ou sem imagem
                conteudo.innerHTML = `
                    <div class="estrutura-diario">
                        <h3>${aventura.titulo}</h3>
                        <h4>${aventura.data}</h4>
                        <h4>Localização: ${aventura.localizacao}</h4>
                        ${imagemHTML}
                        <p class="letra-destaque mb-5">${aventura.descricao}</p>
                        <h5>${aventura.lapide}</h5>
                        <p>${aventura.textoIngles}</p>
                        <p>${aventura.traducao}</p>
                        <p>${aventura.interpretacao}</p>
                        <hr>
                    </div>
                `;
            }
        });
    })
    .catch(error => console.error("Erro ao carregar as aventuras:", error));
