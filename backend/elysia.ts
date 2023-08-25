import { jwt } from '@elysiajs/jwt';
import { Elysia } from 'elysia';
import { cors } from '@elysiajs/cors';
import prisma from './prisma/client';
import {
  GRAPHQL_PATH,
  IS_PROD,
  JWT_SECRET,
  JWT_TTL,
} from './consts';
import { extractAuthorization } from './utils';
import {
  type Context,
  yogaFetch,
} from './yoga';

const app = new Elysia()
  .decorate<'user', Context['user']>('user', null)
  .use(cors())
  .use(jwt({
    secret: JWT_SECRET,
    exp: JWT_TTL,
  }))
  .on('beforeHandle', async context => {
    const jwt = extractAuthorization(context.request.headers);
    const data = await context.jwt.verify(jwt);

    if (data && data.sub) {
      context.user = await prisma.user.findUnique({
        select: {
          id: true,
          name: true,
        },
        where: {
          id: data.sub,
        },
      });
    }
  })
  .post(GRAPHQL_PATH, context => yogaFetch(context), { type: 'none' })
  .get(GRAPHQL_PATH, context => {
    if (IS_PROD) return {
      error: true,
      errorMessage: 'Not available in production mode',
    };

    return yogaFetch(context);
  });

export default app;
