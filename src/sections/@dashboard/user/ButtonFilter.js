import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { DataContext } from '../../../providers/data-ingestion-context';

const ButtonFilter = ({ title, active, color, array }) => {
  const { handleToggleFilter } = useContext(DataContext);

  return (
    <Button
      variant={active ? 'contained' : 'outlined'}
      color={color}
      onClick={() => {
        handleToggleFilter(array, title);
      }}
    >
      {title.toUpperCase()}
    </Button>
  );
};

export default ButtonFilter;
