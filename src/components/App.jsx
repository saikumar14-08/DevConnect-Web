import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Profile from "./Profile";
import Login from "./Login";
import Feed from "./Feed";
import Connections from "./Connections";
import Requests from "./Requests";
import PrivacyPolicy from "./FooterLinks/PrivacyPolicy";
import TermsAndConditions from "./FooterLinks/TermsAndConditions";
import CancellationAndRefund from "./FooterLinks/CancellationAndRefund";
import Ship from "./FooterLinks/Ship";
import ContactUs from "./FooterLinks/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/feed" replace />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/tandc" element={<TermsAndConditions />} />
            <Route path="/cancellation" element={<CancellationAndRefund />} />
            <Route path="/delivery" element={<Ship />} />
            <Route path="/contact" element={<ContactUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
