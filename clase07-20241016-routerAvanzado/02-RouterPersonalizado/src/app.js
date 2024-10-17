import express from 'express';
import { HeroesRouter } from './routes/HeroesRouter.js';
import { SessionsRouter } from './routes/SessionsRouter.js';
const PORT=3000;

const app=express();
const heroesRouter=new HeroesRouter()
const sessionsRouter=new SessionsRouter()

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/heroes", heroesRouter.getRouter())
app.use("/api/sessions", sessionsRouter.getRouter())

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
