document.addEventListener("DOMContentLoaded", function () {
    // Obtener el user-agent del navegador
    const userAgent = navigator.userAgent.toLowerCase();

    // Verificar si es un dispositivo móvil
    const isMobile = /iphone|ipad|android|mobile/.test(userAgent);

    // Seleccionar los elementos de descarga y código QR
    const botonDescarga = document.getElementById("boton-descarga");
    const codigoQR = document.getElementById("qr-descarga");

    if (isMobile) {
        // Mostrar el botón de descarga y ocultar el código QR
        botonDescarga.style.display = "flex";
        codigoQR.style.display = "none";
    } else {
        // Mostrar el código QR y ocultar el botón de descarga
        botonDescarga.style.display = "none";
        codigoQR.style.display = "flex";
    }
});