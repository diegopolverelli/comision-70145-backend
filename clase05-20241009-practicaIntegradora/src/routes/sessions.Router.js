import { Router } from 'express';
import passport from 'passport';
import jwt from "jsonwebtoken"
import { config } from '../config/config.js';
export const router=Router()

router.get('/error',(req,res)=>{
    res.setHeader('Content-Type','application/json');
    return res.status(401).json({error:`Error al autenticar`})
})

// paso 3:
router.post(
    "/registro",
    passport.authenticate("registro", {session: false, failureRedirect:"/api/sessions/error"}),
    (req, res)=>{
        // req.user // lo deja passport.authenticate si todo sale OK
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({payload:`Registro exitoso para ${req.user.nombre}`, usuario:req.user});
    }
)

router.post(
    "/login",
    passport.authenticate("login", {session: false, failureRedirect:"/api/sessions/error"}),
    (req, res)=>{
        // req.user // lo deja passport.authenticate si todo sale OK

        let token=jwt.sign(req.user, config.SECRET, {expiresIn: 3600})

        res.setHeader('Content-Type','application/json');
        return res.status(201).json({payload:`Login exitoso para ${req.user.nombre}`, usuarioLogueado:req.user, token});
    }
)