
import mongoose, {Schema, Document, Model} from "mongoose"; 


export interface Campo extends Document {
    name:string,
    email:string,
    numero:number,
    mensaje:string
}

const CampoSchema = new Schema<Campo>(
    {
        name:{type:String, required: true},
        email:{type:String, required: true, unique:true},
        numero:{type:Number, required: true, unique:true},
        mensaje:{type:String, required:true, unique:true}
    }
)

const ModelCampo: Model<Campo> =
(mongoose.models.Campo as Model<Campo>) ||
mongoose.model<Campo>("Campo",CampoSchema);


export default ModelCampo;
