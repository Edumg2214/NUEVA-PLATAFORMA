/**
 * Exporta la sección de resultados electorales a un archivo PDF.
 */
function exportPDF() {
    // Importa la biblioteca jsPDF
    const { jsPDF } = window.jspdf;

    // Selecciona el contenedor que deseas exportar
    const content = document.querySelector('.container1');

    // Utiliza html2canvas para capturar la imagen del contenedor
    html2canvas(content).then((canvas) => {
        // Convierte la imagen a un formato de URL de datos
        const imgData = canvas.toDataURL('image/png');

        // Crea un nuevo objeto jsPDF con configuración para A4
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        // Calcula el tamaño de la imagen en función de la página A4
        const imgWidth = 210; // Ancho en mm
        const pageHeight = 297; // Alto en mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;

        let position = 0;

        // Añade la imagen capturada al PDF
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Añade páginas adicionales si la imagen es más alta que la página
        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        // Guarda el PDF con un nombre adecuado
        pdf.save('Resultados_electorales.pdf');
    });
}
