import dotenv from "dotenv"
import {Command, Option} from "commander"

let programa=new Command()

programa.addOption(new Option("-m, --mode <MODE>", "Modo de ejecución del script").choices(["dev", "prod"]).default("dev"))

programa.parse()
const {mode}=programa.opts()
// let mode="dev"
dotenv.config({
    path:mode==="prod"?"./src/.env.prod":"./src/.env.dev",
    override:true
})

export const config={
    PORT:process.env.PORT,
    MONGO_URL:process.env.MONGO_URL
}