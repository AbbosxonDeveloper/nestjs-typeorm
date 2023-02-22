import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { BookRepository } from 'src/entities/book.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BookRepository])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
