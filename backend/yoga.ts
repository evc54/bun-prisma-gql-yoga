import { JWTPayloadSpec } from '@elysiajs/jwt';
import {
  YogaInitialContext,
  createYoga,
} from 'graphql-yoga';
import schema from './schema';

export type Context = YogaInitialContext & {
  jwt: {
    readonly sign: (
      payload: JWTPayloadSpec & { [k: string]: any; },
    ) => Promise<string>;
    readonly verify: (
      jwt?: string,
    ) => Promise<false | JWTPayloadSpec & { [k: string]: any; }>;
  };
  user?: { id: string; } | null;
}

const yoga = createYoga<Context>({
  schema,
  cors: false, // Elysia will handle CORS
});

export const yogaFetch = ({ jwt, request, user }: Context) => {
  return yoga.fetch(request, { jwt, request, user });
};

export default yoga;
