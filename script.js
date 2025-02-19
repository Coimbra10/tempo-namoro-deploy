const imagens = [
    "images/foto1.jpg", "images/foto2.jpg", "images/foto3.jpg",
    "images/foto4.jpeg", "images/foto5.jpeg", "images/foto6.jpeg",
    "images/foto7.jpeg", "images/foto8.jpeg"
];

let indiceAtual = 0;
let intervaloTroca;

// Atualiza a imagem exibida
function atualizarImagem() {
    document.getElementById("imagem").src = imagens[indiceAtual];
}

// Função para avançar e voltar imagens
function anterior() {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    atualizarImagem();
    reiniciarTrocaAutomatica();
}

function proximo() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    atualizarImagem();
    reiniciarTrocaAutomatica();
}

// Troca automática de imagem a cada 5 segundos
function iniciarTrocaAutomatica() {
    intervaloTroca = setInterval(proximo, 5000);
}

// Reinicia a contagem quando o usuário interage
function reiniciarTrocaAutomatica() {
    clearInterval(intervaloTroca);
    iniciarTrocaAutomatica();
}

// Detecta clique na imagem
document.getElementById("imagem").addEventListener("click", (e) => {
    const largura = e.target.clientWidth;
    const cliqueX = e.offsetX;

    if (cliqueX < largura / 2) {
        anterior(); // Clique na esquerda
    } else {
        proximo(); // Clique na direita
    }
});

// Detecta swipe no celular
let touchStartX = 0;
let touchEndX = 0;

document.getElementById("imagem").addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
});

document.getElementById("imagem").addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
        proximo(); // Swipe para esquerda → próxima imagem
    } else if (touchEndX - touchStartX > 50) {
        anterior(); // Swipe para direita → imagem anterior
    }
});

// Detecta teclas do teclado
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        proximo(); // Seta direita → próxima imagem
    } else if (e.key === "ArrowLeft") {
        anterior(); // Seta esquerda → imagem anterior
    }
});

// Iniciar troca automática ao carregar a página
iniciarTrocaAutomatica();

// Atualizar tempo juntos
const dataInicial = new Date("2024-02-24T22:00:00");

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
