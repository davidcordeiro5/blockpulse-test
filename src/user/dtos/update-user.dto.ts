import { Field, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@ObjectType()
export class UpdateUserDto {
  @Field()
  id: string;

  @Field()
  firstname?: string;
  @Field()
  lastname?: string;

  @Field()
  @IsNotEmpty()
  password?: string;

  @Field()
  @IsEmail()
  email?: string;

  @Field()
  isAdmin?: boolean;
}
