// import { UsuariosMemoryDAO as UsuariosDAO } from "../dao/UsuariosMemoryDAO.js"

import { usuariosService } from "../services/Usuarios.service.js"

export const getUsuarios=async(req,res)=>{

    // let usuarios=UsuariosDAO.get()
    let usuarios=await usuariosService.getUsuarios()

    res.setHeader('Content-Type','application/json')
    res.status(200).json({usuarios})
}

export const getUsuarioByNombre=async(req,res)=>{
    let {nombre}=req.params
    // let usuarios=UsuariosDAO.get()
    let usuario=await usuariosService.getUsuarioByNombre(nombre)
    if(!usuario){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No existe el usuario ${nombre}`})
    }

    res.setHeader('Content-Type','application/json')
    res.status(200).json({usuario})
}

export const createUsuario=async(req, res)=>{

    let nuevoUsuario="nuevo usuario"

    res.setHeader('Content-Type','application/json');
    return res.status(201).json({nuevoUsuario});
}