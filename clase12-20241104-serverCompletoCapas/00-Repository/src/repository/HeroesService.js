import { MemoryHeroesDAO as DAO } from "../dao/memoryHeroesDAO.js"
import { HeroesDTO } from "../DTO/HeroesDTO.js"

class HeroesService{
    constructor(dao){
        this.heroesDAO=dao
    }

    async getHeroes(){
        let heroes=await this.heroesDAO.get()
        heroes=heroes.map(h=>new HeroesDTO(h))
        return heroes
        // return await this.heroesDAO.get()
    }
}

export const heroesService=new HeroesService(new DAO())