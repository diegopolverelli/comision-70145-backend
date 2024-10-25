import { AlumnosManager } from "../dao/AlumnosManager.js"
import { procesaErrores } from "../utils.js"

export class AlumnosController{
    static getAlumnos=async(req,res)=>{
        try {
            let alumnos=await AlumnosManager.getAlumnos()  
        
            res.setHeader('Content-Type','application/json')
            res.status(200).json({alumnos})
        } catch (error) {
            procesaErrores(res, error)
        }
    }
}