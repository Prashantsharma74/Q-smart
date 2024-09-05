import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Installer from "./pages/Installer";
import Customer from "./pages/Customer";
import Jobs from "./pages/Jobs";
import AccountSettings from "./pages/AccountSettings";
import JobsDetails from "./components/JobsDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/installer" element={<Installer />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/jobs-details" element={<JobsDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
