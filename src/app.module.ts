import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserCheckModule } from './user-check/user-check.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:'.env'
    }),
    MongooseModule.forRoot(process.env.MONGODB_URL || 'mongodb://localhost/ufchecker'),
    
    AuthModule, 
    UsersModule, UserCheckModule, 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
