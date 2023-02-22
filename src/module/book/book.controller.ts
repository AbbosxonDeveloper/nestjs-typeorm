import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('/get')
  async get():Promise<any[]>{
    return await this.bookService.Get()
  }

  @Post('/create')
  async create(@Body() body: any): Promise<void> {
      await this.bookService.Create(body)
  }
}
