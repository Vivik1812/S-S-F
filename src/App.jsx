import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./modules/SYS/view/components/Navbar";
import Footer from "./modules/SYS/view/components/Footer";
import LoginView from "./modules/SYS/view/LoginView";
import AutenticacionView from "./modules/SYS/view/AutenticacionView";
import HomeView from "./modules/SYS/view/HomeView";
import ProteccionRuta from "./modules/SYS/view/components/ProteccionRutas";
import PerfilView from "./modules/SYS/view/PerfilView";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  return (
    <>
      <Navbar variant={isLogin ? "login" : "default"} />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              
                <HomeView />
              
            }
          ></Route>
          <Route path="/login" element={<LoginView />} />
          <Route path="/autenticacion" element={<AutenticacionView />} />
          <Route path="/perfil" element={<PerfilView />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
