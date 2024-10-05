import fs from "fs"
export class HeroesManager{
    static path=""

    static async getHeroes(){
        return JSON.parse(await fs.promises.readFile(this.path, {"encoding":"utf8"}))
    }
}

