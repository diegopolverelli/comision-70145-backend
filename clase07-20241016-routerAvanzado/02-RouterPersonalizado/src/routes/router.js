import {Router} from "express"
import jwt from "jsonwebtoken"
export class CustomRouter{

    #router=null
    constructor(){
        this.#router=Router()
        this.init()
    }

    init(){}

    getRouter(){
        return this.#router
    }

    get(ruta, permisos=[], ...funciones){  //... op rest
        // this.#router.get(ruta, funciones)
        this.#router.get(ruta, this.customResponses, this.accesos(permisos), this.procesaFunciones(funciones))
    }
    post(ruta, permisos=[], ...funciones){  //... op rest
        // this.#router.get(ruta, funciones)
        this.#router.post(ruta, this.customResponses, this.accesos(permisos), this.procesaFunciones(funciones))
    }

    // [(req, res, next)=>{}, (req, res, next)=>{}, (req, res)=>{}]

    procesaFunciones(funciones=[]){
        return funciones.map(fn=>{
            return async(...params)=>{  // ...rest
                try {
                    return fn(...params)  // ... spread
                } catch (error) {
                    params[1].status(500).send({error:error.message})
                }
            }
        })
    }

    customResponses=(req, res, next)=>{
        res.sendSuccess=datos=>res.status(200).send({status:"success", payload:datos})
        res.sendClientError=(error, statusHTTP=400)=>res.status(statusHTTP).send({status:"error", error})
        res.sendServerError=error=>res.status(500).send({status:"server error", error})

        next()
    }

    accesos=(permisos=[])=>{
        return (req, res, next)=>{
            if(!Array.isArray(permisos)){
                return res.sendServerError("Permisos incorrectos en la ruta...")
            }
            permisos=permisos.map(p=>p.toLowerCase())

            if(permisos.includes("public")){
                return next()
            }

            if(!req.headers.authorization){
                return res.sendClientError("No hay usuarios autenticados", 401)
            }

            let token=req.headers.authorization.split(" ")[1]
            let usuario=null
            try {
                usuario=jwt.verify(token, "CoderCoder123")
            } catch (error) {
                return res.sendClientError(error.message, 401)
            }
            
            if(!permisos.includes(usuario.rol.toLowerCase())){
                return res.sendClientError(`No tiene privilegios suficientes`, 403)
            }

            next()
        }
    }

}