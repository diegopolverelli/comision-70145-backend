import { usuariosModelo } from "./models/usuariosModel.js";

export class UsuariosManager{
    static async getBy(filtro={}){
        return await usuariosModelo.findOne(filtro).lean()
    }

    static async create(usuario){
        let nuevoUsuario=await usuariosModelo.create(usuario)
        return nuevoUsuario.toJSON()
    }
}