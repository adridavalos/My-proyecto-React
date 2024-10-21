import { Outlet } from "react-router-dom";
import { NavbarUser } from "./NavbarUser";
import { useAuth } from "../../context/AuthContext";
import { NavbarGuest } from "./NavbarGuest";

export const Layout = () => {
  const { useAuth0 } = useAuth();
  let { isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated ? <NavbarUser /> : <NavbarGuest />}
      {/*Aca indicamos que va a ir los contenidos que nos son comunes en la aplicacion*/}
      <Outlet />
    </>
  );
};
