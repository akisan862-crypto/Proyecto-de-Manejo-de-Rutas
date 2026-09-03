import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home, ListaCitas, DetalleCita, CarnetDigital, PreDiagnostico } from './Pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="vet-nav">
        <Link to="/" className="logo">☁️ VetCloud</Link>
        <Link to="/">Inicio</Link>
        <Link to="/citas">Agenda</Link>
        <Link to="/carnet">Carnet Digital</Link>
        <Link to="/triaje">Triaje IA</Link>
      </nav>

      <main className="vet-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/citas" element={<ListaCitas />} />
          <Route path="/citas/:id" element={<DetalleCita />} />
          <Route path="/carnet" element={<CarnetDigital />} />
          <Route path="/triaje" element={<PreDiagnostico />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;