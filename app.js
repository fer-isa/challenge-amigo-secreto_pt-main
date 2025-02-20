// Array para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um nome à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    // Validação: Verifica se o campo está vazio
    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Verifica se o nome já está na lista
    if (listaAmigos.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    // Adiciona o nome ao array e atualiza a lista na tela
    listaAmigos.push(nome);
    atualizarListaAmigos();

    // Limpa o campo de entrada
    input.value = '';
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada nome da lista ao HTML
    listaAmigos.forEach((amigo) => {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    // Verifica se há nomes suficientes para o sorteio
    if (listaAmigos.length < 2) {
        alert('Adicione pelo menos dois amigos para realizar o sorteio.');
        return;
    }

    // Sorteia um índice aleatório do array
    const indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceSorteado];

    // Exibe o resultado do sorteio
    const resultado = document.getElementById('resultado');
    resultado.textContent = `O amigo secreto é: ${amigoSecreto}`;
}

// Adiciona eventos aos botões
document.getElementById('adicionar').addEventListener('click', adicionarAmigo);
document.getElementById('sortear').addEventListener('click', sortearAmigo);