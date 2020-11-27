import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService) {}

    async validateLocal(email: string, psw: string): Promise<any> {
        const user = await this.usersService.findOne(email);

        if (user && user.password === psw) {
            const { password, ...result } = user;
            return result;
        }

        return null;
    }
}
