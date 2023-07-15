import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/@generated';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query(() => User)
  async user(@Args('id', { type: () => ID }) id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  async createUser(@Args('createUserDto') dto: CreateUserDto) {
    return this.usersService.create(dto);
  }
}
