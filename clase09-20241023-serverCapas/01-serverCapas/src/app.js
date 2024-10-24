import express from 'express';
import { router as juguetesRouter } from './routes/juguetesRouter.js';
import { router as usuariosRouter } from './routes/usuariosRouter.js';
import { connDB } from './dao/connDB.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/juguetes", juguetesRouter)
app.use("/api/usuarios", usuariosRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});


connDB()