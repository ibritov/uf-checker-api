import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserCheckDto {
    @IsString()
    @IsNotEmpty()
    userId: string

    @IsDate()
    ufDate: Date

    @IsNumber()
    @IsNotEmpty()
    ufValue: number

    @IsNumber()
    @IsNotEmpty()
    cantUf: number

    @IsNumber()
    @IsNotEmpty()
    amountConverted: number
}