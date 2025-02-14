import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserSto } from './dtos/createUser.dto';
@Controller('user')
export class UserController {

    @Post()
    async createUser(
        @Body() createUser: CreateUserSto
    ) {
        return {...createUser, password: '***'};
    }

}
