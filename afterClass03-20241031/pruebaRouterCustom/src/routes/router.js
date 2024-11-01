const {Router}=require("express")
class CustomRouter{
    constructor(){
        this.router=Router()
        this.init()
    }

    init(){}
    getRouter(){
        return this.router
    }

    get(ruta, ...funciones){
        this.router.get(ruta, funciones)
    }
}

module.exports={CustomRouter}