import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'jarrell17@ethereal.email',
        pass: 'KQfF3cyZKaBMfqbj2R'
    }
});

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