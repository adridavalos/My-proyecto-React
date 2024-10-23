import Button from "@mui/material/Button";
import { useAuth } from "../../context/AuthContext";
const LoginButton = () => {
  //TODO: usar contexto en vez de llamar a la funcion de auth0
  const { useAuth0 } = useAuth();
  let { loginWithRedirect } = useAuth0();

  return (
    <Button
      sx={{
        color: "white",
        marginRight: 2,
        border: "1px solid lightgray", // Borde fino gris claro
        padding: "6px 12px", // Un poco de padding para que el botón tenga más espacio
        borderRadius: "4px", // Bordes ligeramente redondeados (opcional)
        "&:hover": {
          border: "1px solid gray", // Cambia el color del borde al hacer hover
        },
      }}
      // Llama a la función loginWithRedirect(), que inicia el proceso de autenticación de Auth0 mediante redirección.
      onClick={() => loginWithRedirect()}
    >
      Sign In
    </Button>
  );
};

export default LoginButton;
