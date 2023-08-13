import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { 
  Link as ReactRouterLink,
  useNavigate,
} from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {
  AppForm,
  EmailInput,
  PasswordInput,
} from '../../components/form';
import { 
  MUTATION_SIGN_IN, 
  type SignInResult, 
  type SignInVariables,
} from '../../graphql';
import { useContext } from 'react';
import { CurrentUserContext } from '../../context';

export const SignInPage = () => {
  const navigate = useNavigate();

  const ctx = useContext(CurrentUserContext);

  const [
    signInMutation,
    { loading, error }
  ] = useMutation<SignInResult, SignInVariables>(MUTATION_SIGN_IN);

  const onSubmit = async ({
    email,
    password,
  }: typeof defaultValues) => {
    await signInMutation({
      variables: {
        login: email,
        password,
      },
      onCompleted: (data) => {
        // token will be here
        console.log({
          token: data?.signIn?.token,
        });

        // set token to the user context
        if (data?.signIn?.token) {
          ctx.setCurrentUser({
            token: data.signIn.token,
          })
        }

        navigate('/');
      }
    })
  };

  const defaultValues = {
    email: '',
    password: '',
  };



  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack 
        spacing={8}
        mx={'auto'}
        py={12} 
        px={6}
        width="32rem"
      >
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign in to your account
          </Heading>

          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>

        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <AppForm 
              defaultValues={defaultValues}
              onSubmit={onSubmit}
            >
              <Box mb="6">
                <EmailInput name="email" />
              </Box>

              <Box mb="10">
                <PasswordInput name="password" />
              </Box>

              <Stack spacing={10}>
                <Button
                  isLoading={loading}
                  size="lg"
                  bg={'blue.500'}
                  color={'white'}
                  type="submit"
                  _hover={{
                    bg: 'blue.700',
                  }}
                >
                  Sign up
                </Button>
              </Stack>
            </AppForm>

            <Stack mt="2">
              <Text align={'center'}>
                Don't have an account yet?
                <Link 
                  as={ReactRouterLink} 
                  color={'blue.500'}
                  pl={2}
                  to="/sign_up"
                >
                  Register
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
};
