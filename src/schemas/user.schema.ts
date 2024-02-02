import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum UserRole {
    ENCARGADO = 'ENCARGADO',
    ADMINISTRADOR = 'ADMINISTRADOR'
}


@Schema()
export class User {
    @Prop()
    id_: string
    @Prop({
        trim: true
    })
    username: string
    @Prop({
        trim: true
    })
    password: string
    @Prop({
        trim: true
    })
    role: UserRole
}

export const UserSchema = SchemaFactory.createForClass(User)