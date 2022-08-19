// material
import { Button, ButtonGroup, FormControl, InputLabel, MenuItem, OutlinedInput, Select, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { map } from 'lodash';
import { useContext, useState } from 'react';
import { DataContext } from '../../../providers/data-ingestion-context';
import ButtonFilter from './ButtonFilter';
import JobSelect from './JobSelect';
// component

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3),
  flexWrap: 'wrap',
  marginTop: 15,
}));

const FlexStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  ' > *': {
    margin: 10,
  },
  ' > :last-child': {
    marginRight: 0,
  },
  ' > :first-child': {
    marginLeft: 0,
  },
}));

const selectElements = [
  {
    name: 'VS',
    items: ['Operações', 'Ecomm', 'Franqueado'],
  },
  {
    name: 'Engenharia',
    items: ['Back', 'Front', 'Business'],
  },
  {
    name: 'Tecnologia',
    items: ['SQL Server', 'Postgres', 'Files'],
  },
];

export default function DataFilter({ numSelected }) {
  const { filterSource, filterStatus, setFilterSource, setFilterStatus } = useContext(DataContext);

  const params = {
    source: ['sgbd', 'files', 'sap', 'streaming'],
    status: ['dev', 'prd'],
  };

  return (
    <RootStyle
      sx={{
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      <FlexStyle sx={{ '> *': { marginRight: '0px !important' } }}>
        {selectElements.map((item, index) => (
          <JobSelect key={index} label={item.name} items={item.items} />
        ))}
      </FlexStyle>
      <FlexStyle>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          {params.source.map((item, index) => (
            <ButtonFilter
              key={index}
              title={item}
              active={filterSource.includes(item)}
              filterParams={filterSource}
              setFilter={setFilterSource}
              array={filterSource}
            />
          ))}
        </ButtonGroup>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
          {params.status.map((item, index) => (
            <ButtonFilter
              key={index}
              title={item}
              active={filterStatus.includes(item)}
              color="primary"
              filterParams={filterStatus}
              setFilter={setFilterStatus}
              array={filterStatus}
            />
          ))}
        </ButtonGroup>
      </FlexStyle>
    </RootStyle>
  );
}
