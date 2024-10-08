// http://localhost:3000/api/sessions/callbackGithub
// Client ID: Iv23li1Z26moOQOwMI6k
// Client Secret: 85104e58e501eb9ddbe40b7917c10884ebf32074

import passport from "passport"
import local from "passport-local"
import github from "passport-github2"
import { UsuariosManager } from "../dao/UsuariosManager.js"

export const initPassport=()=>{

// paso 1:
    passport.use("github", 
        new github.Strategy(
            {
                clientID:"Iv23li1Z26moOQOwMI6k",
                clientSecret:"85104e58e501eb9ddbe40b7917c10884ebf32074",
                callbackURL:"http://localhost:3000/api/sessions/callbackGithub"
            },
            async (token, rt, profile, done)=>{
                try {
                    // console.log(profile)
                    let {name, email}=profile._json
                    if(!name || !email){
                        return done(null, false)
                    }
                    let usuario=await UsuariosManager.getUserBy({email})
                    if(!usuario){
                        usuario=await UsuariosManager.addUser({nombre: name, email, profileGithub: profile})
                    }
                    return done(null, usuario)
                } catch (error) {
                    return done(error)
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
                    // logica de login... validaciones... etc...

                    return done(null, {nombre:"Juan", email: "juan@test.com"})
                } catch (error) {
                    return done(error)
                }
            }   
        )
    )


// paso 1' (serializers...) SOLO si uso Sessions...!!!
    passport.serializeUser((user, done)=>{
        return done(null, user)
    })
    passport.deserializeUser((user, done)=>{
        return done(null, user)
    })

}

