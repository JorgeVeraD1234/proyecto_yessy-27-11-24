import { Schema, model } from "mongoose";

const EsquemaJugadores = new Schema({
    name: String,
    apepat: String,
    numero: Number
})



export const ModeloJugadores = new model("Coleccion de jugadores", EsquemaJugadores)