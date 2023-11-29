import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../../core/entity/base.entity';

@Entity()
export class UserEntity extends BaseEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  username: string;
}
