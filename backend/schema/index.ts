import { buildSchema  } from 'type-graphql';
import authChecker from '../auth/auth_checker';
import { CurrentUserResolver } from './current_user.resolver';
import { UserResolver } from './user.resolver';

const schema = await buildSchema({
  resolvers: [
    CurrentUserResolver,
    UserResolver,
  ],
  authChecker,
});

export default schema;
