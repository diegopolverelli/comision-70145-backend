import { productosService } from "../services/Productos.service.js"

export const getProductos=async(req,res)=>{

    // let productos=await ProductosDAO.get()
    let productos=await productosService.getProductos()

    res.setHeader('Content-Type','application/json')
    res.status(200).json({productos})
}