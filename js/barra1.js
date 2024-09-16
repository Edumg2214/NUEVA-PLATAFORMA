const labels10 = ['Procesadas', 'Contabilizadas'];
const colors10 = ['rgba(169, 210, 255, 0.8)', 'rgba(0, 102, 214, 0.8)'];

const graph10 = document.querySelector("#grafica10");

const data10 = {
    labels: labels10,
    datasets: [{
        data: [84323, 84323], // Datos correspondientes a cada etiqueta
        backgroundColor: colors10
    }]
};

const config10 = {
    type: 'bar',
    data: data10,
    options: {
        indexAxis: 'y', // Cambia la orientación de las barras a horizontal
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
};

new Chart(graph10, config10);


// 2 //
const labels11 = ['Participación', 'Ausentismo']
const colors11 = ['rgba(0, 102, 214, 0.8)', 'rgba(208, 208, 208, 0.8)'];

const graph11 = document.querySelector("#grafica11");

const data11 = {
    labels: labels11,
    datasets: [{
        data: [19139804, 5620258],
        backgroundColor: colors11
    }]
};

const config11 = {
    type: 'pie',
    data: data11,
};

new Chart(graph11, config11);