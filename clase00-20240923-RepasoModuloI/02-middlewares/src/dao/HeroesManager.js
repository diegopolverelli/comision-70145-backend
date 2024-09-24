import { heroes } from "../data/heroes.js";

export class HeroesManager{
    static getHeroes(){
        return heroes
    }

    static addHeroe(heroe){

        let id=1
        if(heroes.length>0){
            id=Math.max(...heroes.map(d=>d.id))+1
        }

        let nuevoHeroe={
            id,
            ...heroe
        }

        heroes.push(nuevoHeroe)
        return nuevoHeroe

    }

    // getHero(){

    // }
}

HeroesManager.getHeroes()

// let hm=new HeroesManager()
// hm.getHero()