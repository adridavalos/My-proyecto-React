import { useAuth } from "../../context/AuthContext";

const LogoutButton = () => {
  const { useAuth0 } = useAuth();
  let { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
