import express from 'express';
import fs from "fs"
import { uploader } from './utils.js';
import { enviar } from './mails.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.post("/mails", uploader.array("adjuntos"),async(req, res)=>{

    let {subject, to, message}=req.body
    if(!subject || !to || !message){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete los datos`})
    }

    let adjuntos=[]
    if(req.files){
        // console.log(req.files)
        req.files.forEach(i=>{
            adjuntos.push({
                path: i.path,
                filename: i.filename
            })
        })
    }

    try {
        let resultado=await enviar(subject, to, message, adjuntos)
        if(resultado.rejected.length){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Alguno de los destinatarios no pudo procesarse:`, detalle: resultado.rejected})
        }

        if(req.files){
            req.files.forEach(i=>{
                fs.unlinkSync(i.path)
            })
        }
        
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:"mail enviado"});
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json({error:`Error al enviar mail... :(`})
    }



})

// attachments: [
//     {
//         path:"./images/diego10.jpg",
//         filename:"diegote.jpg"
//     },
//     {
//         path:"./images/lio.jpg",
//         filename:"lionel01.jpg"
//     },
//     {
//         path:"./images/lio2.jpg",
//         filename:"lio2.jpg"
//     },
// ]


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
