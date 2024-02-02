import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { User } from "./user.schema";

@Schema({
    timestamps: true
})
export class UserCheck {
    @Prop({type: String})
    userId: User['id_']

    @Prop({ type: Date, required: true })
    ufDate: Date

    @Prop({ type: Number, required: true })
    cantUf: number
    
    @Prop({ type: Number, required: true })
    ufValue: number

    @Prop({ type: Number, required: true })
    amountConverted: number
}


export const UserCheckSchema = SchemaFactory.createForClass(UserCheck)