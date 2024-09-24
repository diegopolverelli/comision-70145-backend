import {Router} from "express"
import { HeroesManager } from "../dao/HeroesManager.js";
import { auth } from "../middlewares/auth.js";
export const router=Router()

router.get("/", (req, res)=>{

    try {
        let heroes=HeroesManager.getHeroes()
    
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({heroes});
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
    }
})

router.get("/:id", (req, res)=>{

    let {id}=req.params
    id=Number(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El id debe ser numérico`})
    }
    // Array
    // Object


    try {
        let heroes=HeroesManager.getHeroes()
        let heroe=heroes.find(h=>h.id===id)
        if(heroe){
            res.setHeader('Content-Type','application/json');
            return res.status(200).json({heroe});
        }else{
            res.setHeader('Content-Type','application/json');
            return res.status(404).json({error:`No existen heroes con id ${id}`})
        }
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
    }
})

router.post("/", auth, (req, res)=>{
    let {name, alias}=req.body
    if(!name){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`name is required`})
    }

    // validaciones...!!!

    try {
        let nuevoHeroe=HeroesManager.addHeroe({name, alias})

        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoHeroe});
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
    }

} )