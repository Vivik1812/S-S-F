import RolUsuario from "./RolUsuario";

export default class Usuario {
    constructor({
        id = null,
        nombre = "",
        apellido = "",
        email = "",
        telefono = "",
        rol = RolUsuario.USER,
    }) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.rol = rol;
    }

    isAdmin() {
        return this.rol.id === RolUsuario.ADMIN.id;
    }

    isSuperAdmin() {
        return this.rol.id === RolUsuario.SUPER_ADMIN.id;
    }
}