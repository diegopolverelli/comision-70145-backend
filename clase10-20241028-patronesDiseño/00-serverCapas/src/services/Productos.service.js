import { ProductosDAO } from "../dao/ProductosDAO.js"

class ProductosService{
    constructor(dao){
        this.productosDAO=dao
    }

    async getProductos(){
        return await this.productosDAO.get()
    }
}

export const productosService=new ProductosService(ProductosDAO)