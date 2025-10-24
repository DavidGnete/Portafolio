import mongoose from "mongoose";

const Mongo_URL= process.env.MONGO_DBURI || ""

if (!Mongo_URL){
    console.log("error en la conexion")

}


export async function MongoConect(){
    try {
        await mongoose.connect(Mongo_URL)
        console.log('conectado a base de datos')
    }catch(error){
        console.log('error conectando a BD', error)
    }
}