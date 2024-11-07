import nodemailer from "nodemailer"

const transporter=nodemailer.createTransport(
    {
        service: "gmail",
        port: 587, 
        auth:{
            user: "diegopolverelli@gmail.com",
            pass: "rxyn hwvr ieub scis"
        }
    }
)

let nombre="Juan"

function enviar(){
    return transporter.sendMail({
        subject: `Prueba de email simple`,
        from: `Diego Polverelli diegopolverelli@gmail.com`,
        to: `diegopolverelli@hotmail.com, diepol@yahoo.com`,
        html: `<h2>Prueba de envío de emails...!!!</h2>
<br><p >Prueba de mensajería... compra realiazda por <b style="color:blue;">${nombre}</b></p>`
    })
}

enviar()
    .then(res=>console.log(res))
    .catch(error=>console.log(error.message))