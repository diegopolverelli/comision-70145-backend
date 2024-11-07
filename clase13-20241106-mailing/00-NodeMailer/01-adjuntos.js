import nodemailer from "nodemailer"

const transporter=nodemailer.createTransport(
    {
        service: "gmail", 
        port: 587, 
        auth: {
            user: "diegopolverelli@gmail.com",
            pass: "rxyn hwvr ieub scis"
        }
    }
)

const enviar=()=>{
    return transporter.sendMail({
        subject:"Prueba email con adjuntos",
        from: `El emporio del Coder diegopolverelli@gmail.com`,
        to: `diegopolverelli@hotmail.com`,
        html: `Prueba de email con adjuntos`,
        attachments: [
            {
                path:"./images/diego10.jpg",
                filename:"diegote.jpg"
            },
            {
                path:"./images/lio.jpg",
                filename:"lionel01.jpg"
            },
            {
                path:"./images/lio2.jpg",
                filename:"lio2.jpg"
            },
        ]
    })
}

enviar()
    .then(res=>console.log(res))
    .catch(e=>console.log(e.message))