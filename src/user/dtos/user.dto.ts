import { Field, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@ObjectType()
export class UserDto {
  @Field()
  id?: string;

  @Field()
  firstname: string;
  @Field()
  lastname: string;

  @Field()
  @IsNotEmpty()
  password: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  isAdmin: boolean;
}
