import { Injectable } from '@nestjs/common';
import { CreateDto } from './dto/create-user.dto';
import {InjectRepository} from '@nestjs/typeorm'
import { UserRepository } from 'src/entities/user.entity';
import {Repository} from 'typeorm'

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(UserRepository)
      private readonly users: Repository<UserRepository>
    ){}

    async Get(): Promise<any>{
      const getAll = await this.users.find()
      return getAll
    }

    async Create(body:any): Promise<any>{
      const createUser = await this.users.createQueryBuilder()
      .insert()
      .into(UserRepository)
      .values({name: body.name, password: body.password})
      .returning(['*'])
      .execute()

      return createUser
    }
}
