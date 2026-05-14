import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginView from "./modules/SYS/view/LoginView";
import PublicacionView from "./modules/SYS/view/PublicacionView";
import './App.css';

function App() {
  const loginGoogle = () => {
    window.location.href = "http://localhost:9000/oauth2/authorization/google";
  };

  const path = window.location.pathname;

  if(path === "/home"){
    return(
      <main className='login-page'>
        <section className='login-card'>
          <h1>Login exitoso</h1>
          <p>Bienvenid@ a Sanos y Salvos.</p>
        </section>
      </main>
    )
  }

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
  )
}

export default App;
