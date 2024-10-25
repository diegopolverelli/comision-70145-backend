import { Router } from 'express';
import passport from 'passport';
import jwt from "jsonwebtoken"
import { config } from '../config/config.js';
export const router=Router()

router.post('/registro', passport.authenticate("registro", {session:false}) , (req,res)=>{

    res.setHeader('Content-Type','application/json')
    res.status(201).json({message:"Registro exitoso", nuevoUsuario: req.user})
})

router.post("/login", passport.authenticate("login", {session:false}), (req, res)=>{

    delete req.user.password // debemos eliminar info sensible... 
    let token=jwt.sign(req.user, config.SECRET, {expiresIn: 3600})

    res.cookie("token", token, {httpOnly:true})
    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Login exitoso", usuarioLogueado: req.user});
})

router.get("/current", passport.authenticate("current", {session:false}), (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({datosUsuarioLogueado:req.user});
})