import UserProfile from "./components/common/UserProfile";
import Home from "./components/pages/Home";
import AuthProvider from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Home />
        <UserProfile />
      </AuthProvider>
    </>
  );
}

export default App;
