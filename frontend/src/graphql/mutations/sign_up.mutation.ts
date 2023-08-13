import { gql } from '@apollo/client';

export interface SignUpVariables {
  name: string;
  login: string;
  password: string;
}

export interface SignUpResult {
  signUp: {
    token: string;
  }
}

export const MUTATION_SIGN_UP = gql`
  mutation SignUp(
    $name: String!,
    $login: String!,
    $password: String!,
  ) {
    signUp(
      name: $name,
      login: $login, 
      password: $password
    ) {
      token
    }
  }
`;
