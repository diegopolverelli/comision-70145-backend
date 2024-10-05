import { Router } from 'express';
import { HeroesManager } from '../dao/HeroesManager.js';
// import fs from "fs"
export const router=Router()

HeroesManager.path="./src/data/heroes.json"

router.get('/',async(req,res)=>{

    try {
        // let heroes=JSON.parse(await fs.promises.readFile("./src/data/heroes.json"))
        let heroes=await HeroesManager.getHeroes()
    
        res.setHeader('Content-Type','application/json')
        res.status(200).json({heroes})
        
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