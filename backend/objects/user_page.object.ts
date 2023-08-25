import {
  ObjectType,
  Field,
} from 'type-graphql';
import { User } from './user.object';

@ObjectType()
export class UserPage {
  @Field(() => [User])
  items: User[] = [];

  @Field(() => Boolean)
  hasMore: boolean = false;
}
