import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { 
  Link as ReactRouterLink,
  useNavigate,
} from 'react-router-dom';
import { useMutation } from '@apollo/client';
import {
  AppForm,
  EmailInput,
  FormInput,
  PasswordInput,
} from '../../components/form';
import {
  MUTATION_SIGN_UP, 
  type SignUpResult, 
  type SignUpVariables,
} from '../../graphql'

export const SignUpPage = () => {
  const navigate = useNavigate();

  const [
    signUpMutation,
    { loading, error }
  ] = useMutation<SignUpResult, SignUpVariables>(MUTATION_SIGN_UP);

  const onSubmit = async ({
    username,
    email,
    password,
  }: typeof defaultValues) => {
    await signUpMutation({
      variables: {
        name: username,
        login: email,
        password,
      },
      onCompleted: (data) => {
        // token will be here
        console.log({
          token: data?.signUp?.token,
        });

        navigate(`/sign_in?email=${email}`);
      }
    })
  };

  const defaultValues = {
    username: '',
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
            Sign up
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
                <FormInput 
                  htmlFor='username'
                  label='User name'
                  name="username" 
                  required
                  validation={{
                    minLength: { value: 4, message: 'Min length should be 4' },
                    maxLength: { value: 100, message: 'Max length should be less than 100' },
                  }}
                />
              </Box>

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
                Already a user?
                <Link 
                  as={ReactRouterLink} 
                  color={'blue.500'}
                  pl={2}
                  to="/sign_in"
                >
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
