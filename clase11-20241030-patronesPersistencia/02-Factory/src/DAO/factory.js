import { ConectarDB } from "../ConectarDB.js";
import { config } from "../config/config.js";

export let DAO

switch (config.PERSISTENCE) {
    case "MONGODB":
        ConectarDB.conectar(config.MONGO_URL, config.DB_NAME)
        // DAO=(await import("./usuariosMongoDAO.js")).usuariosMongoDAO
        let {usuariosMongoDAO}=await import("./usuariosMongoDAO.js")
        DAO=usuariosMongoDAO
    break;

    case "FS":
        let {usuariosFsDAO}=await import("./usuariosFsDAO.js")
        DAO=usuariosFsDAO
        break;

    default:
        throw new Error("Error en configuración persistencia. Verifique...!!!")
}

// if(true){
//     import { usuariosFsDAO } from "./usuariosFsDAO.js";
// }