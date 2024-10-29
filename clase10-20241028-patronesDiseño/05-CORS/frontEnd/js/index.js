console.log("Prueba")

const divDatos=document.getElementById("datos")
const aBuscarDatos=document.getElementById("buscarDatos")


aBuscarDatos.addEventListener("click", async(e  )=>{
    e.preventDefault()

    let respuesta=await fetch("http://localhost:3000/datos")
    let {datos}=await respuesta.json()
    divDatos.textContent=datos
})