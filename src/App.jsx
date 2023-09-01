import { useState } from "react";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import Dashboard from "./pages/dashboard/dashboard";
import Login from "./pages/login/login";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import CapturedVehicle from "./pages/captured-vehicle/CapturedVehicle";
import RegisteredVehicle from "./pages/registered-vehicle/RegisteredVehicle";
import License from "./pages/license-info/License";

function App() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (type) => {
    if (type === "only-open" && open) return;
    setOpen(!open);
  };
  const location = useLocation();
  const [isLogin, setIsLogin] = useState();

  return (
    <div className="App">
      <TopNavbar isLogin={isLogin} />
      <SideNavbar open={open} toggleDrawer={toggleDrawer} isLogin={isLogin} />
      <div
        className={
          "main-body" +
          (open ? " reduce-size" : "") +
          (isLogin ? " full-width" : "")
        }
      >
        <Routes>
          <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/captured-vehicle" element={<CapturedVehicle />} />
          <Route path="/registered-vehicle" element={<RegisteredVehicle />} />
          <Route path="/license" element={<License />} />
          <Route path="*" element={<Login setIsLogin={setIsLogin} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
