export default RolUsuario;

const RolUsuario = Object.freeze({ //para evitar que cambien los valores
    USER: { id: 1, nombre: "USER" },
    ADMIN: { id: 2, nombre: "ADMIN" },
    SUPER_ADMIN: { id: 3, nombre: "SUPER_ADMIN" }
});