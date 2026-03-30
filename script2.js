document.addEventListener('DOMContentLoaded', () => {
    // Usando nomes de variáveis diferentes e buscando os novos IDs
    const botaoAlternativo = document.getElementById('outroBotao');
    const textoResposta = document.getElementById('outraMensagem');

    let cliquesTotais = 0;

    botaoAlternativo.addEventListener('click', () => {
        cliquesTotais++;
        textoResposta.textContent = `Botão diferente clicado ${cliquesTotais} vez(es)!`;
        textoResposta.style.color = '#d32f2f'; // Cor vermelha para diferenciar
    });
});
