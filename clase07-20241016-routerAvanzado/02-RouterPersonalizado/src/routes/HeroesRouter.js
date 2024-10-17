import { HeroesManager } from "../dao/HeroesManager.js";
import { logger } from "../middlewares/logger.js";
import { CustomRouter } from "./router.js";

export class HeroesRouter extends CustomRouter{
    init(){
        this.get("/", ["public"], logger, (req, res)=>{
            let heroes=HeroesManager.getHeroes()
            // let heroes
            // try {
                
            // } catch (error) {
            //     return res.send("error...")
            // }

            // return res.send(heroes)
            return res.sendSuccess(heroes)
        })

        this.get("/:id", ["user", "admin"], (req, res)=>{
            let {id}=req.params
            id=Number(id)
            if(isNaN(id)){
                return res.sendClientError(`El id debe ser numérico`, 400)
            }
            let heroes=HeroesManager.getHeroes()
            let heroe=heroes.find(h=>h.id===id)
            if(!heroe){
                return res.sendClientError(`No existen heroes con id ${id}`, 404)
            }

            return res.sendSuccess(heroe)
        })
    }
}