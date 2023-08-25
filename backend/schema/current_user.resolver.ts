import {
  Ctx,
  Query,
  Resolver,
} from 'type-graphql';
import { User } from '../objects';
import { Context } from '../yoga';

@Resolver(User)
export class CurrentUserResolver {
  @Query(() => User, { nullable: true })
  async currentUser(
    @Ctx() context: Context,
  ) {
    return context.user ?? null;
  }
}
