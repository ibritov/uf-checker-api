import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import {compare } from "bcrypt";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
        private jwtService:JwtService) { }

    async login(userLogin: LoginAuthDto): Promise<any> {
        const findUser = await this.usersService.findOne(userLogin.username);
        if(!findUser) throw new HttpException('PASSWORD_INCORRECT', 404)

        
        if(userLogin.password !== findUser.password) throw new HttpException('PASSWORD_INCORRECT', 403)

        const payload = {
            username:findUser.username,
            role:findUser.role
        }
        
        const token = await this.jwtService.sign(payload)
        

        const data = {
            userName: findUser.username,
            userId: findUser._id,
            role: findUser.role,
            token
        }
        return data
    }
}
