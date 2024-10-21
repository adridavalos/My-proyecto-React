import { createContext, useContext } from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        // Esto significa que después de que el usuario inicie sesión o se autentique, será redirigido de vuelta a la página principal de la aplicación.
        redirect_uri: window.location.origin,
      }}
    >
      <AuthContext.Provider value={{ useAuth0 }}>
        {children}
      </AuthContext.Provider>
    </Auth0Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
