import { Server } from "./class/Server.js"

const PORT=3000
const app=new Server(PORT).getApp()

app.get("/", (req, res)=>{

    res.send("Hola Mundo...!!!")
})