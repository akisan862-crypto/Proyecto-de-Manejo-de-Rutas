import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

const citasMock = [
  { id: 1, paciente: 'Mishi', tipo: 'Gato', doctor: 'Dr. Silva', especialidad: 'Vacunación', hora: '10:00 AM', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80' },
  { id: 2, paciente: 'Firulais', tipo: 'Perro', doctor: 'Dra. Herrera', especialidad: 'Revisión General', hora: '11:30 AM', img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=300&q=80' }
];

export function Home() {
  return (
    <div className="home-container">
      <h2>VetCloud Clinic ☁️🐾</h2>
      <p style={{ color: '#64748b', fontSize: '1.2rem' }}>Innovación y cuidado para tus mejores amigos.</p>
      <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80" alt="Perrito feliz" className="home-img" />
      <br />
      <Link to="/citas" className="btn-primary">Gestionar Agenda</Link>
    </div>
  );
}

export function ListaCitas() {
  return (
    <div>
      <h2 style={{ color: '#0284c7' }}>Agenda de Hoy</h2>
      <ul className="appointment-list">
        {citasMock.map(cita => (
          <li key={cita.id} className="appointment-card">
            <div>
              <strong style={{ display: 'block', fontSize: '1.2rem', color: '#0f172a' }}>{cita.paciente}</strong>
              <span style={{ color: '#64748b' }}>{cita.hora}</span>
            </div>
            <Link to={`/citas/${cita.id}`} className="btn-secondary">Expediente</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function DetalleCita() {
  const { id } = useParams();
  const cita = citasMock.find(c => c.id === parseInt(id));

  if (!cita) return <h2>Expediente no encontrado</h2>;

  return (
    <div className="detail-card">
      <img src={cita.img} alt={cita.paciente} className="detail-img" />
      <h2>{cita.paciente}</h2>
      <p><strong>Especie:</strong> {cita.tipo}</p>
      <p><strong>Atiende:</strong> {cita.doctor}</p>
      <p><strong>Motivo:</strong> {cita.especialidad}</p>
      <Link to="/citas" className="btn-primary" style={{ marginTop: '25px' }}>Volver a la agenda</Link>
    </div>
  );
}

// NUEVO: Vista de uso diario para múltiples mascotas
export function CarnetDigital() {
  const misMascotas = [
    { nombre: 'Mishi', tipo: 'Gato 🐈', estado: 'Al día 🟢' },
    { nombre: 'Luna', tipo: 'Gato 🐈', estado: 'Pendiente 🟡' },
    { nombre: 'Salem', tipo: 'Gato 🐈', estado: 'Al día 🟢' },
    { nombre: 'Kira', tipo: 'Gato 🐈', estado: 'Al día 🟢' },
    { nombre: 'Firulais', tipo: 'Perro 🐕', estado: 'Al día 🟢' },
    { nombre: 'Max', tipo: 'Perro 🐕', estado: 'Atrasado 🔴' },
    { nombre: 'Rocky', tipo: 'Perro 🐕', estado: 'Al día 🟢' }
  ];

  return (
    <div>
      <h2 style={{ color: '#0284c7' }}>Carnet Familiar Integrado</h2>
      <p style={{ color: '#64748b' }}>Visualiza el esquema de vacunación de todos tus peludos en un solo lugar.</p>
      <div className="grid-cards">
        {misMascotas.map((m, i) => (
          <div key={i} className="feature-card">
            <h3>{m.nombre}</h3>
            <p>{m.tipo}</p>
            <strong>Vacunas: {m.estado}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

// NUEVO: Función innovadora de pre-diagnóstico
export function PreDiagnostico() {
  const [sintomas, setSintomas] = useState('');
  const [resultado, setResultado] = useState(null);

  const analizarSintomas = () => {
    if (sintomas.length > 5) {
      setResultado("El algoritmo indica posible malestar digestivo leve o estrés. Recomendación: Mantener hidratación y agendar una revisión general. (Este resultado no sustituye la evaluación médica profesional).");
    }
  };

  return (
    <div className="detail-card" style={{ maxWidth: '600px' }}>
      <h2>Triaje Inteligente 🩺</h2>
      <p>Describe cómo se siente tu mascota para obtener una recomendación inmediata.</p>
      <textarea 
        className="input-styled" 
        rows="4" 
        placeholder="Ej. Ha estado muy cansado y no quiere comer sus croquetas..."
        value={sintomas}
        onChange={(e) => setSintomas(e.target.value)}
      />
      <button onClick={analizarSintomas} className="btn-primary" style={{ width: '100%', marginTop: '15px' }}>
        Analizar Síntomas
      </button>
      {resultado && (
        <div style={{ marginTop: '20px', padding: '15px', background: '#f0f9ff', borderRadius: '10px', color: '#0284c7' }}>
          <strong>💡 Sugerencia del sistema:</strong> <br/> {resultado}
        </div>
      )}
    </div>
  );
}