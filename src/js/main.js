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
                const aventuraId = e.target.getAttribute("data-id");
                const aventuraSelecionada = aventuras.find(aventura => aventura.id == aventuraId);

                // Exibe as informações da aventura
                if (aventuraSelecionada.id === 1) {
                    // Exibição do cemitério
                    const lapidesHTML = aventuraSelecionada.lapides.map(lapide => {
                        return `
                            <div class="estrutura-diario">  
                                <h5 class="mt-50">${lapide.titulo}</h5>
                                ${lapide.textoIngles}
                                <p>${lapide.traducao}</p>
                                <p>${lapide.interpretacao}</p>
                            </div>
                        `;
                    }).join("");

                    conteudo.innerHTML = `
                        <div class="estrutura-diario">
                        <h3>${aventuraSelecionada.titulo}</h3>
                        <h4><strong>${aventuraSelecionada.data}</strong></h4>
                        <h4><strong>Localização: ${aventuraSelecionada.localizacao}</strong></h4>
                        <p>${aventuraSelecionada.descricao}</p>
                        <img src="${aventuraSelecionada.imagem}" alt="${aventuraSelecionada.titulo}" class="img-fluid borda-img mb-3">

                        </div>
                        ${lapidesHTML}
                    `;
                } else if (aventuraSelecionada.id === 2) {
                    // Exibição do diálogo com Amber e vocabulário Orc
                    const dialogoHTML = aventuraSelecionada.dialogo.map(dialogo => {
                        return `
                            <div class="estrutura-diario">  
                                <h5>${dialogo.fala}</h5>
                                <p>${dialogo.interpretacao}</p>
                                <div class="container-fluid">
                                <img src="src/img/divisor-madeira.png" class="img-fluid py-5">
                            </div>
                            </div>
                        `;
                    }).join("");

                    const vocabulárioHTML = Object.keys(aventuraSelecionada.vocabulario_orc).map(categoria => {
                        const termosHTML = Object.entries(aventuraSelecionada.vocabulario_orc[categoria]).map(([orcTermo, traducao]) => {
                            return `
                                <p><strong>${orcTermo}:</strong> ${traducao}</p>
                            `;
                        }).join("");
                        return `
                            <div class="estrutura-diario">
                                <h3>Vocabulário Orc - ${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h3>
                                ${termosHTML}
                            </div>
                        `;
                    }).join("");

                    conteudo.innerHTML = `
                        <div class="estrutura-diario">
                        <h3>${aventuraSelecionada.titulo}</h3>
                        <h4><strong>${aventuraSelecionada.data}</strong></h4>
                        <h4><strong>Localização: ${aventuraSelecionada.localizacao}</strong></h4>
                        <p>${aventuraSelecionada.descricao}</p>
                        <img src="${aventuraSelecionada.imagem}" alt="${aventuraSelecionada.titulo}" class="img-fluid borda-img mb-3">
                        </div>
                        ${dialogoHTML}
                        ${vocabulárioHTML}
                    `;
                }
            }
        });
    })
    .catch(error => {
        console.error("Erro ao carregar as aventuras:", error);
    });
