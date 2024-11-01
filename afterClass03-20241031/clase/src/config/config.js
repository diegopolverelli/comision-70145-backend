import dotenv from "dotenv"

dotenv.config({
    path:"./src/.env", override:true
})

export const config={
    PORT:process.env.PORT,
    MONGO_URL: process.env.MONGO_URL,
    DB_NAME: process.env.DB_NAME, 
    SECRET: process.env.SECRET
}

// console.log(process.env.PRUEBA_PORT)

// console.log(config)