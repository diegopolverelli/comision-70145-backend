import { ConectarDB } from "./src/ConectarDB.js";
import { config } from "./src/config/config.js";
import fs from "fs"
import { usuariosModelo } from "./src/DAO/models/usuariosModelo.js";


let [rutaNode, rutaScrit, clave]=process.argv
if(clave!="CoderCoder123"){
    console.log(`Clave incorrecta`)
    process.exit()
}

console.log(`Procesando migración...!!!`)
ConectarDB.conectar(config.MONGO_URL, config.DB_NAME)

const procesa=async()=>{
    let path="./src/DAO/usuarios.json"
    if(!fs.existsSync(path)){
        throw new Error("No existe usuarios.json")
    }
    
    let usuarios=JSON.parse(fs.readFileSync(path, {encoding:"utf8"}))
    usuarios=usuarios.map(u=>{
        return {
            nombre: u.nombre, 
            email: u.email
        }
    })
    await usuariosModelo.deleteMany({})
    let resultado=await usuariosModelo.insertMany(usuarios)
    console.log(resultado)
    

}
await procesa()

process.exit()