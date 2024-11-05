import { procesaErrores } from "../utils.js";

export class UsuariosController{
    static async getUsuarios(req, res){
        try {
            let usuarios="usuarios"
            res.setHeader('Content-Type','application/json');
            return res.status(200).json({usuarios});
        } catch (error) {
            procesaErrores(res, error)
        }
    }

    static async createUser(req, res){
        let {nombre, email} = req.body
        if(!nombre || !email){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Complete nombre | email`})
        }

        // validaciones...

        try {
            let nuevoUsuario="nuevo Usuario"
            res.setHeader('Content-Type','application/json');
            return res.status(201).json({nuevoUsuario}); 
        } catch (error) {
            procesaErrores(res, error)
        }
    }
}