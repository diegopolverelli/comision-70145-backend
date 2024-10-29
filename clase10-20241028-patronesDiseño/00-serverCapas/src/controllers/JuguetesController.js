import { JuguetesMemoryDAO as JuguetesDAO } from "../dao/JuguetesMemoryDAO.js"

export class JuguetesController{
    static getJuguetes=async(req,res)=>{

        let juguetes=JuguetesDAO.get()

        res.setHeader('Content-Type','application/json')
        res.status(200).json({juguetes})
    }

    static createJuguete=async(req, res)=>{
        // validaciones

        let nuevoJuguete="nuevo Juguete"

        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoJuguete});
    }
}