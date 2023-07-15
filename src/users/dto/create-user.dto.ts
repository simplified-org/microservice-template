import { Field, InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { Role } from '../../@generated';

@InputType()
export class CreateUserDto implements Prisma.UserCreateInput {
  @Field()
  name: string;

  @Field()
  image: string;

  @Field()
  phone: string;

  @Field(() => Role)
  role: Role;
}
