import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateDto} from './dto/create-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/create')
  async create(@Body() body: CreateDto): Promise<void> {
      const newUser = await this.userService.Create(body)
      return newUser
  }

  @Get('/get')
  async get():Promise<any[]>{
    return await this.userService.Get()
  }
}
