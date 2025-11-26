import { useNavigate } from 'react-router-dom'
import { ligasData } from '../../data/ligas'
import './Ligas.css'

export default function Ligas() {
    const navigate = useNavigate()

    return (
        <div className="ligas-page fade-in">
            <div className="container">
                <header className="ligas-header">
                    <h1 className="page-title">Ligas y Torneos</h1>
                    <p className="page-subtitle">Explora todas las competiciones activas y próximas</p>
                </header>

                <div className="ligas-grid-full">
                    {ligasData.map((liga) => (
                        <div
                            key={liga.id}
                            className="liga-card-full"
                            onClick={() => navigate(`/ligas/${liga.id}`)}
                        >
                            <div className="liga-card-header" style={{ borderLeftColor: liga.color }}>
                                <div className="liga-title-group">
                                    <h3>{liga.name}</h3>
                                    <span className={`liga-status ${liga.status.toLowerCase().replace(' ', '-')}`}>
                                        {liga.status}
                                    </span>
                                </div>
                                <div className="liga-icon">🏆</div>
                            </div>

                            <div className="liga-card-body">
                                <p className="liga-description">{liga.description}</p>

                                <div className="liga-stats">
                                    <div className="stat-item">
                                        <span className="stat-value">{liga.teams}</span>
                                        <span className="stat-label">Equipos</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-value">{liga.jornadasTotales}</span>
                                        <span className="stat-label">Jornadas</span>
                                    </div>
                                    <div className="stat-item">
                                        <span className="stat-value">{liga.jornadaActual}</span>
                                        <span className="stat-label">Actual</span>
                                    </div>
                                </div>
                            </div>

                            <div className="liga-card-footer">
                                <button className="ver-detalles-btn">Ver Detalles Completo →</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
