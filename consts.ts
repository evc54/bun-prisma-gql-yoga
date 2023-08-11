import { env } from 'bun';

export const IS_PROD = env.NODE_ENV === 'production';

export const { JWT_SECRET = '' } = env;
export const JWT_TTL = env.JWT_TTL ?? '1h';

export const GRAPHQL_PATH = '/graphql';

export const PORT = Number(env.PORT ?? '4000');
