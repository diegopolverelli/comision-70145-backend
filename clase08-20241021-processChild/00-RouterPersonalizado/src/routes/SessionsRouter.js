import { CustomRouter } from "./router.js";
import jwt from "jsonwebtoken"

let usuarios=[
    {id:1, nombre:"Luciana", email:"luciana@test.com", password:"123", rol:"user"},
    {id:2, nombre:"Juan", email:"juan@test.com", password:"123", rol:"premium"},
    {id:3, nombre:"Romina", email:"romina@test.com", password:"123", rol:"admin"},
]

export class SessionsRouter extends CustomRouter{
    init(){
        this.post("/login", ["public"], (req, res)=>{
            let{email, password}=req.body
            let usuario=usuarios.find(u=>u.email===email && u.password===password)
            if(!usuario){
                return res.sendClientError(`Credenciales invalidas`, 401)
            }

            let token=jwt.sign(usuario, "CoderCoder123", {expiresIn: 300})

            return res.sendSuccess(token)
        })
    }
}