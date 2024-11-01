import { Router } from 'express';
import passport from 'passport';
import jwt from "jsonwebtoken"
import { config } from '../config/config.js';
import { UsuariosDTO } from '../DTO/UsuariosDTO.js';
export const router=Router()

router.post('/registro', passport.authenticate("registro", {session:false}) , (req,res)=>{

    res.setHeader('Content-Type','application/json')
    res.status(201).json({message:"Registro exitoso", nuevoUsuario: req.user})
})

router.post("/login", passport.authenticate("login", {session:false}), (req, res)=>{

    let {web}=req.body

    // delete req.user.password // debemos eliminar info sensible... 
    req.user=new UsuariosDTO(req.user)
    let usuario=new UsuariosDTO(req.user)
    // console.log(usuario)
    // console.log(Object.keys(usuario))
    // console.log({...usuario})
    let token=jwt.sign({...usuario}, config.SECRET, {expiresIn: 3600})

    res.cookie("token", token, {httpOnly:true})
    if(web){
        return res.redirect("/alumnos")
    }
    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Login exitoso", usuarioLogueado: req.user});
})

router.get("/current", passport.authenticate("current", {session:false}), (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({datosUsuarioLogueado:req.user});
})