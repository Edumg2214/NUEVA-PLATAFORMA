const preguntas = document.querySelectorAll(".pregunta_encabezado");

// Asegurarse de que todos los paneles estén cerrados al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    preguntas.forEach((pregunta) => {
        const panel = pregunta.nextElementSibling;
        panel.classList.add("close"); // Agregamos clase "close" para asegurarnos de que inicie cerrado
    });
});

preguntas.forEach((pregunta) => {
    pregunta.addEventListener("click", () => {
        const panel = pregunta.nextElementSibling;

        // Si el panel ya está abierto, lo cerramos
        if (panel.classList.contains("activo")) {
            panel.classList.remove("activo");
            panel.classList.add("close");
        } else {
            // Cerrar todos los demás paneles
            removerClaseActivo();

            // Abrir el panel correspondiente
            panel.classList.add("activo");
            panel.classList.remove("close");
        }
    });
});

function removerClaseActivo() {
    preguntas.forEach((pregunta) => {
        const panel = pregunta.nextElementSibling;
        panel.classList.remove("activo");
        panel.classList.add("close");
    });
}