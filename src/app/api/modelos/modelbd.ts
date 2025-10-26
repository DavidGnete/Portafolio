
import mongoose, {Schema, Document, Model} from "mongoose"; 


export interface Campo extends Document {
    name:string,
    email:string,
    message:string
}

const CampoSchema = new Schema<Campo>(
    {
        name:{type:String, required: true},
        email:{type:String},
        message:{type:String}
    }
)

const ModelCampo: Model<Campo> =
(mongoose.models.Campo as Model<Campo>) ||
mongoose.model<Campo>("Campo",CampoSchema);


export default ModelCampo;
