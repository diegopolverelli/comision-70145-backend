import { usuariosModelo } from "./models/usuario.model.js";

export class UsuariosManager{
    static async getUserBy(filtro={}){
        return await usuariosModelo.findOne(filtro).lean()
    }

    static async addUser(usuario={}){
        let nuevoUsuario=await usuariosModelo.create(usuario)
        return nuevoUsuario.toJSON()
    }
}