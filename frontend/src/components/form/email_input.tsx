import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import isEmail from 'validator/es/lib/isEmail';
import type { FormInputProps } from '../../types';

const EmailInput = ({ name }: FormInputProps) => {
  const {
    register, 
    formState: { errors },
  } = useFormContext();

  const validate = (value: string) => {
    return isEmail(value) || 'This is not a valid email';
  }

  return (
    <FormControl 
      isInvalid={Boolean(errors[name])}
      isRequired
    >
      <FormLabel htmlFor="email">
        Email
      </FormLabel>

      <Input 
        id="email"
        type="text" 
        {...register(name, {
          required: 'This is required',
          validate,
        })}
      />

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
}

export default EmailInput;
