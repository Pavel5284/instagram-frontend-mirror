import { Input } from 'packages.inputs.input';
import { ChangeEvent, Ref } from 'react';
import { FieldValues, Control, Path, UseFormClearErrors, useController } from 'react-hook-form';

export type InputWithHookFormProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  inputRef?: Ref<any> | undefined;
  clearErrors?: UseFormClearErrors<T>;
  label?: string;
  type?: 'text' | 'password';
  isError?: boolean;
  helperText?: string;
};

export const InputWithHookForm = <T extends FieldValues>({
  control,
  name,
  inputRef,
  clearErrors,
  label,
  type,
  isError,
  helperText,
}: InputWithHookFormProps<T>) => {
  const {
    field: { value, onChange },
  } = useController({
    control,
    name,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);

    if (clearErrors) {
      clearErrors(name);
    }
  };

  return (
    <Input
      onChange={handleChange}
      value={value}
      name={name}
      inputRef={inputRef}
      label={label}
      type={type}
      error={isError}
      helperText={helperText}
    />
  );
};
