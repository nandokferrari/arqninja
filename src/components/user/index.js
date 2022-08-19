import { styled } from '@mui/material/styles';
import account from '../../_mock/account';

const AccountStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
}));

const ImageStyle = styled('img')(() => ({
  width: '100%',
  maxWidth: '100px',
  borderRadius: '100%',
  border: 'white 5px solid',
  marginBottom: '15px',
}));
const NameStyle = styled('div')(() => ({
  fontWeight: 'bold',
}));
const EmailStyle = styled('div')(() => ({
  fontSize: 12,
  opacity: '0.7',
}));

const User = () => (
  <>
    <AccountStyle>
      <ImageStyle src={account.photoURL} />
      <NameStyle>{account.displayName}</NameStyle>
      <EmailStyle>{account.email}</EmailStyle>
    </AccountStyle>
  </>
);

export default User;
