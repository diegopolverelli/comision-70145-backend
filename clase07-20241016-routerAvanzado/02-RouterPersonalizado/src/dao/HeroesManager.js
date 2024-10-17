import { heroes } from "../data/heroes.js";

export class HeroesManager{
    static getHeroes(){
        if(Math.random()>.85) throw new Error(`Error desconocido... :(`)
        return heroes
    }
}