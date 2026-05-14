import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import './App.css';
import Navbar from "./modules/SYS/view/components/Navbar";
import { useEffect } from "react";

function CallbackHandler() {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const usuarioStr = params.get('usuario');

    if (token) {
      localStorage.setItem('token', token);
    }
    if (usuarioStr) {
      localStorage.setItem('usuario', usuarioStr);
    }
  }, []);

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <Navbar />
      <h1>¡Bienvenid@ a Sanos y Salvos!</h1>
      <p>Login exitoso.</p>
    </div>
  );
}

function LoginPage() {
  const loginGoogle = () => {
    window.location.href = "https://ss-gw.onrender.com/oauth2/authorization/google";
  };

  return (
    <main className='login-page'>
      <section className='login-card'>
        <h1>Sanos y Salvos</h1>
        <p>Inicia sesion para continuar</p>
        <button type="button" onClick={loginGoogle}>
          Iniciar con Google
        </button>
      </section>
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<CallbackHandler />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;