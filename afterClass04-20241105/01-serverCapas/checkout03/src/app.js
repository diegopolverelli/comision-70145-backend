import express from 'express';
import cors from "cors"

import { router as ordenesRouter } from './routes/ordenesRouter.js';
import { router as negociosRouter } from './routes/negociosRouter.js';
import { router as usuariosRouter } from './routes/usuariosRouter.js';
import { conectarDB } from './ConnDB.js';
import { config } from './config/config.js';
const PORT=config.PORT;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

app.use("/api/usuarios", usuariosRouter)
app.use("/api/negocios", negociosRouter)
app.use("/api/ordenes", ordenesRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

await conectarDB(config.MONGO_URL, config.DB_NAME)
