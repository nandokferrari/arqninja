import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const JobSelect = ({ label, items }) => (
  <FormControl sx={{ pr: '15px' }}>
    <InputLabel>{label}</InputLabel>
    <Select value={-1} label={label} onChange={() => {}} size="small">
      {items.map((item, index) => (
        <MenuItem value={index} key={index}>
          {item}
        </MenuItem>
      ))}
      <MenuItem value={-1}>Todos</MenuItem>
    </Select>
  </FormControl>
);

export default JobSelect;
