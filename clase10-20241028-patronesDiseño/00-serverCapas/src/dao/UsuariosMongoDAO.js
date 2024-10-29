import { usuarioModelo } from "./models/usuariosModelo.js";

export class UsuariosMongoDAO{
    static async get(){
        return usuarioModelo.find().lean()
    }
}