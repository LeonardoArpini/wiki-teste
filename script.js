document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('meuBotao');
    const mensagem = document.getElementById('mensagem');

    let contador = 0;

    botao.addEventListener('click', () => {
        contador++;
        mensagem.textContent = `O botão foi clicado ${contador} vez(es)!`;
        mensagem.style.color = '#28a745'; // Cor verde para indicar sucesso
    });
});
