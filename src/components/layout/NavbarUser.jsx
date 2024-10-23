import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useAuth } from "../../context/AuthContext";
import LogoutButton from "../common/LogoutButton";

export const NavbarUser = () => {
  const { useAuth0 } = useAuth();
  let { user } = useAuth0();

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, textAlign: "left" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "white",
              fontWeight: "bold",
              letterSpacing: "0.2em",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            NUBERU
          </Typography>
        </Box>
        {/* Sección para la imagen, nombre y botón de logout */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <img
            src={user.picture}
            alt={user.name}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%", // Hace la imagen circular
            }}
          />
          <Typography
            variant="body1" // Cambié de h6 a body1 para hacer el texto más pequeño
            sx={{ color: "white", fontWeight: 90, fontSize: "1rem" }} // Más fino y más pequeño
          >
            {user.name}
          </Typography>
          <LogoutButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
