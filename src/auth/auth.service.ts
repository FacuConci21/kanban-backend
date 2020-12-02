import { Injectable } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import { CreateUserDTO } from 'src/users/dto/create-user.dto';

import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService,
            private jwtService: JwtService,
        ) {}

    async validateLocal(email: string, psw: string): Promise<any> {
        const user = await this.usersService.findOne(email);

        if (user && user.password === psw) {
            const { password, ...result } = user;
            return result;
        }

        return null;
    }

    async login(_id: string, userDTO: CreateUserDTO) {
        const payload = { username: userDTO.email, sub: _id, };
        
        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}
