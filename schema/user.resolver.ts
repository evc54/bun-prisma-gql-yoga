import { GraphQLError } from 'graphql';
import {
  Args,
  Authorized,
  Ctx,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import {
  Jwt,
  Pager,
  User,
  UserPage,
  UserSignIn,
  UserSignUp,
} from '../objects';
import prisma from '../prisma/client';
import {
  passwordHash,
  passwordMatch,
} from '../utils';
import { Context } from '../yoga';

@Resolver(User)
export class UserResolver {
  @Mutation(() => Jwt)
  async signUp(
    @Ctx() context: Context,
    @Args(() => UserSignUp,
  ) { name, login, password }: UserSignUp) {
    const count = await prisma.user.count({
      where: {
        login,
      },
    });

    if (count > 0) {
      throw new GraphQLError('Chosen login name is already occupied')
    }

    await prisma.user.create({
      data: {
        name,
        login,
        password: await passwordHash(password),
      },
    });

    return this.signIn(context, { login, password });
  }

  @Mutation(() => Jwt)
  async signIn(
    @Ctx() context: Context,
    @Args(() => UserSignIn) { login, password }: UserSignIn,
  ) {
    const user = await prisma.user.findFirst({
      select: {
        id: true,
        password: true,
      },
      where: {
        login,
      },
    });

    const isPasswordValid = await passwordMatch(user?.password ?? '', password);

    if (!user || !isPasswordValid) {
      throw new GraphQLError('Incorrect login credentials');
    }

    const token = await context.jwt.sign({
      sub: user.id,
      aud: context.request.headers.get('origin') ?? 'no-origin',
      iat: Math.trunc(Date.now() / 1000),
    });

    return {
      token,
    };
  }

  @Authorized()
  @Query(() => UserPage)
  async users(@Args(() => Pager) { take, skip }: Pager) {
    const data = await prisma.user.findMany({
      take: take + 1,
      skip,
    });

    return {
      items: data.slice(0, take),
      hasMore: data.length > take,
    };
  }
}
