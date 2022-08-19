import { useRef, useState, useContext } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Menu, MenuItem, IconButton, ListItemIcon, ListItemText } from '@mui/material';
import Iconify from '../../../components/Iconify';
import { DataContext } from '../../../providers/data-ingestion-context';

export default function MoreMenu({ item, fetchData }) {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const ctxt = useContext(DataContext);

  const navigate = useNavigate();

  return (
    <>
      <IconButton ref={ref} onClick={() => setIsOpen(true)}>
        <Iconify icon="eva:more-vertical-fill" width={20} height={20} />
      </IconButton>

      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem component={RouterLink} to={`/data-ingestion/job/${item._id}`} sx={{ color: 'text.secondary' }}>
          <ListItemIcon>
            <Iconify icon="eva:edit-fill" width={24} height={24} />
          </ListItemIcon>
          <ListItemText
            primary="Editar"
            primaryTypographyProps={{ variant: 'body2' }}
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </MenuItem>
        <MenuItem
          sx={{ color: 'red' }}
          onClick={() => {
            ctxt.handleDelete(item._id, fetchData);
            setIsOpen(false);
          }}
        >
          <ListItemIcon sx={{ color: 'red' }}>
            <Iconify icon="eva:trash-2-outline" width={24} height={24} />
          </ListItemIcon>
          <ListItemText primary="Remover" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
      </Menu>
    </>
  );
}
