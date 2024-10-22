import express from "express"

export class Server{
    #app
    constructor(PORT){
        this.#app=express()
        this.PORT=PORT
        this.init()
    }

    getApp(){
        return this.#app
    }

    middlewares(){
        this.#app.use(express.json())
        this.#app.use(express.urlencoded({extended:true}))
    }


    init(){
        this.middlewares()

        this.#app.listen(this.PORT, ()=>{
            console.log(`Server up in port ${this.PORT}`)
        })
    }
}