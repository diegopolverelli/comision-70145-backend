import { ordenesModelo } from "./models/ordenesModelo.js";

export class OrdenesDAO{
    static async getOrdenes(){
        return await ordenesModelo.find().populate("cliente").populate("negocio").lean()
    }

    static async createOrden(orden={}){
        let nuevaOrden=await ordenesModelo.create(orden)
        return nuevaOrden.toJSON()
    }
}