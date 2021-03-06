import { Controller } from "react-hook-form";
import TextField from "../TextField";

interface Props {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  rules: object;
  control: any;
  error: any;
}

const FormTextField = (props: Props) => {
  const { name, label, placeholder, rules, type, error, control } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          placeholder={placeholder}
          error={error && error[name] && error[name]?.message}
        />
      )}
      rules={rules}
      defaultValue=""
    />
  );
};

export default FormTextField;
