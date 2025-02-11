const imagens = ["images/foto1.jpg", "images/foto2.jpg", "images/foto3.jpg"]; 
let indiceAtual = 0;

function atualizarImagem() {
    document.getElementById("imagem").src = imagens[indiceAtual];
}

function anterior() {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    atualizarImagem();
}

function proximo() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    atualizarImagem();
}

// Tempo juntos
const dataInicial = new Date("2024-02-14T22:00:00"); 

function atualizarTempo() {
    const agora = new Date();
    const diferenca = agora - dataInicial;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    document.getElementById("tempo").innerHTML =
        `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

setInterval(atualizarTempo, 1000);
atualizarTempo();
