import {isValidObjectId} from "mongoose"
import { procesaErrores } from "../utils.js";

export class OrdenesController{
    static async getOrdenes(req, res){
        try {
            let ordenes="ordenes de pedido"
            res.setHeader('Content-Type','application/json');
            return res.status(200).json({ordenes});
        } catch (error) {
            procesaErrores(res, error)
        }
    }

    static async createOrden(req, res){
        let {uid, nid, pedido}=req.body

        if(!uid || !nid || !pedido){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Complete uid, nid, y pedido`})
        }

        if(!isValidObjectId(nid) || !isValidObjectId(uid)){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`formato incorrecto uid / nid`})
        }

        // validaciones y proceso...

        try {
            let nuevaOrden="OC pedido nueva"
            res.setHeader('Content-Type','application/json');
            return res.status(201).json({nuevaOrden});
        } catch (error) {
            procesaErrores(res, error)            
        }
    }
}