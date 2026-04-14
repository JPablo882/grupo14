import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="main">
      <div className="header">
        <div>
          <h1>Dashboard</h1>
          <p className="subtitle">Vista general de la constructora</p>
        </div>

        <div className="user" onClick={() => setOpen(!open)}>
          👤 <span>Admin</span>
          {open && (
            <div className="dropdown">
              <button onClick={logout}>Cerrar sesión</button>
            </div>
          )}
        </div>
      </div>

      {/* TARJETAS DE ESTADÍSTICAS */}
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-header">
            <div className="icon-box green-bg">💵</div>
            <span className="trend positive">+12.5%</span>
          </div>
          <h3>$850,000</h3>
          <p>Ventas del Mes</p>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="icon-box blue-bg">🏢</div>
            <span className="trend positive">+3</span>
          </div>
          <h3>23</h3>
          <p>Obras Activas</p>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="icon-box purple-bg">👥</div>
            <span className="trend positive">+8</span>
          </div>
          <h3>47</h3>
          <p>Oportunidades</p>
        </div>

        <div className="stat-card">
          <div className="stat-header">
            <div className="icon-box orange-bg">⚠️</div>
            <span className="trend negative">-2</span>
          </div>
          <h3>5</h3>
          <p>Alertas Pendientes</p>
        </div>
      </div>

      {/* SECCIÓN DE GRÁFICOS (VISUAL) */}
      <div className="charts-grid">
        <div className="chart-placeholder">
          <h4>Ventas Mensuales</h4>
          <div className="fake-chart line-chart"></div>
        </div>
        <div className="chart-placeholder">
          <h4>Proyectos por Estado</h4>
          <div className="fake-chart pie-chart"></div>
        </div>
      </div>

      {/* SECCIÓN DE TABLA (VISUAL) */}
      <div className="table-container">
        <div className="table-header">
          <h4>Proyectos en Curso</h4>
          <button className="view-all">Ver todos →</button>
        </div>
        <div className="fake-table">
          <div className="table-row header-row">
            <span>Nombre</span><span>Estado</span><span>Progreso</span>
          </div>
          <div className="table-row">
            <span>Edificio Olivos</span><span className="status active">En curso</span><span>65%</span>
          </div>
        </div>
      </div>
    </div>
  );
}