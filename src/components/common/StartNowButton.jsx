import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button 
            variant="contained"
          sx={{
            backgroundColor: 'coral', 
            color: '#fff', 
            padding: '16px 32px',
            fontSize: '1.5rem',
            '&:hover': {
              backgroundColor: 'darkorange',
            },
          }}
            onClick={() => loginWithRedirect()}>Start Now</Button>;
};

export default LoginButton;