import { useAuth } from "../../context/AuthContext";
import Button from "@mui/material/Button";

const LogoutButton = () => {
  const { useAuth0 } = useAuth();
  let { logout } = useAuth0();

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
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </Button>
  );
};

export default LogoutButton;
