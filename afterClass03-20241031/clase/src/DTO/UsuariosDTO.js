export class UsuariosDTO{
    constructor(usuario){
        this.nombre=usuario.nombre.toUpperCase()
        this.email=usuario.email
        this.rol=usuario.rol?usuario.rol:"user"
    }
}