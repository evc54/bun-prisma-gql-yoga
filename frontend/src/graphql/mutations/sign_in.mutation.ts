import { gql } from '@apollo/client';

export interface SignInVariables {
  login: string;
  password: string;
}

export interface SignInResult {
  signIn: {
    token: string;
  }
}

export const MUTATION_SIGN_IN = gql`
  mutation SignIn(
    $login: String!,
    $password: String!,
  ) {
    signIn(login: $login, password: $password) {
      token
    }
  }
`;
