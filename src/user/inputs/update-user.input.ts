import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class inputUpdateUser {
  @Field()
  id: string;
  @Field({ nullable: true })
  firstname?: string;
  @Field({ nullable: true })
  lastname?: string;
  @Field({ nullable: true })
  email?: string;
  @Field({ nullable: true })
  password?: string;
  @Field({ nullable: true })
  isAdmin?: boolean;
}
