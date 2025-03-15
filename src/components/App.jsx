import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Profile from "./Profile";
import Login from "./Login";
import Feed from "./Feed";
import { useSelector } from "react-redux";

function App() {
  const userInfo = useSelector((store) => store?.add_user);
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            {userInfo ? (
              <Route path="/feed" element={<Feed />} />
            ) : (
              <Route path="*" element={<Navigate to="/login" replace />} />
            )}
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
