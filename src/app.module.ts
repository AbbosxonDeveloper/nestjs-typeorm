import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'
import { config } from './config';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { DatabaseConnect } from './typeorm';
import { UserModule } from './module/user/user.module';
import { BookModule } from './module/book/book.module';

@Module({
  imports: [ConfigModule.forRoot(config), TypeOrmModule.forRoot(DatabaseConnect), UserModule, BookModule],
})
export class AppModule {}