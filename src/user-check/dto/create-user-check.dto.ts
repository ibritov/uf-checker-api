import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

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
    ufConverted: number
}