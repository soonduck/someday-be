import { Injectable } from '@nestjs/common';
import { CreateUserInput, CreateUserOutput } from './dto/createUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly user: Repository<UserEntity>,
  ) {}
  createUser(createUserInput: CreateUserInput): CreateUserOutput {
    return { ok: true };
  }
}
