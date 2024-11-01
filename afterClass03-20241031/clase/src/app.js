import express from 'express';
import {engine} from "express-handlebars"
import {Server} from "socket.io"
import mongoose from 'mongoose';
import cookieParser from "cookie-parser"
import { router as sessionsRouter } from './routes/sessions.router.js';
import { router as alumnosRouter } from './routes/alumnos.router.js';
import { router as cursosRouter } from './routes/cursos.router.js';
import { router as vistasRouter } from './routes/vistasRouter.js';
import { config } from './config/config.js';
import passport from 'passport';
import { iniciarPassport } from './config/passport.config.js';

const PORT=config.PORT;
let io

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))
app.use(cookieParser())
iniciarPassport()
app.use(passport.initialize())

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

app.use("/api/alumnos", alumnosRouter)
app.use(
    "/api/cursos",
    (req, res, next)=>{
        req.io=io

        next()
    }, 
    cursosRouter
)
app.use("/api/sessions", sessionsRouter)
app.use("/", vistasRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{    // server HTTP
    console.log(`Server escuchando en puerto ${PORT}`);
});

io=new Server(server)  // server webSocket

const connDB=async()=>{
    try {
        await mongoose.connect(
            config.MONGO_URL,
            {
                dbName: config.DB_NAME
            }
        )
        console.log("DB conectada...!!!")
    } catch (error) {
        console.log(`Error al conectar a DB: ${error}`)
    }
}
connDB()