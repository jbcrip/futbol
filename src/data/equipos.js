export const equiposData = [
    // === LIGA PREMIER (ID Liga: 1) ===
    {
        id: 101,
        nombre: 'Los Tigres',
        ligaId: 1,
        escudo: '🐯',
        color: '#f59e0b',
        fundacion: '2018',
        entrenador: 'Ricardo Ferretti',
        estadio: 'Cancha 1 - Complejo Norte',
        descripcion: 'El equipo más dominante de la temporada, conocido por su ataque agresivo.',
        estadisticas: {
            jugados: 8,
            ganados: 7,
            empatados: 0,
            perdidos: 1,
            golesFavor: 32,
            golesContra: 12,
            puntos: 21
        },
        jugadores: [
            { id: 1, nombre: 'André-Pierre Gignac', dorsal: 10, posicion: 'Delantero', goles: 12, tarjetasA: 1, tarjetasR: 0, foto: '🧔🏻' },
            { id: 2, nombre: 'Nahuel Guzmán', dorsal: 1, posicion: 'Portero', goles: 0, tarjetasA: 2, tarjetasR: 0, foto: '🧤' },
            { id: 3, nombre: 'Guido Pizarro', dorsal: 19, posicion: 'Medio', goles: 3, tarjetasA: 3, tarjetasR: 0, foto: '🏃🏻' },
            { id: 4, nombre: 'Javier Aquino', dorsal: 20, posicion: 'Defensa', goles: 1, tarjetasA: 0, tarjetasR: 0, foto: '🛡️' },
            { id: 5, nombre: 'Luis Quiñones', dorsal: 23, posicion: 'Delantero', goles: 5, tarjetasA: 1, tarjetasR: 0, foto: '⚡' },
            { id: 6, nombre: 'Samir Caetano', dorsal: 3, posicion: 'Defensa', goles: 2, tarjetasA: 4, tarjetasR: 1, foto: '🧱' },
        ]
    },
    {
        id: 102,
        nombre: 'Águilas FC',
        ligaId: 1,
        escudo: '🦅',
        color: '#fcd34d',
        fundacion: '2015',
        entrenador: 'André Jardine',
        estadio: 'Estadio Azteca (Futsal)',
        descripcion: 'Un equipo histórico con una gran afición y estilo de juego técnico.',
        estadisticas: {
            jugados: 8,
            ganados: 6,
            empatados: 1,
            perdidos: 1,
            golesFavor: 28,
            golesContra: 10,
            puntos: 19
        },
        jugadores: [
            { id: 11, nombre: 'Henry Martín', dorsal: 21, posicion: 'Delantero', goles: 10, tarjetasA: 0, tarjetasR: 0, foto: '💪' },
            { id: 12, nombre: 'Luis Malagón', dorsal: 1, posicion: 'Portero', goles: 0, tarjetasA: 0, tarjetasR: 0, foto: '🧤' },
            { id: 13, nombre: 'Álvaro Fidalgo', dorsal: 8, posicion: 'Medio', goles: 4, tarjetasA: 1, tarjetasR: 0, foto: '🎩' },
            { id: 14, nombre: 'Julián Quiñones', dorsal: 33, posicion: 'Delantero', goles: 8, tarjetasA: 2, tarjetasR: 0, foto: '🚀' },
        ]
    },
    {
        id: 103,
        nombre: 'Deportivo Central',
        ligaId: 1,
        escudo: '⚪',
        color: '#ef4444',
        fundacion: '2020',
        entrenador: 'Ignacio Ambriz',
        estadio: 'Polideportivo Central',
        descripcion: 'Equipo joven que ha sorprendido a todos con su disciplina táctica.',
        estadisticas: {
            jugados: 8,
            ganados: 5,
            empatados: 0,
            perdidos: 3,
            golesFavor: 18,
            golesContra: 15,
            puntos: 15
        },
        jugadores: [
            { id: 21, nombre: 'Marcel Ruiz', dorsal: 14, posicion: 'Medio', goles: 3, tarjetasA: 0, tarjetasR: 0, foto: '🧠' },
            { id: 22, nombre: 'Tiago Volpi', dorsal: 1, posicion: 'Portero', goles: 2, tarjetasA: 1, tarjetasR: 0, foto: '🧤' },
        ]
    },

    // === TORNEO RELÁMPAGO (ID Liga: 3) ===
    {
        id: 301,
        nombre: 'Rayos',
        ligaId: 3,
        escudo: '⚡',
        color: '#ef4444',
        fundacion: '2022',
        entrenador: 'Eduardo Fentanes',
        estadio: 'Cancha Rápida 2',
        descripcion: 'Velocidad pura. Especialistas en contraataques letales.',
        estadisticas: {
            jugados: 2,
            ganados: 2,
            empatados: 0,
            perdidos: 0,
            golesFavor: 12,
            golesContra: 4,
            puntos: 6
        },
        jugadores: [
            { id: 31, nombre: 'Diber Cambindo', dorsal: 9, posicion: 'Delantero', goles: 5, tarjetasA: 0, tarjetasR: 0, foto: '🏃🏾' },
        ]
    }
]
