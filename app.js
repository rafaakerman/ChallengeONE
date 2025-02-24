function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, digite um nome antes de adicionar à lista.");
        return;
    }

    const listaAmigos = document.getElementById('listaAmigos');
    const novoItem = document.createElement('li');
    novoItem.textContent = nome;
    listaAmigos.appendChild(novoItem);

    input.value = "";
}

function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const itens = listaAmigos.getElementsByTagName('li');

    if (itens.length === 0) {
        alert("Por favor, adicione pelo menos um nome antes de sortear.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * itens.length);
    const amigoSorteado = itens[indiceSorteado].textContent;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo secreto: ${amigoSorteado}</li>`;
}