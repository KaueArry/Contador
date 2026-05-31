const dataInicio = new Date("2026-05-29T23:00:00");

function atualizarContador() {
    const agora = new Date();
    let diferenca = agora - dataInicio;

    let segundosTotal = Math.floor(diferenca / 1000);

    let anos = Math.floor(segundosTotal / (365.25 * 24 * 60 * 60));
    segundosTotal %= Math.floor(365.25 * 24 * 60 * 60);

    let dias = Math.floor(segundosTotal / (24 * 60 * 60));
    segundosTotal %= 24 * 60 * 60;

    let horas = Math.floor(segundosTotal / 3600);
    segundosTotal %= 3600;

    let minutos = Math.floor(segundosTotal / 60);
    let segundos = segundosTotal % 60;

    document.getElementById("anos").textContent = anos;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

setInterval(atualizarContador, 1000);
atualizarContador();
console.log("script carregado");
