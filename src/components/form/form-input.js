import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const FormInput = ({ name, control, label, size }) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => <TextField {...field} label={label} size={size} />}
  />
);

export default FormInput;
