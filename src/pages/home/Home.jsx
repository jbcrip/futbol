import { useNavigate } from 'react-router-dom'
import { ligasData } from '../../data/ligas'
import './Home.css'

export default function Home() {
    const navigate = useNavigate()

    // Usamos los datos reales importados
    const leagues = ligasData

    const news = [
        {
            id: 1,
            title: 'Los Tigres se coronan campeones',
            excerpt: 'En un emocionante partido final, Los Tigres vencieron 4-3 a Las Águilas',
            date: '2025-11-25',
            image: '🏆',
            category: 'Resultados'
        },
        {
            id: 2,
            title: 'Nueva temporada inicia en Diciembre',
            excerpt: 'La Liga Premier anuncia el calendario completo para la temporada 2026',
            date: '2025-11-24',
            image: '📅',
            category: 'Anuncios'
        },
        {
            id: 3,
            title: 'Récord de asistencia en el estadio',
            excerpt: 'Más de 500 aficionados presenciaron el clásico del domingo',
            date: '2025-11-23',
            image: '👥',
            category: 'Destacado'
        },
    ]

    const upcomingEvents = [
        {
            id: 1,
            title: 'Final Copa Nacional',
            date: '2025-12-05',
            time: '19:00',
            location: 'Estadio Principal',
            teams: 'Tigres vs Águilas',
            type: 'final'
        },
        {
            id: 2,
            title: 'Jornada 8 - Liga Premier',
            date: '2025-12-08',
            time: '18:00',
            location: 'Complejo Deportivo',
            teams: '6 partidos',
            type: 'jornada'
        },
        {
            id: 3,
            title: 'Torneo Relámpago',
            date: '2025-12-12',
            time: '09:00',
            location: 'Cancha Municipal',
            teams: '8 equipos',
            type: 'torneo'
        },
    ]

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="gradient-text">Liga Central</span>
                    </h1>
                    <p className="hero-subtitle">
                        La plataforma definitiva para gestión de torneos de fútbol sala
                    </p>
                    <div className="hero-stats">
                        <div className="stat-card">
                            <div className="stat-number">4</div>
                            <div className="stat-label">Ligas Activas</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">46</div>
                            <div className="stat-label">Equipos</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">320+</div>
                            <div className="stat-label">Jugadores</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leagues Section */}
            <section className="leagues-section">
                <h2 className="section-title">
                    <span className="title-icon">🏆</span>
                    Ligas y Torneos
                </h2>
                <div className="leagues-grid">
                    {leagues.map((league) => (
                        <div
                            key={league.id}
                            className="league-card"
                            style={{ '--league-color': league.color }}
                            onClick={() => navigate(`/ligas/${league.id}`)}
                        >
                            <div className="league-header">
                                <h3>{league.name}</h3>
                                <span className={`league-status ${league.status.toLowerCase().replace(' ', '-')}`}>
                                    {league.status}
                                </span>
                            </div>
                            <div className="league-info">
                                <div className="info-item">
                                    <span className="info-icon">👥</span>
                                    <span>{league.teams} equipos</span>
                                </div>
                            </div>
                            <button className="league-btn">Ver detalles →</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* News Section */}
            <section className="news-section">
                <h2 className="section-title">
                    <span className="title-icon">📰</span>
                    Últimas Noticias
                </h2>
                <div className="news-grid">
                    {news.map((item) => (
                        <article key={item.id} className="news-card">
                            <div className="news-image">
                                <span className="news-emoji">{item.image}</span>
                                <span className="news-category">{item.category}</span>
                            </div>
                            <div className="news-content">
                                <h3 className="news-title">{item.title}</h3>
                                <p className="news-excerpt">{item.excerpt}</p>
                                <div className="news-footer">
                                    <span className="news-date">
                                        📅 {new Date(item.date).toLocaleDateString('es-ES', {
                                            day: 'numeric',
                                            month: 'long'
                                        })}
                                    </span>
                                    <a href="#" className="news-link">Leer más →</a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="events-section">
                <h2 className="section-title">
                    <span className="title-icon">📅</span>
                    Próximos Eventos
                </h2>
                <div className="events-timeline">
                    {upcomingEvents.map((event) => (
                        <div key={event.id} className={`event-card event-${event.type}`}>
                            <div className="event-date-badge">
                                <div className="event-day">
                                    {new Date(event.date).getDate()}
                                </div>
                                <div className="event-month">
                                    {new Date(event.date).toLocaleDateString('es-ES', { month: 'short' })}
                                </div>
                            </div>
                            <div className="event-details">
                                <h3 className="event-title">{event.title}</h3>
                                <div className="event-info">
                                    <span className="event-info-item">
                                        🕐 {event.time}
                                    </span>
                                    <span className="event-info-item">
                                        📍 {event.location}
                                    </span>
                                    <span className="event-info-item">
                                        ⚽ {event.teams}
                                    </span>
                                </div>
                            </div>
                            <button className="event-btn">
                                {event.type === 'final' ? '🎫 Reservar' : 'Ver más'}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2>¿Listo para unirte?</h2>
                    <p>Inscribe tu equipo y participa en nuestros torneos</p>
                    <div className="cta-buttons">
                        <button className="cta-btn primary">Inscribir Equipo</button>
                        <button className="cta-btn secondary">Ver Calendario</button>
                    </div>
                </div>
            </section>
        </div>
    )
}
