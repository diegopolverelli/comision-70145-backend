
// @decorador(parametro1, parametro2)  // forma habitual de encontrar decoradores (en frameworks)
const suma=(a,b)=>{
    return a+b
}

// console.log(suma(4,5))

const decoradorLog=funcion=>{
    return (...argumentos )=>{

        console.log(`Funcion ${funcion.name} ejecutó el ${new Date().toLocaleDateString()}`)

        return funcion(...argumentos)
    }
}

const sumaDecoradaLog=decoradorLog(suma)

console.log(sumaDecoradaLog(4,4))

const decoradorDuplica=fn=>{
    return (...args)=>{

        return fn(...args) * 2
    }
}

const duplicaSuma=decoradorDuplica(suma)
console.log(duplicaSuma(10, 10))

console.log(suma(5, 3))