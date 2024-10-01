import express from 'express';
import sessions from "express-session"
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(sessions({
    secret:"CoderCoder123",
    resave:true, 
    saveUninitialized:true
}))

app.get('/',(req,res)=>{

    let respuesta=`Bienvenido...!!!`
    if(req.session.contador){
        req.session.contador++
        respuesta+=` visitas al sitio: ${req.session.contador}`
    }else{
        req.session.contador=1
    }

    res.setHeader('Content-Type','text/plain');
    res.status(200).send(respuesta);
})

app.get("/contador", (req, res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:req.session});
})




const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
