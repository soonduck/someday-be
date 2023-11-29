import { PickType } from '@nestjs/mapped-types';
import { UserEntity } from '../entity/user.entity';
import { CoreOutput } from '../../core/dto/output.dto';

export class CreateUserInput extends PickType(UserEntity, [
  'email',
  'username',
  'password',
]) {
  pic?: string;
}
export class CreateUserOutput extends CoreOutput {}
