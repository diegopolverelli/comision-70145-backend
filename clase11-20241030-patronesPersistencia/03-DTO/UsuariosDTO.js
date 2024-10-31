export class UsuariosDTO{
    constructor(usuario){
        this.firstName=usuario.nombre.toUpperCase()
        this.lastName=usuario.apellido?usuario.apellido.toUpperCase():""
        this.fullName=this.firstName+" "+this.lastName
        this.email=usuario.correo
        this.username=usuario.correo.split("@")[0]
        this.role="user"
    }
}