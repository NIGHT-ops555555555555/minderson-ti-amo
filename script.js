let pontuacao = 0;

function jogar() {
    const inputElement = document.getElementById('userGuess');
    const resultElement = document.getElementById('result');
    const scoreElement = document.getElementById('score');

    // Converte o valor do input para número
    const palpiteUsuario = parseInt(inputElement.value);

    // Validação de entrada
    if (isNaN(palpiteUsuario) || palpiteUsuario < 1 || palpiteUsuario > 10) {
        resultElement.className = "result-message errou";
        resultElement.innerHTML = "Por favor, digite um número válido entre 1 e 10!";
        return;
    }

    // Sorteia um número de 1 a 10
    const numeroSorteado = Math.floor(Math.random() * 10) + 1;

    // REGRA SOLICITADA: 
    // Se o número digitado FOR IGUAL ao sorteado -> "Você errou"
    if (palpiteUsuario === numeroSorteado) {
        resultElement.className = "result-message errou";
        resultElement.innerHTML = `Você ERROU! O número sorteado foi exatamente ${numeroSorteado}.`;
    } 
    // Se for diferente -> ganha o ponto e "Você acertou"
    else {
        pontuacao++;
        scoreElement.textContent = pontuacao;
        resultElement.className = "result-message acertou";
        resultElement.innerHTML = `Você ACERTOU! O número sorteado foi ${numeroSorteado} (diferente do seu palpite).`;
    }

    // Limpa o campo para a próxima jogada
    inputElement.value = '';
    inputElement.focus();
}