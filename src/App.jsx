import UserProfile from "./components/common/UserProfile";
import Body from "./components/layout/Body";
import AuthProvider from "./context/AuthContext";
import LogoutButton from "./components/common/LogoutButton";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Body />} />
            </Route>
          </Routes>
          <UserProfile />
          <LogoutButton />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
