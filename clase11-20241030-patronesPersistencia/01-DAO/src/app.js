import express from 'express';

import { router as usuariosRouter } from './routes/usuarios.router.js';
import { ConectarDB } from './ConectarDB.js';
import { config } from './config/config.js';
const PORT=config.PORT;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/usuarios", usuariosRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

ConectarDB.conectar(config.MONGO_URL, config.DB_NAME)