import {
  Max,
  Min,
} from 'class-validator';
import {
  ArgsType,
  Field,
} from 'type-graphql';

@ArgsType()
export class Pager {
  @Field(() => Number, { nullable: true })
  @Min(1)
  @Max(100)
  take: number = 10;

  @Field(() => Number, { nullable: true })
  @Min(0)
  skip: number = 0;
}
