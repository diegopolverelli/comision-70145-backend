import express from 'express';
import session from "express-session"
import MongoStore from "connect-mongo"
import { config } from './config/config.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: config.SECRET_SESSION,
    resave: true, 
    saveUninitialized: true,
    store: MongoStore.create(
        {
            mongoUrl: config.MONGO_URL, 
            dbName: config.DB_NAME,
            ttl: 3600,
        }
    )
}))


app.get('/',(req,res)=>{
    if(req.session.visitas){
        req.session.visitas++
    }else{
        req.session.visitas=1
    }


    let saludo=`Hola. Visitas al sitio: ${req.session.visitas}`

    res.setHeader('Content-Type','text/plain');
    res.status(200).send(saludo);
})

app.get("/prueba", (req, res)=>{
    let visitas=req.session.visitas?req.session.visitas:"no definidas"

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:visitas});
})


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
