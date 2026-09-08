// datos.js

// ==========================================
// USUARIOS
// ==========================================

const usuarios = [
    // Ejemplo:
    // {
    //     id: 1,
    //     nombre_usuario: "chad",
    //     email: "chad@email.com",
    //     password: "1234",
    //     fecha_registro: "2026-09-08"
    // }
];


// ==========================================
// JUGADORES DE CARRERA
// ==========================================

const jugadores_carrera = [
    // Ejemplo:
    // {
    //     id: 1,
    //     usuario_id: 1,
    //     nombre: "Juan",
    //     apellido: "Perez",
    //     edad: 18,
    //     nacionalidad: "Argentina",
    //     posicion: "DEL",

    //     // Estadisticas del jugador
    //     ritmo: 75,
    //     tiro: 72,
    //     potencia: 70,
    //     resistencia: 68,
    //     pase: 65,
    //     regate: 74,
    //     defensa: 30,

    //     valoracion: 72,

    //     // Equipo actual
    //     equipo_actual_id: 1,

    //     // Puntaje utilizado para el ranking
    //     puntos_carrera: 0
    // }
];


// ==========================================
// ESTADISTICAS TOTALES DE LA CARRERA
// ==========================================

const estadisticas_carrera = [
    // Ejemplo:
    // {
    //     id: 1,
    //     jugador_id: 1,

    //     partidos: 0,
    //     goles: 0,
    //     asistencias: 0,

    //     amarillas: 0,
    //     rojas: 0,

    //     titulos: 0,
    //     titulos_individuales: 0
    // }
];


// ==========================================
// HISTORIAL DE CLUBES
// ==========================================

const historial_clubes = [
    // Ejemplo:
    // {
    //     id: 1,
    //     jugador_id: 1,
    //     equipo_id: 1,

    //     fecha_inicio: "2026-01-01",
    //     fecha_fin: null,

    //     edad_inicio: 18,
    //     edad_fin: null,

    //     partidos: 0,
    //     goles: 0,
    //     asistencias: 0
    // }
];


// ==========================================
// TITULOS
// ==========================================

const titulos = [
    // Ejemplo de titulo de club:
    // {
    //     id: 1,
    //     jugador_id: 1,
    //     nombre: "Liga Profesional",
    //     tipo: "club",
    //     temporada: 2027,
    //     equipo_id: 1
    // },

];
const premios_individuales = [
    // {
    //     id: 1,
    //     jugador_id: 1,
    //     nombre: "Botin de Oro",
    //     temporada: 2028,
    //     equipo_id: 15
    // }
];

// ==========================================
// PARTIDOS
// ==========================================

const partidos = [
    // Ejemplo:
    // {
    //     id: 1,
    //     jugador_id: 1,
    //     equipo_id: 1,

    //     temporada: 2027,
    //     competencia: "Liga Profesional",

    //     rival: "Boca Juniors",
    //     resultado: "Victoria",

    //     goles: 1,
    //     asistencias: 1,

    //     amarillas: 0,
    //     rojas: 0
    // }
];

// temporadas 
const temporadas = [
    {
        id: 1,
        año: 2026
    },
    {
        id: 2,
        año: 2027
    },
    {
        id: 3,
        año: 2028
    }
];

// ==========================================
// EQUIPOS
// ==========================================

const equipos = [

    // ======================================
    // PRIMERA DIVISION
    // ======================================

    {
        id: 1,
        nombre: "Argentinos Juniors",
        nombre_oficial: "Asociacion Atletica Argentinos Juniors",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 2,
        nombre: "Estudiantes (Rio Cuarto)",
        nombre_oficial: "Asociacion Atletica Estudiantes",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 3,
        nombre: "Aldosivi",
        nombre_oficial: "Club Atletico Aldosivi",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 4,
        nombre: "Banfield",
        nombre_oficial: "Club Atletico Banfield",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 5,
        nombre: "Barracas Central",
        nombre_oficial: "Club Atletico Barracas Central",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 6,
        nombre: "Belgrano",
        nombre_oficial: "Club Atletico Belgrano",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 7,
        nombre: "Boca Juniors",
        nombre_oficial: "Club Atletico Boca Juniors",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 8,
        nombre: "Central Cordoba",
        nombre_oficial: "Club Atletico Central Cordoba",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 9,
        nombre: "Gimnasia (Mendoza)",
        nombre_oficial: "Club Atletico Gimnasia y Esgrima de Mendoza",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 10,
        nombre: "Huracan",
        nombre_oficial: "Club Atletico Huracan",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 11,
        nombre: "Independiente",
        nombre_oficial: "Club Atletico Independiente",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 12,
        nombre: "Lanus",
        nombre_oficial: "Club Atletico Lanus",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 13,
        nombre: "Newells Old Boys",
        nombre_oficial: "Club Atletico Newells Old Boys",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 14,
        nombre: "Platense",
        nombre_oficial: "Club Atletico Platense",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 15,
        nombre: "River Plate",
        nombre_oficial: "Club Atletico River Plate",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 16,
        nombre: "Rosario Central",
        nombre_oficial: "Club Atletico Rosario Central",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 17,
        nombre: "San Lorenzo",
        nombre_oficial: "Club Atletico San Lorenzo de Almagro",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 18,
        nombre: "Sarmiento",
        nombre_oficial: "Club Atletico Sarmiento",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 19,
        nombre: "Talleres",
        nombre_oficial: "Club Atletico Talleres",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 20,
        nombre: "Tigre",
        nombre_oficial: "Club Atletico Tigre",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 21,
        nombre: "Atletico Tucuman",
        nombre_oficial: "Club Atletico Tucuman",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 22,
        nombre: "Union",
        nombre_oficial: "Club Atletico Union",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 23,
        nombre: "Velez Sarsfield",
        nombre_oficial: "Club Atletico Velez Sarsfield",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 24,
        nombre: "Gimnasia (La Plata)",
        nombre_oficial: "Club de Gimnasia y Esgrima La Plata",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 25,
        nombre: "Deportivo Riestra",
        nombre_oficial: "Club Deportivo Riestra",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 26,
        nombre: "Estudiantes (La Plata)",
        nombre_oficial: "Club Estudiantes de La Plata",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 27,
        nombre: "Defensa y Justicia",
        nombre_oficial: "Club Social y Deportivo Defensa y Justicia",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 28,
        nombre: "Independiente Rivadavia",
        nombre_oficial: "Club Sportivo Independiente Rivadavia",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 29,
        nombre: "Instituto",
        nombre_oficial: "Instituto Atletico Central Cordoba",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },

    {
        id: 30,
        nombre: "Racing Club",
        nombre_oficial: "Racing Club",
        pais: "Argentina",
        division: "Primera Division",
        temporada: 2026,
        zona: null
    },


    // ======================================
    // PRIMERA NACIONAL - ZONA A
    // ======================================

    {
        id: 31,
        nombre: "Racing de Cordoba",
        nombre_oficial: "Racing Club de Cordoba",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "A"
    },

    {
        id: 32,
        nombre: "Estudiantes (Buenos Aires)",
        nombre_oficial: "Club Atletico Estudiantes",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "A"
    },

    {
        id: 33,
        nombre: "All Boys",
        nombre_oficial: "Club Atletico All Boys",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "A"
    },

    {
        id: 34,
        nombre: "Mitre",
        nombre_oficial: "Club Atletico Mitre",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "A"
    },

    {
        id: 35,
        nombre: "Los Andes",
        nombre_oficial: "Club Atletico Los Andes",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "A"
    },

    {
        id: 36,
        nombre: "Almirante Brown",
        nombre_oficial: "Club Almirante Brown",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "A"
    },

    {
        id: 37,
        nombre: "Godoy Cruz",
        nombre_oficial: "Club Deportivo Godoy Cruz Antonio Tomba",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "A"
    },

    {
        id: 38,
        nombre: "Ciudad de Bolivar",
        nombre_oficial: "Club Ciudad de Bolivar",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "A"
    },

    {
        id: 39,
        nombre: "Deportivo Moron",
        nombre_oficial: "Club Deportivo Moron",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "A"
    },

    {
        id: 40,
        nombre: "Defensores de Belgrano",
        nombre_oficial: "Club Atletico Defensores de Belgrano",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "A"
    },

    {
        id: 41,
        nombre: "Colon",
        nombre_oficial: "Club Atletico Colon",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "A"
    },

    {
        id: 42,
        nombre: "Deportivo Madryn",
        nombre_oficial: "Club Social y Deportivo Madryn",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "A"
    },

    {
        id: 43,
        nombre: "San Miguel",
        nombre_oficial: "Club Atletico San Miguel",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "A"
    },

    {
        id: 44,
        nombre: "Central Norte",
        nombre_oficial: "Club Atletico Central Norte",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "A"
    },

    {
        id: 45,
        nombre: "San Telmo",
        nombre_oficial: "Club Atletico San Telmo",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "A"
    },

    {
        id: 46,
        nombre: "Ferro Carril Oeste",
        nombre_oficial: "Club Ferro Carril Oeste",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "A"
    },

    {
        id: 47,
        nombre: "Acassuso",
        nombre_oficial: "Club Atletico Acassuso",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "A"
    },

    {
        id: 48,
        nombre: "Chaco For Ever",
        nombre_oficial: "Club Atletico Chaco For Ever",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "A"
    },


    // ======================================
    // PRIMERA NACIONAL - ZONA B
    // ======================================

    {
        id: 49,
        nombre: "Gimnasia de Jujuy",
        nombre_oficial: "Club Atletico Gimnasia y Esgrima de Jujuy",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "B"
    },

    {
        id: 50,
        nombre: "Ferro Carril Midland",
        nombre_oficial: "Club Atletico Ferrocarril Midland",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "B"
    },

    {
        id: 51,
        nombre: "Atlanta",
        nombre_oficial: "Club Atletico Atlanta",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "B"
    },

    {
        id: 52,
        nombre: "Quilmes",
        nombre_oficial: "Quilmes Atletico Club",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "B"
    },

    {
        id: 53,
        nombre: "Gimnasia y Tiro",
        nombre_oficial: "Club de Gimnasia y Tiro",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "B"
    },

    {
        id: 54,
        nombre: "Colegiales",
        nombre_oficial: "Club Atletico Colegiales",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "B"
    },

    {
        id: 55,
        nombre: "San Martin (Tucuman)",
        nombre_oficial: "Club Atletico San Martin",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "B"
    },

    {
        id: 56,
        nombre: "Patronato",
        nombre_oficial: "Club Atletico Patronato",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "B"
    },

    {
        id: 57,
        nombre: "Atletico de Rafaela",
        nombre_oficial: "Asociacion Mutual Social y Deportiva Atletico de Rafaela",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "B"
    },

    {
        id: 58,
        nombre: "Almagro",
        nombre_oficial: "Club Almagro",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "B"
    },

    {
        id: 59,
        nombre: "Agropecuario Argentino",
        nombre_oficial: "Club Agropecuario Argentino",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "B"
    },

    {
        id: 60,
        nombre: "Deportivo Maipu",
        nombre_oficial: "Club Deportivo Maipu",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "B"
    },

    {
        id: 61,
        nombre: "Tristan Suarez",
        nombre_oficial: "Club Social y Deportivo Tristan Suarez",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "B"
    },

    {
        id: 62,
        nombre: "Temperley",
        nombre_oficial: "Club Atletico Temperley",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "B"
    },

    {
        id: 63,
        nombre: "Guemes",
        nombre_oficial: "Club Atletico Guemes",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "B"
    },

    {
        id: 64,
        nombre: "Nueva Chicago",
        nombre_oficial: "Club Atletico Nueva Chicago",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "B"
    },

    {
        id: 65,
        nombre: "Chacarita Juniors",
        nombre_oficial: "Club Atletico Chacarita Juniors",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "B"
    },

    {
        id: 66,
        nombre: "San Martin (San Juan)",
        nombre_oficial: "Club Atletico San Martin",
        pais: "Argentina",
        division: "Primera Nacional",
        temporada: 2026,
        zona: "B"
    }
];


// ==========================================
// COMPETICIONES / TITULOS DISPONIBLES
// ==========================================

const competiciones = [

    // ======================================
    // ARGENTINA
    // ======================================

    {
        id: 1,
        nombre: "Primera División",
        tipo: "liga",
        ambito: "nacional",
        continente: "America",
        pais: "Argentina"
    },

    {
        id: 2,
        nombre: "Primera Nacional",
        tipo: "liga",
        ambito: "nacional",
        continente: "America",
        pais: "Argentina"
    },

    {
        id: 3,
        nombre: "Copa Argentina",
        tipo: "copa",
        ambito: "nacional",
        continente: "America",
        pais: "Argentina"
    },

    {
        id: 4,
        nombre: "Supercopa Argentina",
        tipo: "supercopa",
        ambito: "nacional",
        continente: "America",
        pais: "Argentina"
    },

    {
        id: 5,
        nombre: "Trofeo de Campeones",
        tipo: "supercopa",
        ambito: "nacional",
        continente: "America",
        pais: "Argentina"
    },


    // ======================================
    // CONMEBOL - AMERICA
    // ======================================

    {
        id: 6,
        nombre: "Copa Libertadores",
        tipo: "copa",
        ambito: "internacional",
        continente: "America",
        organizacion: "CONMEBOL"
    },

    {
        id: 7,
        nombre: "Copa Sudamericana",
        tipo: "copa",
        ambito: "internacional",
        continente: "America",
        organizacion: "CONMEBOL"
    },

    {
        id: 8,
        nombre: "Recopa Sudamericana",
        tipo: "supercopa",
        ambito: "internacional",
        continente: "America",
        organizacion: "CONMEBOL"
    },

    {
        id: 9,
        nombre: "Copa Interamericana",
        tipo: "copa",
        ambito: "internacional",
        continente: "America",
        organizacion: "CONCACAF/CONMEBOL"
    }

];

// ==========================================
// EXPORTAR DATOS
// ==========================================

module.exports = {
    usuarios,
    jugadores_carrera,
    estadisticas_carrera,
    historial_clubes,
    partidos,
    equipos,
    competiciones,
    titulos,
    premios_individuales,
    temporadas
};
