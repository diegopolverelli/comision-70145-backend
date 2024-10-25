import passport from "passport"
import local from "passport-local"
import passportJWT from "passport-jwt"
import { UsuariosManager } from "../dao/UsuariosManager.js"
import { generaHash, validaHash } from "../utils.js"
import { config } from "./config.js"

const buscaToken=(req)=>{
    let token=null

    if(req.cookies.token){
        token=req.cookies.token
    }

    return token
}

export const iniciarPassport=()=>{
    // paso 1
    passport.use("registro", 
        new local.Strategy(
            {passReqToCallback:true, usernameField:"email"},
            async(req, username, password, done)=>{
                try {
                    let {nombre, rol}=req.body
                    if(!nombre){
                        console.log("no llega nombre")
                        return done(null, false, {message:`Nombre es requerido`})
                    }
                    if(rol){
                        rol=rol.toLowerCase()
                        if(rol!=="admin" && rol!=="user"){
                            return done(null, false, {message:`Solo se admite rol admin o user`})
                        }
                    }

                    let existe=await UsuariosManager.getBy({email:username})
                    if(existe){
                        return done(null, usuario, {message:`El usuario ${username} ya existe en DB`})
                    }

                    // otras validaciones???

                    let nuevoUsuario=await UsuariosManager.create({nombre, email: username, rol, password: generaHash(password)})
                    return done(null, nuevoUsuario)

                } catch (error) {
                    return done(error)
                }
            }
        )
    )

    passport.use("login", 
        new local.Strategy(
            {usernameField:"email"},
            async(username, password, done)=>{
                try {
                    let usuario=await UsuariosManager.getBy({email:username})
                    if(!usuario){
                        return done(null, false, {message:`credenciales invalidas`})
                    }
                    if(!validaHash(password, usuario.password)){
                        return done(null, false, {message:`credenciales invalidas`})
                    }

                    return done(null, usuario)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )

    passport.use("current", 
        new passportJWT.Strategy(
            {
                secretOrKey: config.SECRET,
                jwtFromRequest: new passportJWT.ExtractJwt.fromExtractors([buscaToken])
            },
            async(usuario, done)=>{
                try {
                    return done(null, usuario)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )



}