import apiGW from "./ApiGateway";

const API_URL = import.meta.env.VITE_API_GW;

export const loginWithGoogle = () => {
  window.location.href = `${API_URL}/oauth2/authorization/google`;
};

export const obtenerToken = () => {
  return localStorage.getItem("token");
};

export const guardarToken = (token) => {
  localStorage.setItem("token", token);
};

export const cerrarSesion = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

export const Autenticado = () => {
  return !!obtenerToken();
};

export const obtenerUsuarioActual = async () => {
  const respuesta = await apiGW.get("/api/v1/usuarios/me");

  return respuesta.data;
};

export const actualizarPerfil = async (datos) => {
  const res = await apiGW.put("/api/v1/usuarios/completar/perfil", datos);
  return res.data;
}
