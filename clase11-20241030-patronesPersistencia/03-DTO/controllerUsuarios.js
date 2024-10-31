import { UsuariosDTO } from "./UsuariosDTO.js"

// post usuarios
let dataFromBody={
    nombre:"Juan", 
    apellido:"Fernandez",
    correo:"jfernandez@test.com"
}

let nuevoUsuario=new UsuariosDTO(dataFromBody)
console.log(nuevoUsuario)

let usuarios=[
    {id:1, nombre:"Luciana", correo:"luciana@test.com", password:"123", rol:"user"},
    {id:2, nombre:"Juan", correo:"juan@test.com", password:"123", rol:"user"},
    {id:3, nombre:"Romina", correo:"romina@test.com", password:"123", rol:"admin"},
]

usuarios=usuarios.map(u=>new UsuariosDTO(u))
console.log(usuarios)