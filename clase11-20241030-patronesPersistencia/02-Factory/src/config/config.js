import fs from "fs"
// import dotenv from "dotenv"
// dotenv.config({path:"./src/.env", override:true})

process.loadEnvFile("./src/.env")

export const config={
    PORT: process.env.PORT || 3005,
    MONGO_URL: process.env.MONGO_URL,
    DB_NAME: process.env.DB_NAME,
    PERSISTENCE: process.env.PERSISTENCE
}