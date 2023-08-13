import {
  ObjectType,
  Field,
} from 'type-graphql';

@ObjectType()
export class Jwt {
  @Field(() => String)
  token: string = '';
}
