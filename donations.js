document.getElementById('form-doacao').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const valor = document.getElementById('valor').value;

    const responseDiv = document.getElementById('response');

    if (nome && valor && valor > 0) {
        responseDiv.innerHTML = `<p class="success">Obrigado, ${nome}! Sua doação de R$ ${valor} foi recebida com sucesso!</p>`;
        document.getElementById('form-doacao').reset();
    } else {
        responseDiv.innerHTML = '<p class="error">Por favor, preencha todos os campos corretamente.</p>';
    }
});
