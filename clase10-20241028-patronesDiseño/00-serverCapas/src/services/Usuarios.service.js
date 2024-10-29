// import { UsuariosMemoryDAO as UsuariosDAO } from "../dao/UsuariosMemoryDAO.js"
import { UsuariosMongoDAO as UsuariosDAO} from "../dao/UsuariosMongoDAO.js"

class UsuariosService{
    constructor(DAO){
        this.usuariosDAO=DAO
    }

    async getUsuarios(){
        return await this.usuariosDAO.get()
    }

    async getUsuarioByNombre(nombre){
        let usuarios=await this.usuariosDAO.get()
        let usuario=usuarios.find(u=>u.nombre===nombre)
        return usuario
    }

    async getUsuarioByEmail(email){
        let usuarios=await this.usuariosDAO.get()
        let usuario=usuarios.find(u=>u.email===email)
        return usuario
    }
}

export const usuariosService=new UsuariosService(UsuariosDAO)