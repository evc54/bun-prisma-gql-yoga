import { FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { useFormContext } from "react-hook-form";
import type { FormInputProps } from '../../types';

interface FormInputPropsWithValidation extends FormInputProps {
  htmlFor?: string;
  label?: string;
  required?: boolean;
  validation?: Record<string, any>;
}

const FormInput = ({ 
  htmlFor,
  label,
  name, 
  required,
  validation, 
}: FormInputPropsWithValidation) => {
  const {
    register, 
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl
      isInvalid={Boolean(errors[name])}
      isRequired={required}
    >
      {
        label
          ? (
            <FormLabel htmlFor={htmlFor}>
              User name
            </FormLabel>
          )
          : null
      }

      <Input 
        id={name}
        type="text" 
        {...register(name, {
          ...(validation ?? {}),
          ...(required ? { required: 'This is required' } : {})
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

export default FormInput;
