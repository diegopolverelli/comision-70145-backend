import { Router } from 'express';
import { UsuariosManagerMongo as UsuariosManager } from '../dao/UsuariosManagerMONGO.js';
import crypto from "crypto"
import { config } from '../config/config.js';
import passport from 'passport';
export const router=Router()

router.get("/error", (req, res)=>{
    res.setHeader('Content-Type','application/json');
    return res.status(401).json({error:`Error al autenticar`})
})

// paso 3
router.post(
    "/registro", 
    passport.authenticate("registro", {failureRedirect:"/api/sessions/error"}), 
    (req, res)=>{
        // si sale bien el authenticate, passport deja un req.user, con los datos del usuario
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({payload:"Registro exitoso", nuevoUsuario:req.user});
    }
)

router.post(
    "/login", 
    passport.authenticate("login", {failureRedirect:"/api/sessions/error"}),
    (req, res)=>{

        req.session.usuario=req.user
        // si sale bien el authenticate, passport deja un req.user, con los datos del usuario

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:"Login correcto", usuario:req.user});
    }
)

router.get("/logout", (req, res)=>{
    let {web}=req.query

    req.session.destroy(error=>{
        if(error){
            res.setHeader('Content-Type','application/json');
            return res.status(500).json({error:`Error al realizar logout`})
        }
        if(web){
            return res.redirect("/login?mensaje=Logout exitoso")
        }else{
            res.setHeader('Content-Type','application/json');
            return res.status(200).json({payload:"Logout exitoso...!!!"});
        }
    })
})