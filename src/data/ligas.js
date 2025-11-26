export const ligasData = [
    {
        id: 1,
        name: 'Liga Premier',
        teams: 12,
        status: 'En curso',
        color: '#3b82f6',
        description: 'La máxima categoría del fútbol sala local. Los mejores equipos compiten por el trofeo dorado.',
        jornadaActual: 8,
        jornadasTotales: 22,
        equipos: [
            { id: 101, nombre: 'Los Tigres', puntos: 21, jugados: 8, ganados: 7, empatados: 0, perdidos: 1 },
            { id: 102, nombre: 'Águilas FC', puntos: 19, jugados: 8, ganados: 6, empatados: 1, perdidos: 1 },
            { id: 103, nombre: 'Deportivo Central', puntos: 15, jugados: 8, ganados: 5, empatados: 0, perdidos: 3 },
            { id: 104, nombre: 'Atlético Norte', puntos: 12, jugados: 8, ganados: 4, empatados: 0, perdidos: 4 },
        ]
    },
    {
        id: 2,
        name: 'Copa Nacional',
        teams: 16,
        status: 'Próximamente',
        color: '#f59e0b',
        description: 'Torneo de eliminación directa donde participan equipos de todas las categorías.',
        jornadaActual: 0,
        jornadasTotales: 5,
        equipos: []
    },
    {
        id: 3,
        name: 'Torneo Relámpago',
        teams: 8,
        status: 'En curso',
        color: '#10b981',
        description: 'Torneo rápido de fin de semana. Alta intensidad y premios en efectivo.',
        jornadaActual: 2,
        jornadasTotales: 3,
        equipos: [
            { id: 301, nombre: 'Rayos', puntos: 6, jugados: 2, ganados: 2, empatados: 0, perdidos: 0 },
            { id: 302, nombre: 'Truenos', puntos: 3, jugados: 2, ganados: 1, empatados: 0, perdidos: 1 },
        ]
    },
    {
        id: 4,
        name: 'Liga Juvenil',
        teams: 10,
        status: 'Inscripciones',
        color: '#8b5cf6',
        description: 'Espacio para el desarrollo de nuevos talentos sub-18.',
        jornadaActual: 0,
        jornadasTotales: 18,
        equipos: []
    },
]
