let campoJogador = document.querySelector("#jogador");
let botaoJogar = document.querySelector("#play");
let campoComputador = document.querySelector("#computador");
let msgVencedor = document.querySelector("#mensagem");
let placarJogador = document.querySelector("#par");
let placarComputador = document.querySelector("#impar");
let botaoRejogar = document.querySelector("#playagn");

let valorJogador = null;
let valorComputador = null;
let valorfinalJogador = null;

let pontosJogador = 0;
let pontosComputador = 0;

campoJogador.addEventListener("click", inicioJogo);
botaoJogar.addEventListener("click", playJogo);
botaoRejogar.addEventListener("click", replayJogo);

function inicioJogo() {
    botaoJogar.disabled = false;
}

function playJogo() {
    valorJogador = campoJogador.value;
    valorfinalJogador = parseInt(campoJogador.value);
    valorComputador = Math.floor(Math.random() * 11);
    botaoJogar.disabled = true;
    campoJogador.disabled = true;
    campoComputador.value = valorComputador;

    if ((valorComputador + valorfinalJogador) % 2 == 0) {
        msgVencedor.innerHTML = "<h3>PARABÉNS! Você venceu!</h3>"
        pontosJogador++;
        placarJogador.value = pontosJogador;
        botaoRejogar.disabled = false;
    } else {
        msgVencedor.innerHTML = "<h3>OOPS! O Computador venceu!</h3>"
        pontosComputador++;
        placarComputador.value = pontosComputador;
        botaoRejogar.disabled = false;
    }
}

function replayJogo() {
    campoJogador.value = "";
    campoComputador.value = "";
    campoJogador.disabled = false;
    valorJogador = null;
    valorComputador = null;
    msgVencedor.innerHTML = "";
    botaoRejogar.disabled = true;
}