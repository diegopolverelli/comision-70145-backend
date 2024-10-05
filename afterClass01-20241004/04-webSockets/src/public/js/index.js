const socket=io()
const divTemperatura=document.getElementById("temperatura")

socket.on("nuevaTemperatura", temperatura=>{
    let texto=`Temperatura del reactor: ${temperatura}°`
    divTemperatura.textContent=texto
})

socket.on("oferta", dato=>{
    alert(dato)
})

