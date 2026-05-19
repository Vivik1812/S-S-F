import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./modules/SYS/view/components/Navbar";
import Footer from "./modules/SYS/view/components/Footer";
import LoginView from "./modules/SYS/view/LoginView";
import AutenticacionView from "./modules/SYS/view/AutenticacionView";
import HomeView from "./modules/SYS/view/HomeView";
import ProteccionRuta from "./modules/SYS/view/components/ProteccionRutas";
import PerfilView from "./modules/SYS/view/PerfilView";
import CompletarPerfilView from "./modules/SYS/view/CompletarPerfilView";

function App() {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  return (
    <>
      <Navbar variant={isLogin ? "login" : "default"} />
      <main>
        <Routes>
          <Route path="/" element={<HomeView />}></Route>
          <Route path="/login" element={<LoginView />} />
          <Route path="/autenticacion" element={<AutenticacionView />} />
          <Route path="/perfil" element={<PerfilView />} />
          <Route
            path="/completar-perfil"
            element={
              <ProteccionRuta>
                <CompletarPerfilView />
              </ProteccionRuta>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
