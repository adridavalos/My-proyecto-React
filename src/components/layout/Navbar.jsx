import Toolbar  from "@mui/material/Toolbar";
import AppBar from '@mui/material/AppBar';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import LoginButton from "../common/LoginButton";

export const Navbar = ()=>{
    return(
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
            <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography variant="h6" component="div" sx={{    color: "with", fontWeight: 'bold', letterSpacing: '0.2em', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                NUBERU
                </Typography>
            </Box>
          {/* Botones en el lado derecho */}
            <LoginButton/>
        </Toolbar>
      </AppBar>
    );
};