import { gql } from '@apollo/client';

export interface CurrentUserResult {
  currentUser: {
    id: string;
    name: string;
  };
}

export const QUERY_GET_CURRENT_USER = gql`
  query CurrentUser {
    currentUser {
      id
      name
    }
  }
`;
