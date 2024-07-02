function simularVotacion() {
    const form = document.getElementById('votacionForm');
    const resultados = document.getElementById('resultadosSimulacion');
    const resultadoTexto = document.getElementById('resultadoTexto');

    let candidatoSeleccionado;
    for (const radio of form.elements['candidato']) {
        if (radio.checked) {
            candidatoSeleccionado = radio.value;
            break;
        }
    }

    if (candidatoSeleccionado) {
        resultadoTexto.textContent = `Has votado por ${candidatoSeleccionado}. ¡Gracias por participar!`;
        resultados.style.display = 'block';
    } else {
        alert('Por favor, selecciona un candidato.');
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const floatingWindow = document.querySelector('.floating-window');
    const changeBackgroundButton = document.getElementById('change-background');

    // Determina la fase actual basada en la URL
    const currentPhase = window.location.pathname.includes('final.html') ? 'final' :
                         window.location.pathname.includes('educacion.html') ? 'education' : '';

    // Definimos las listas de imágenes para cada fase
    const educationBackgrounds = [
        'url("../img/1.jpeg")',
        'url("../img/2.jpeg")',
        'url("../img/3.jpeg")',
        'url("../img/4.jpeg")'
    ];

    const finalBackgrounds = [
        'url("../img/5.jpeg")',
        'url("../img/6.jpeg")',
        'url("../img/7.png")'
    ];

    let backgrounds = [];
    if (currentPhase === 'education') {
        backgrounds = educationBackgrounds;
    } else if (currentPhase === 'final') {
        backgrounds = finalBackgrounds;
    }

    let currentBackgroundIndex = 0;

    // Función para cambiar la imagen de fondo
    function changeBackground() {
        currentBackgroundIndex++;
        if (currentBackgroundIndex >= backgrounds.length) {
            if (currentPhase === 'education') {
                // Redirigir a la página de simulación después de la última imagen de educación
                window.location.href = 'simulacion.html';
                return; // Salir de la función para evitar errores
            } else if (currentPhase === 'final') {
                // Redirigir a la página de cierre después de la última imagen de final
                window.location.href = 'cierre.html';
                return; // Salir de la función para evitar errores
            }
        } else {
            floatingWindow.style.backgroundImage = backgrounds[currentBackgroundIndex];
        }
    }

    // Establecer la imagen inicial
    if (backgrounds.length > 0) {
        floatingWindow.style.backgroundImage = backgrounds[currentBackgroundIndex];
    }

    // Añadir los eventos de click
    if (changeBackgroundButton) {
        changeBackgroundButton.addEventListener('click', changeBackground);
    }
    document.body.addEventListener('click', function(event) {
        // Evitar la acción si el botón de cambio de fondo fue clickeado
        if (event.target !== changeBackgroundButton) {
            changeBackground();
        }
    });
});