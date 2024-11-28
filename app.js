import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import {test} from "./backend/controllers/jugadores.controllers.js"

dotenv.config()

mongoose.connect(process.env.bdurl)
.then(()=>{
    console.log("si funciona la DB")
})
.catch((error)=>{
    console.log("Ocurrio un error", error)
})


const app = express();
app.use(cors());
app.listen(4000, ()=>{
    console.log("Se escucha")
})


test()