const meuUser = "RafaelZapicoNiharu";
const projetos = document.querySelector(".projetos");


function getMeusProjetos() {
    fetch(`https://api.github.com/users/${meuUser}/repos?sort=updated`)
        .then(async response => {
            const dados = await response.json()
            const projetosRecentes = dados.slice(0, 6);
            console.log(projetosRecentes);

            projetosRecentes.map(projeto => {
                const novoProj = document.createElement('div');
                novoProj.innerHTML =
                    `<div class="itemProj">
                <a href="${projeto.html_url}" class="urlProjeto">
                <div class="tituloProj">${projeto.name}</div>
                <div class="descricaoProj">${projeto.description}
                </div>
                <div class="atualizadoProj">
                ${ Intl.DateTimeFormat('pt-BR').format(new Date) }
                </div>
                </a>
                </div>`






                projetos.appendChild(novoProj);
            })





        })
        .catch(error => console.log(error("Erro ao requisitar projetos.")))

}

getMeusProjetos();