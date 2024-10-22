
process.on("exit", code=>{
    console.log(`El programa se va a cerrar, con code ${code}`)
})

process.on("uncaughtException", error=>{
    console.log(`Error no controlado: ${error.message}`)
})


let contador=1
let intervalo01=setInterval(() => {
    console.log(`Operacion ${contador}`)
    contador++
    if(contador>6){
        console.log("Tarea finalizada...!!!")
        process.exit(-5)  
    }
}, 1000);

setTimeout(() => {
    console.log(nanana)
}, 3000);