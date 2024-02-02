import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtAuthGuard } from './jwt-auth.guard';


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    loginUser(@Body() user:LoginAuthDto) {
        return this.authService.login(user)
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    prueba() {
        return 'pasaste!!';
    }
}
