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
        subject:"Prueba email con adjuntos incrustados",
        from: `Diego diegopolverelli@gmail.com`,
        to: `diegopolverelli@hotmail.com`,
        html: `Prueba de email con adjuntos incrustados

<h3>Diego Maradona</h3>
<img src="cid:foto01" width="300"/>
<h3>Lionel Messi</h3>
<img src="cid:foto02" width="300"/>
<h3>Lionel Messi 2</h3>
<img src="cid:foto03" width="300"/>
        `,
        attachments: [
            {
                path:"./images/diego10.jpg",
                filename:"diegote.jpg",
                cid: "foto01"
            },
            {
                path:"./images/lio.jpg",
                filename:"lionel01.jpg",
                cid: "foto02"
            },
            {
                path:"./images/lio2.jpg",
                filename:"lio2.jpg",
                cid: "foto03"
            },
        ]
    })
}

enviar()
    .then(res=>console.log(res))
    .catch(e=>console.log(e.message))