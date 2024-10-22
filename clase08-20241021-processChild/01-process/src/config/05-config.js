import dotenv from "dotenv"

let mode="dev"
dotenv.config({
    path:mode==="prod"?"./src/.env.prod":"./src/.env.dev",
    override:true
})

export const config={
    PORT:process.env.PORT,
    MONGO_URL:process.env.MONGO_URL
}