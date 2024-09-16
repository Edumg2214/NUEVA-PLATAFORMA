function exportCSV() {
    let csvContent = "data:text/csv;charset=utf-8,";

    // Selecciona todas las tablas que deseas exportar (puedes ajustar el selector si es necesario)
    const tables = document.querySelectorAll('table');

    tables.forEach((table) => {
        const rows = table.querySelectorAll('tr');

        // Recorre las filas y celdas para construir el CSV
        rows.forEach((row) => {
            let rowData = [];
            const cells = row.querySelectorAll('th, td'); // Encabezados y celdas

            cells.forEach((cell) => {
                // Escapa comas en el contenido para evitar conflictos
                let cellText = cell.innerText.replace(/,/g, ''); // Quita las comas de los valores
                rowData.push(cellText);
            });

            csvContent += rowData.join(",") + "\r\n"; // Une celdas con comas y agrega una nueva línea
        });
    });

    // Crea el enlace para descargar el archivo CSV
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "Resultados_electorales_Piura.csv");
    document.body.appendChild(link);

    // Inicia la descarga
    link.click();
}
