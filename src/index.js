import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Account from "./pages/Account";
import AccountDemande from "./pages/AccountDemandes";
import AccountVoitures from "./pages/AccountVoitures";
import AdvancedConfigPage from "./pages/AdvancedConfigPage";
import Locations from "./pages/Locations";
import VoitureConfigPage from "./pages/VoitureConfigPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/confirmmodel" element={<VoitureConfigPage />} />
        <Route path="/advancedconfig" element={<AdvancedConfigPage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/demandes" element={<AccountDemande />} />
        <Route path="/account/locations" element={<Locations />} />
        <Route path="/account/voitures" element={<AccountVoitures />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
