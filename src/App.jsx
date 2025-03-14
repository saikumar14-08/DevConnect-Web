import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Layout from "./Layout";
import Profile from "./Profile";
import Login from "./Login";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
