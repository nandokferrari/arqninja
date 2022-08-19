import React from 'react';
import { FormControl } from '@mui/material';
import FormInput from '../form/form-input';

const SecondStep = ({ control, source }) => (
  <>
    <FormControl fullWidth sx={{ mb: '20px' }}>
      <FormInput control={control} name={`campo3`} label={`Campo 1 - ${source}`} size="small" />
    </FormControl>
    <FormControl fullWidth sx={{ mb: '20px' }}>
      <FormInput control={control} name={`campo4`} label={`Campo 2 - ${source}`} size="small" />
    </FormControl>
  </>
);

export default SecondStep;
