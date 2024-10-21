import Button from "@mui/material/Button";
import { useAuth } from "../../context/AuthContext";
const LoginButton = () => {
  //TODO: usar contexto en vez de llamar a la funcion de auth0
  const { useAuth0 } = useAuth();
  let { loginWithRedirect } = useAuth0();

  return (
    <Button
      sx={{ color: "white", marginRight: 2 }}
      // Llama a la función loginWithRedirect(), que inicia el proceso de autenticación de Auth0 mediante redirección.
      onClick={() => loginWithRedirect()}
    >
      Sign In
    </Button>
  );
};

export default LoginButton;
