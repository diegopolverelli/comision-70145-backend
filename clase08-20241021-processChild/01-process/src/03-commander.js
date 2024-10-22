import {Command, Option} from "commander"

let programa=new Command()

programa.option("-p --port <PUERTO>", "Puerto donde escuchará el server", 3000)
programa.option("-d, --debug", "Activa el modo debug")
programa.option("-c, --colores [colores...]", "Listado de colores")
programa.requiredOption("-u, --user <usuario>", "Usuario que ejecuta el script")
programa.addOption(new Option("-m, --mode <MODE>", "Modo de ejecución del script").choices(["dev", "test", "prod"]).default("dev"))

programa.allowUnknownOption()
programa.parse()
const opts=programa.opts()

console.log(opts)
if(opts.port){
    console.log(`Server on line en port ${opts.port}`)
}
console.log(programa.args)