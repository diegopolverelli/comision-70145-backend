import mongoose from "mongoose"

export class ConectarDB{
    static #instancia=null

    constructor(url, db){
        mongoose.connect(url, {dbName: db})
    }

    static conectar(url, db){
        if(!this.#instancia){
            this.#instancia=new ConectarDB(url, db)
            console.log(`DB Online`)
        }

        return this.#instancia
    }
}