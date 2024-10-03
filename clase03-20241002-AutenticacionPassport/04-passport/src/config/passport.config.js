import passport from "passport"
import local from "passport-local"
import { UsuariosManagerMongo as UsuariosManager } from "../dao/UsuariosManagerMONGO.js"
import { generaHash, validaHash } from "../utils.js"

export const initPassport=()=>{
// paso 1
    passport.use("registro", 
        new local.Strategy(
            {
                usernameField:"email", 
                passReqToCallback: true
            },
            async(req, username, password, done)=>{
                try {
                    let {nombre}=req.body
                    if(!nombre){
                        return done(null, false)
                    }
                    
                    let existe=await UsuariosManager.getBy({email:username})
                    if(existe){
                        return done(null, false)
                    }

                    password=generaHash(password)

                    let nuevoUsuario=await UsuariosManager.create({nombre, email:username, password})
                    console.log(`pasa por passport...!!!`)
                    return done(null, nuevoUsuario)
                } catch (error) {
                    return done(error) // done(null, false) o return done(null, usuario)
                }
            }
        )
    )

    passport.use("login", 
        new local.Strategy(
            {
                usernameField:"email"
            },
            async(username, password, done)=>{
                try {
                    let usuario=await UsuariosManager.getBy({email:username})
                    if(!usuario){
                        return done(null, false)
                    }
                    if(!validaHash(password, usuario.password)){
                        return done(null, false)
                    }
                    console.log(`login OK con passport...!!!`)
                    return done(null, usuario)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )

// paso 1 bis   // SOLO SI USO SESSIONS...!!!
    passport.serializeUser((usuario, done)=>{
        return done(null, usuario._id)
    })

    passport.deserializeUser(async(id, done)=>{
        let usuario=await UsuariosManager.getBy({_id:id})
        return done(null, usuario)
    })

}