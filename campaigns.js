document.addEventListener('DOMContentLoaded', () => {
    const campanhaLista = document.getElementById('campanha-lista');

    fetch('data/data.json')
        .then(response => response.json())
        .then(data => {
            data.campanhas.forEach(campanha => {
                const divCampanha = document.createElement('div');
                divCampanha.classList.add('campanha-card');
                divCampanha.innerHTML = `
                    <h3>${campanha.titulo}</h3>
                    <p>${campanha.descricao}</p>
                    <a href="#" class="btn">Saiba Mais</a>
                `;
                campanhaLista.appendChild(divCampanha);
            });
        })
        .catch(err => console.log(err));
});
