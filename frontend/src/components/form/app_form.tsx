import { 
  useForm, 
  FormProvider,
} from "react-hook-form";
import React from 'react'

interface AppFormProps {
  children: React.ReactNode;
  defaultValues: Record<string, string>;
  onSubmit: <T>(data: T) => Promise<void>;
}

const AppForm = ({ children, defaultValues, onSubmit }: AppFormProps) => {
  const methods = useForm({
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
};

export default AppForm;
