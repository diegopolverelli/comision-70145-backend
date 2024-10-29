import { usuarios } from "../data/usuarios.js";

export class UsuariosMemoryDAO{
    static get(){
        return usuarios
    }
}