import {
  ObjectType,
  Field,
} from 'type-graphql';

@ObjectType()
export class User {
  @Field(() => String)
  id: string = '';

  @Field(() => String)
  name: string = '';
}
