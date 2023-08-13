import { useState } from "react";
import { 
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { 
  ViewIcon, 
  ViewOffIcon,
} from '@chakra-ui/icons';
import { useFormContext } from "react-hook-form";
import type { FormInputProps } from '../../types';

const PasswordInput = ({ name }: FormInputProps) => {
  const {
    register, 
    formState: { errors },
  } = useFormContext();
  
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  }
  
  return (
    <FormControl
      id="password" 
      isInvalid={Boolean(errors[name])}
      isRequired
    >
      <FormLabel>Password</FormLabel>

      <InputGroup>
        <Input
          type={showPassword ? 'text' : 'password'}
          {...register(name, 
            {
            required: 'This is required',
            minLength: { value: 8, message: 'Min length should be 8' },
            maxLength: { value: 100, message: 'Max length should be less than 100' },
            }
          )}
        />

        <InputRightElement h={'full'}>
          <Button
            variant={'ghost'}
            onClick={togglePassword}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      {
        errors[name]
          ? (
            <FormErrorMessage>
              {`${errors[name]?.message}`}
            </FormErrorMessage>
          )
          : null
      }
    </FormControl>
  )
};

export default PasswordInput;
