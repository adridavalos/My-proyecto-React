import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button sx={{ color: 'white', marginRight: 2 }} onClick={() => loginWithRedirect()}>Sign In</Button>;
};

export default LoginButton;