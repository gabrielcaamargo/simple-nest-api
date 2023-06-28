import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  async findUserById(@Param('id', new ParseUUIDPipe()) id: string) {
    const user = await this.usersService.findUserById(id);

    return user;
  }

  @Post()
  async createUser(@Body() body: CreateUserDto) {
    await this.usersService.createUser(body);
  }
}
