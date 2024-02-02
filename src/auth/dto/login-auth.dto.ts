import { IsString } from "class-validator";
import { UserRole } from "src/schemas/user.schema";

export class LoginAuthDto {
    @IsString()
    username: string

    @IsString()
    password: string

    role: UserRole
}