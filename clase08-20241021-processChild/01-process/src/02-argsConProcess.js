
let [rutaNode, rutaScript, ...argumentos]=process.argv  //... rest

// console.log(argumentos)
if(!argumentos.includes("-p")){
    console.log(`Falta indicar puerto: flag -p`)   

    process.exit()
}
let indicePuerto=argumentos.findIndex(a=>a==="-p")
const PORT=argumentos[indicePuerto+1]
console.log(`El server ejecutará en puerto ${PORT}`)