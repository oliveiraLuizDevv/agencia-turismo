// Interacao dos botoes dos pacotes
document.querySelectorAll(".btn-pacote").forEach(function (botao) {
botao.addEventListener("click", function () {
const destino = botao.dataset.destino;
alert(`Pacote selecionado: ${destino}`);
});
});