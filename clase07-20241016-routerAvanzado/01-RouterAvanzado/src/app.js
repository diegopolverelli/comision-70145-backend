import express from 'express';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get("/contacto/:nombre([a-zA-Z%20]+)", (req, res)=>{

    let {nombre}=req.params

    res.send({nombre, message:"ruta contacto"})
})

app.get("/contacto/:numCelular([0-9]+)", (req, res)=>{

    let {numCelular}=req.params

    res.send({numCelular, message:"ruta contacto"})
})

let errores={
    a:"error de software", 
    b:"error de hardware",
    c:"error de seguridad"
}

app.param("codigo", (req, res, next, codigo)=>{
    let descripError="error no identificado"
    if(errores[codigo]){
        descripError=errores[codigo]
    }
    req.descripError=descripError
    next()
})

app.get("/error/:codigo", (req, res)=>{
    let {codigo}=req.params

    // let descripError="error no identificado"
    // if(errores[codigo]){
    //     descripError=errores[codigo]
    // }

    res.status(200).send({message:`Han reportado un ${req.descripError}`})
})

app.get("/error/:codigo/:usuario", (req, res)=>{
    // let {codigo, usuario}=req.params
    let {usuario}=req.params

    // let descripError="error no identificado"
    // if(errores[codigo]){
    //     descripError=errores[codigo]
    // }

    res.status(200).send({message:`${usuario} ha reportado un ${req.descripError}`})
})

app.get("*", (req, res)=>{

    res.status(404).send({message:"Not found"})
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
