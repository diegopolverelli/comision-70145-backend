process.on("message", mensaje=>{

    console.log(`Soy el proceso hijo, pid: ${process.pid}, recibi este mensaje: "${mensaje}"`)

    console.log("Comienza el calculo...")
    console.time("Tiempo de proceso: ")
    let resultado=0

    for(let i=0; i<500_000_000; i++){
        resultado+=Math.floor(Math.random()*(10)+1)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    }

    console.timeEnd("Tiempo de proceso: ")

    // return resultado
    process.send({id:"resultado", resultado})
})