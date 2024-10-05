import express from 'express';
import { uploader } from './utils.js';
import fs from "fs"
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.post("/api/heroes", uploader.single("foto"), (req, res)=>{

    let numeros=[1,2,3]
    let numeros2=[4,5,6]
    let otrosNumeros=[...numeros, ...numeros2] // op spread
    console.log(otrosNumeros)
    
    let {name, ...otros}=req.body   // ... son aquí el operador rest
    if(!name){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`name es requerido`})
    }
    let {mimetype, originalname, path}=req.file
    let tipo=mimetype.split("/")
    console.log(tipo, mimetype)
    if(tipo[0]!=="image"){
        fs.unlinkSync(path)
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Solo se admiten imagenes`})
    }

    // validaciones...

    // grabación en Persistencia...

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:{
        name, 
        originalname, 
        mimetype, 
        path,
        otros
    }});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
