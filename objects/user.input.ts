import {
  Length,
} from 'class-validator';
import {
  ArgsType,
  Field,
} from 'type-graphql';

@ArgsType()
export class UserSignUp {
  @Field(() => String)
  @Length(8, 100)
  name: string = '';

  @Field(() => String)
  @Length(8, 32)
  login: string = '';

  @Field(() => String)
  @Length(8, 100)
  password: string = '';
}

@ArgsType()
export class UserSignIn {
  @Field(() => String)
  @Length(8, 32)
  login: string = '';

  @Field(() => String)
  password: string = '';
}
