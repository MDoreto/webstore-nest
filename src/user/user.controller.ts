import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
@Controller('user')
export class UserController {

    constructor(private readonly UserService: UserService) { }

    @Post()
    async createUser(
        @Body() createUser: CreateUserDto
    ) {
        return this.UserService.createUser(createUser);
    }

    @Get()
    async getAllUsers() {
        return this.UserService.getAllUsers();
    }

}
