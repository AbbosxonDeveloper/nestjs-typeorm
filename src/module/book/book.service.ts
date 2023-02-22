import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { BookRepository } from 'src/entities/book.entity';
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookRepository)
    private readonly books: Repository<BookRepository>
  ){}

  async Get(){
    const getBooks = await this.books.find()
    return getBooks
  }

  async Create(body:any): Promise<void>{
    await this.books.createQueryBuilder()
    .insert()
    .into(BookRepository)
    .values(body)
    .execute()
  }
}
