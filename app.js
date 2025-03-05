// Array para armazenar os nomes dos amigos na memória
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nomeInput = document.getElementById('amigo');
    const nome = nomeInput.value.trim(); // Obtém o nome do campo de entrada e remove espaços extras

    if (nome) {
        // Verifica se o nome já está na lista de amigos para evitar duplicatas
        if (amigos.includes(nome)) {
            alert('Este nome já está na lista de amigos!');
        } else {
            // Adiciona o nome à lista de amigos (na memória)
            amigos.push(nome);
            nomeInput.value = ''; // Limpa o campo de entrada após adicionar o nome
            verificarBotaoSortear(); // Verifica se o botão "Sortear amigo" deve aparecer
        }
    } else {
        alert('Por favor, insira um nome válido!');
    }
}

// Adiciona o evento de pressionamento da tecla Enter
document.getElementById('amigo').addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada foi "Enter"
    if (event.key === 'Enter') {
        event.preventDefault(); // Impede o comportamento padrão do Enter (se necessário)
        adicionarAmigo(); // Chama a função para adicionar o amigo
    }
});


// Função para verificar se o botão "Sortear amigo" deve ser exibido
function verificarBotaoSortear() {
    const botaoSortear = document.getElementById('botaoSortear');
    if (amigos.length > 2) {
        botaoSortear.style.display = 'block'; // Exibe o botão quando houver mais de 2 amigos
    } else {
        botaoSortear.style.display = 'none'; // Esconde o botão se houver 2 ou menos amigos
    }
}

// Função para realizar o sorteio
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('É necessário pelo menos 2 amigos para realizar o sorteio!');
        return;
    }

    let amigosSecretos = [...amigos]; // Copia a lista de amigos
    let resultados = [];

    // Sorteio: embaralha a lista e associa cada pessoa com um amigo secreto
    for (let i = 0; i < amigos.length; i++) {
        // Remove o amigo sorteado para evitar duplicação
        let sorteado = amigosSecretos.splice(Math.floor(Math.random() * amigosSecretos.length), 1)[0];
        resultados.push(`${amigos[i]} - ${sorteado}`);
    }

    exibirResultados(resultados); // Exibe os resultados do sorteio
}

// Função para exibir os resultados do sorteio
function exibirResultados(resultados) {
    const resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = ''; // Limpa a lista de resultados antes de exibir os novos

    resultados.forEach(resultado => {
        const li = document.createElement('li');
        li.textContent = resultado;
        resultadoLista.appendChild(li); // Adiciona cada resultado à lista de resultados no HTML
    });
}
