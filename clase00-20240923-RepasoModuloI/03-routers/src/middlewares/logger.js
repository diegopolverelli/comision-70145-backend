import fs from "fs"
import { config } from "../config/config.js"
export const logger=(req, res, next)=>{
    let log=`Peticion recibida: metodo ${req.method} | url: ${req.url} | fecha: ${new Date().toLocaleDateString()}`

    if(fs.existsSync(config.PATH_LOGFILE)){
        fs.appendFileSync(config.PATH_LOGFILE, "\n"+log)
    }else{
        fs.writeFileSync(config.PATH_LOGFILE, log)
    }

    return next()
}