alert('¡Bienvenido! Introduzca las fechas correspondientes para saber cuántos días ha vivido hasta hoy');
function calculardiasDiscount() {
    var timeStart = new Date(document.getElementById("timeStart").value);
    var timeEnd = new Date(document.getElementById("timeEnd").value);
    var actualDate = new Date();
    if (timeEnd > timeStart)
    {
        var diff = timeEnd.getTime() - timeStart.getTime();
        document.getElementById("daysDiscount").value = Math.round(diff / (1000 * 60 * 60 * 24));
    }
}



