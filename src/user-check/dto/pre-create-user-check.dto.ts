import { Transform, Type } from "class-transformer";
import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PreCreateUserCheckDto {
    @IsString()
    @IsNotEmpty()
    userId: string

    @IsDate()
    @Type( () => Date)
    date: Date

    @IsNumber()
    @IsNotEmpty()
    cantUf: number
}