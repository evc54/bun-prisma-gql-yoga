import { buildSchema  } from 'type-graphql';
import authChecker from '../auth/auth_checker';
import { UserResolver } from './user.resolver';

const schema = await buildSchema({
  resolvers: [
    UserResolver,
  ],
  authChecker,
});

export default schema;
