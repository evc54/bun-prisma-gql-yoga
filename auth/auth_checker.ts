import { GraphQLError } from 'graphql';
import type { AuthChecker } from 'type-graphql';
import type { Context } from '../yoga';

const authChecker: AuthChecker<Context> = async ({ context }): Promise<boolean> => {
  const isAthenticated = Boolean(context.user?.id);

  if (!isAthenticated) {
    throw new GraphQLError('You have to be authenticated to access this action');
  }

  return true;
};

export default authChecker;
