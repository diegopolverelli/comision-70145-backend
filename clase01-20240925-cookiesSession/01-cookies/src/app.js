import express from 'express';
import cookieParser from "cookie-parser"
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser("CoderCoder123"))
app.use(express.static('./src/public'))

app.get('/',(req,res)=>{
    console.log(req.headers)

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get("/setcookie", (req, res)=>{

    let preferencias={
        font: "arial",
        size: 22, 
        theme: "Dark"
    }

    res.cookie("cookie01", preferencias)
    res.cookie("cookie02maxAge", preferencias, {maxAge: 1000*5})
    res.cookie("cookie03expires", preferencias, {expires: new Date(2024, 8, 30)})
    res.cookie("cookie04firmada", preferencias, {signed:true})
    res.cookie("cookie05firmadaMaxAge", preferencias, {signed:true, maxAge: 1000*60*5})

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Cookies Configuradas" });
})

app.get("/getcookie", (req, res)=>{

    let cookies=req.cookies
    // con la info de la cookie (si existe)
    let cookiesFirmadas=req.signedCookies

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({cookies, cookiesFirmadas});
})

app.get("/delcookie", (req, res)=>{

    res.clearCookie("cookie01")
    let cookies=Object.keys(req.cookies)
    cookies.forEach(nombre=>{
        res.clearCookie(nombre)
    })
    cookies=Object.keys(req.signedCookies)
    cookies.forEach(nombre=>{
        res.clearCookie(nombre)
    })

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Cookies eliminadas"});
})



const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
