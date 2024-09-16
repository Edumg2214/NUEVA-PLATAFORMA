// Definir las provincias por departamento
const provinciasPorDepartamento = {
    'piura': [
    { nombre: "PIURA", distritos: ["PIURA", "CASTILLA", "CATACAOS", "LA ARENA", "LA UNION", "LAS LOMAS", "TAMBO GRANDE", "CURA MORI", "EL TALLAN", "VEINTISEIS DE OCTUBRE"] },
    { nombre: "AYABACA", distritos: ["AYABACA", "FRIAS", "JILILI", "LAGUNAS", "MONTERO", "PACAIPAMPA", "PAIMAS", "SAPILLICA", "SICCHEZ", "SUYO"] },
    { nombre: "HUANCABAMBA", distritos: ["HUANCABAMBA", "SONDOR", "CANCHAQUE", "EL CARMEN DE LA FRONTERA", "HUARMACA", "LALAQUIZ", "SAN MIGUEL DE EL FAIQUE", "SONDORILLO"] },
    { nombre: "MORROPON", distritos: ["CHULUCANAS", "MORROPON", "BUENOS AIRES", "CHALACO", "LA MATANZA", "SALITRAL", "SAN JUAN DE BIGOTE", "SANTA CALINA DE MOSSA", "SANTO DOMINGO", "YAMANGO"] },
    { nombre: "PAITA", distritos: ["PAITA", "COLAN", "TAMARINDO", "AMOTAPE", "EL ARENAL", "LA HUACA", "VICHAYAL"] },
    { nombre: "SECHURA", distritos: ["SECHURA", "VICE", "BERNAL", "BELLAVISTA DE LA UNION", "CRISTO NOS VALGA", "RINCONADA DE LLICUAR"] },
    { nombre: "SULLANA", distritos: ["SULLANA", "BELLAVISTA", "MARCAVELICA", "SALITRAL", "QUERECOTILLO", "LANCONES", "IGNACIO ESCUDERO", "MIGUEL CHECA"] },
    { nombre: "TALARA", distritos: ["LOS ORGANOS", "PARIÑAS", "EL ALTO", "LA BREA", "MANCORA", "LOBITOS"] }
    ]
};
// TENGO QUE PONER TODOS
const localesPorDistrito = {
    //PIURA
    'piura': ["CASINO DE EMPLEADOS CIVILES DEL EJÉRCITO", "CEI 1355 SAN JUAN DE CURUMUY", "COLEGIO REGIONAL DE LICENCIADOS EN ADMINISTRACION", "IE ANN GOULDEN - BARRIO SUR","IE COMPLEJO LA ALBORADA", 
            "IE ENRIQUE LOPEZ ALBUJAR", "IE FEDERICO HELGUERO SEMINARIO", "IE IGNACIO MERINO", "IE IGNACIO SANCHEZ - EX 21", "IE JAVIER HERAUD", "IE LOS ALGARROBOS", "IE MAGDALENA SEMINARIO DE LLIROD", "IE N 225 LOS TITANES",
            "IE NUESTRA SEÑORA DE FATIMA - PUERTA 1", "IE NUESTRA SEÑORA DE FATIMA - PUERTA 2", "IE PARCEMON SALDARRIAGA MONTEJO", "IE PNP BACILIO RAMIREZ PEÑA", "IE ROSA CARRERA DE MARTOS", "IE SAGRADO CORAZON DE JESUS", "IE SAN MIGUEL - PUERTA 1",
            "IE SAN MIGUEL - PUERTA 2", "IE SAN MIGUEL - PUERTA 3", "IE SAN PEDRO", "IE SELMIRA DE VARONA", "IE 001 MARIA CONCEPCION RAMOS CAMPOS", "IE 14007", "IE 14102 ELVIRA CASTRO DE QUIROS", "IE 14003", "IE 15004", "IE 15005", "IE 15049", "IE 20124", "IE 20140", 
            "IE 20149 SAN JUAN DE CURUMUY", "IE 20197 JOSE OLAYA", "IE 20457 CRISTO REY", "IE 20845 LOS ANGELES", "IEI 002", "IEI 006 PACHITEA", "IEP ADVENTISTA PIURA", "IEP CORONEL JOSE JOAQUIN INCLAN", "IEP EL TRIUNFO", "IEP HOGAR SAN ANTONIO", "IEP INNOVA SCHOOLS", 
            "IEP LUIS JOSE CASTELLA", "IEP PROYECTO TRIUNFO", "IEP SANTA MARIA ILUMINADA", "IES CETPRO HERMENEGILDO VARGAS", "UNIVERSIDAD DE PIURA I", "UNIVERSIDAD DE PIURA II", ""],
    //CASTILLA
    'castilla': ["IE AGROPECUARIO 07", "IE CAP FAP JOSE ABELARDO QUIÑONES", "IE JOSE CARLOS MARIATEGUI", "IE JOSE MARIA ESCRIBA DE BALAGUER", "IE LOS ANGELITOSS DE SAN ANTONIO PRIMARIA - SECUNDARIA", "IE LOS PASITOS PRIMARIA", "IE MANUEL SCORZA", "IE MARIA GORETTI", "IE PARROQUIAL NIÑO JESUS DE PRAGA",
            "IE PUBLICA MILITAR PEDRO RUIZ GALLO", "IE SAN BERNARDO", "IE TENIENTE MIGUEL CORTES DEL CASTILLO", "IE 14112 AUGUSTO TIMANA SOSA", "IE 14113 VICENTE ARTEMIO PASAPERA PATIÑO", "IE 14114", "IE 14116 SAN MARTIN DE PORRAS", "IE 12118 MARINA PURIZACA BENITES", "IE 14120",
            "IE 15014 MANUEL HIDALGO CARNERO", "IE 15015 HERORES DEL CENEPA", "IE 15016 SAGRADA FAMILIA", "IE 15035 FELIX JOAQUIN SEMINARIO ECHEANDA", "IE 1518", "IE 15350 SAN FRANCISCO DE ASIS", "IE 162 JESUS DIVINA MISERICORDIA", "IE 20134", "IE 785", "IEI 1031", "IEP DE APLICACIÓN PRIVADA CARLOTA RAMOS DE SANTOYA-UNP",
            "IEP IDEPUNP", "IEP JAVIER PEREZ DE CUELLAR", "UNIVERSIDAD NACIONAL DE PIURA - PUERTA 1", "UNIVERSIDAD NACIONAL DE PIURA - PUERTA 2", "UNIVERSIDAD NACIONAL DE PIURA - PUERTA 3", "UNIVERSIDAD NACIONAL DE PIURA - PUERTA 4"],
    //CATACAOS
    'catacaos': ["CEBE HEROICA VILLA", "CLUB RECREACIONAL COSTA AZUL", "IE 747", "IE JOSE CARLOS MARIATEGUI LA CHIRA", "IE JUAN DE MORI", "IE MARINAO DIAZ", "IE 028", "IE 092", "IE 1323", "IE 1331 CP VILLA PEDREGAL GRANE", "IE 14031", "IE 14036 SAN MIGUEL ARCANGEL", "IE 14038", "IE 14039", "IE 14044", "IE 15008 CRISTO REY", 
            "IE 15009 NUESTRA SEÑORA DE LAS MERCEDES", "IE 15324", "IE 20150", "IE 364 MANUEL W HILBECK RAMOS", "IE 393", "IE 412 SAGRADA FAMILIA", "IEI 003 NIÑO JESUS", "IEI 1324 CP LA CAMPIÑA", "IEP ANGEL DE LA GUARDA", "IEP BETEL CASA DE DIOS", "IEP EXCELENCIA", "IEP LOS AGUILUCHOS DE EMAUS", 
            "IEP RUMBO AL TRIUNFO", "IEP RUMBO AL TRIUNFO", "IEP SAN DIMAS", "IEP SAN JUAN BAUTISTA", "IEP SAN JUDAS TADEO", "IEP SANTA MARRIA"],
    //LA ARENA
    'la arena': ["CEBA 14121", "CEPTRO LA ARENA", "IE DIVINO MAESTRO", "IE JOSE ANTONIO ENCINAS", "IE MARIA RICARDO PALMA", "IE 14123", "IE 14126", "IE 170 NIÑO JESUS DE PRAGA", "IE 20041", "IE 20451", "IE 26 N° 14947", "IE 915"],
    //LA UNION
    'la union': ["IE HERMANOS MELENDEZ", "IE JUAN VELASCO ALVARADO", "IE LIBERTADORES DE AMERICA", "IE SECUNDARIA MIGUEL GRAU", "IE 14059", "IE 14070 JESUS ES MI MAESTRO", "IEP RICARDO PALMA SECUNDARIA", "IEP RICARDO PALMA-INICIAL-PRIMARIA", "IEP SANTA BERNARDITA", "IESTP LA UNION"],
    //LAS LOMAS
    'las lomas': ["CENTRO EDUCATIVO TECNICO PRODUCTIVO SAN LORENZO", "IE 013", "IE 14132", "IE 14135", "IE 14925", "IE 14926", "IE 15315 HUACHUMA ALTA LAS LOMAS", "IE 15396", "IE 27005 NUESTRA SEÑORA DE GUADALUPE", "IEI SANTA ROSA DE LIMA", 
            "INSTITUCION NACIONAL AGROPECUARIA 96", "SALON COMUNAL DEL AA HH SUIPIRA"],
    //TAMBO GRANDE
    'tambo grande': ["IE 15193 GIGANTES DEL CENEPA", "IE HORACIO ZEBALLOS GÁMEZ - MALIGAS", "IE JORGE CHAVEZ", "IE JOSE ASUNCION PALACIOS ARAMBULO", "IE JULIO C TELLO", "IE MANUEL TOMAS ECHEANDIA ESPINOZA", "IE MARIA DEL CISNE", "IE MIGUEL GRAU", 
            "IE SAN LORENZO", "IE TECNICO MARIA TERESA", "IE 14139 CLARA MARIA VALLADARES", "IE 14144 SANTA ROSA", "IE 14145 SANTA JULIA BILLIART", "IE 14146 VILLA LA PEÑITA", "IE 295 DR CARLOS CUETO FERNANDINI", "IE 920 ALMIRANTE MIGUEL GRAU", 
            "IE 15018 CORONEL ANDRES RAZURI", "IE 15034 SAN ISIDRIO 10-4", "IE 15105", "IE 15111 PRIMARIO", "IE 15111 SECUNDARIO", "IE 15113", "IE 15115", "IE 20152 LOCUTO", "IE 20153", "IE 24 DE JUNIO", "IE 469", "IEI 37 ANDRES RAZURI", "IEI 371", 
            "IEI 449 LA RITA", "IEP CEGNE NIÑO JESUS DE PRAGA", "IEP CESAR VALLEJO", "IEP JEAN PIAGET", "IEP JEAN PIAGET - NIVEL INICIAL", "IEP SAN MARCOS", "IEP SOCRATES", "IEP SOCRATES SECUNDARIA", "IESTP SAN MARTIN DE PORRES", "INA 54", "LA CASA DE LA CULTURA"],
    //CURA MORI
    'cura mori': ["IE CRFA LAS CAPULLANAS", "IE FEDERICO VILLAREAL", "IE 14053", "IE 20469", "IEI 386", "IE14003"],
    //EL TALLAN
    'el tallan': ["IE EL TALLAN", "IE MANUEL SCORZA","IE 14081"],
    //VEINTISEIS DE OCTUBRE 
    'veintiseis de octubre': ["ESCUELA DE EDUCACIÓN SUPERIOR PEDAGÓGICA PÚBLICA PIURA", "IE ALMIRANTE MIGUEL GRAU", "IE EMILIA BARCIA BONIFFATI", "IE FE Y ALEGRIA N 49", "I.E JORGE BASADDRE", "IE NUESTRA SEÑORA DEL PERPETUO SOCORRO", "IE NUESTRA SEÑORA DEL PILAR", 
            "IE SAN JOSE", "IE SAN JUAN BAUTISTA", "IE SEÑOR DE LA DIVINA", "IE 019 SAGRADO CORAZÓN DE JESÚS", "IE 020", "IE 024", "IE 1372", "IE 1386 MICAELA BASTIDAS", "IE 1392", "IE 14005 LUCIA ESTELA ECHEANDIA ALTUNA", "IE 14012 SAN MARTIN DE PORRES", 
            "IE 15110 JOSÉ GABRIEL CONDORCANQUI", "IE 15282", "IE 20128", "IE 20440", "IE 20463 MONSEÑOR RAMÓN ZUBIETA", "IE 754", "IEI 071", "IEI 762", "IEI PARROQUIAL ANGEL DE LA GUARDA", "IEI 004 GUILERMO GULMAN LAPOUBLE", "IEI 018 DOMINGO SAVIO", "IEI 1374", 
            "IEI 744", "IEP ANTONIO RAYMONDI", "IEP DIVINO NIÑO JESUS", "I.E.P GENNIUS SCHOOL", "IEP INMACULADA CONCEPCION", "IEP ISAAC NEWTON", "IEP JESUS MARIA", "IEP LAS PALMAS DE PIURA", "IEP LEWIS HENRY MORGAN", "IEP MIXTA JESUS DE NAZARET PRIMARIA", 
            "IEP VILLA LUNA", "IESTP ALMIRANTE MIGUEL GRAU", "LOCAL COMUNAL", "LOCAL COMUNAL 11 DE ABRIL", "SALON COMUNAL DEL CENTRO URBANO SAN MARTIN", "SENCICO ZONAL PIURA", "15177 JOSE OLAYA BALANDRA"],
    
    'frias':["CASINO DE EMPLEADOS CIVILES DEL EJÉRCITO"],
    // Agrega más locales para otros distritos
};

// Actualizar las provincias cuando se seleccione un departamento
function actualizarProvincias() {
    var selectDepartamento = document.getElementById("departamento").value;
    var selectProvincia = document.getElementById("provincia");
    var selectDistrito = document.getElementById("distrito");
    
    //Limpiar las provincias y distritos
    selectProvincia.innerHTML = '<option value="">-- SELECCIONE --</option>';
    selectDistrito.innerHTML = '<option value="">-- SELECCIONE --</option>';

    //Limpiar las provincias correspondientes
    if (provinciasPorDepartamento[selectDepartamento]) {
        provinciasPorDepartamento[selectDepartamento].forEach(function(provincia) {
            var option = document.createElement("option");
            option.value = provincia.nombre.toLowerCase();
            option.text = provincia.nombre;
            selectProvincia.appendChild(option);
        });
    }
}

// Actualizar los distritos cuando se seleccione una provincia
function actualizarDistritos() {
    var selectDepartamento = document.getElementById("departamento").value;
    var selectProvincia = document.getElementById("provincia").value;
    var selectDistrito = document.getElementById("distrito");
    
    //Limpiar distritos
    selectDistrito.innerHTML = '<option value="">-- SELECCIONE --</option>';

    //Buscar las provincias seleccionadas y llenar los distritos correspondientes
    var provincias = provinciasPorDepartamento[selectDepartamento];
    var provinciaSeleccionada = provincias.find(prov => prov.nombre.toLowerCase() === selectProvincia);
    
    if (provinciaSeleccionada) {
        provinciaSeleccionada.distritos.forEach(function(distrito) {
            var option = document.createElement("option");
            option.value = distrito.toLowerCase();
            option.text = distrito;
            selectDistrito.appendChild(option);
        });
    }
}

//Actualizar los locales seleccionados
function actualizarLocales() {
    var selectDistrito = document.getElementById("distrito").value;
    var selectLocal = document.getElementById("local");

    selectLocal.innerHTML = '<option value="">-- SELECCIONE --</option>';

    if (localesPorDistrito[selectDistrito]) {
        localesPorDistrito[selectDistrito].forEach(function(local) {
            var option = document.createElement("option");
            option.value = local;
            option.text = local;
            selectLocal.appendChild(option);
        });
    }

    // Agregar evento de redireccionamiento cuando se seleccione un local
    selectLocal.addEventListener("change", function() {
        var localSeleccionado = selectLocal.value;
        if (localSeleccionado) {
            // Redireccionar a un archivo HTML en la carpeta "actas"
            window.location.href = "/actas/" + encodeURIComponent(localSeleccionado) + ".html";
        }
    });    
}

// Inicializar la selección guardada (opcional si deseas mantener la selección anterior)
window.onload = function() {
    actualizarProvincias();
};


// Selecciona todos los elementos con la clase 'mesa9'
var mesas = document.querySelectorAll('.mesa9');

// Itera sobre cada elemento y le agrega el evento 'click'
mesas.forEach(function(mesa) {
    mesa.addEventListener('click', function() {
        // Obtiene la URL del atributo 'data-url'
        var url = mesa.getAttribute('data-url');
        if (url) {
            // Redirige al archivo HTML correspondiente
            window.location.href = url;
        }
    });
});


// PLUS

function togglePanel(element) {
    element.classList.toggle('active');
    let panel = element.nextElementSibling;

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}



