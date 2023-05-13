import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class inputUser {
  @Field()
  firstname: string;
  @Field()
  lastname: string;
  @Field()
  email: string;
  @Field()
  password: string;
  @Field()
  isAdmin: boolean;
}
