import { productos } from "../data/productos.js";

export class ProductosDAO{
    static get(){
        return productos
    }
}