import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { UsersService } from './users.service';

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
}
