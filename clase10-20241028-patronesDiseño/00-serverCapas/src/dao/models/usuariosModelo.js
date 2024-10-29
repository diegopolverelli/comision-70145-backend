import mongoose from "mongoose"

export const usuarioModelo=mongoose.model(
    "usuario", 
    new mongoose.Schema(
        {
            nombre: String, 
            email: {type: String, unique:true},
            password: String
        },
        {
            timestamps:true
        }
    )
)