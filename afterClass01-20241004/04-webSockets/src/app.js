import express from 'express';
import {Server} from "socket.io"
const PORT=3000;
let io;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.post("/oferta", (req, res)=>{
    let{oferta}=req.body
    if(!oferta){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`oferta es requerido`})
    }

    io.emit("oferta", oferta)

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Oferta enviada...!!!"});

})

const server=app.listen(PORT,()=>{   // server HTTP
    console.log(`Server escuchando en puerto ${PORT}`);
});



io=new Server(server)   // server WebSocket
io.on("connection", socket=>{
    console.log(`se ha conectado un cliente con id ${socket.id}`)
    // socket.emit()  // solo a una de las conexiones
    // socket.broadcast.emit()   // a todos, menos a la conexion que genera el emit
    // io.emit()  // a todos
})



let temperatura=27

setInterval(() => {
    temperatura=Math.floor(Math.random()*(7)+27)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    io.emit("nuevaTemperatura", temperatura)
}, 1000);

