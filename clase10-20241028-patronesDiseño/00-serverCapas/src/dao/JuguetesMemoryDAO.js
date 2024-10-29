import { juguetes } from "../data/juguetes.js";

export class JuguetesMemoryDAO{
    static get(){
        return juguetes
    }
}