import {
  Length,
  IsEmail
} from 'class-validator';
import {
  ArgsType,
  Field,
} from 'type-graphql';

@ArgsType()
export class UserSignUp {
  @Field(() => String)
  @Length(4, 100)
  name: string = '';

  @Field(() => String)
  @Length(8, 32)
  @IsEmail()
  login: string = '';

  @Field(() => String)
  @Length(8, 100)
  password: string = '';
}

@ArgsType()
export class UserSignIn {
  @Field(() => String)
  @Length(8, 32)
  @IsEmail()
  login: string = '';

  @Field(() => String)
  password: string = '';
}
