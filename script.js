// Função para mostrar a aba selecionada e ocultar as outras
function mostrarAba(abaId) {
    var abas = document.querySelectorAll('.aba');
    abas.forEach(function (aba) {
        aba.style.display = 'none'; // Oculta todas as abas
    });
    document.getElementById(abaId).style.display = 'block'; // Mostra a aba selecionada
}
