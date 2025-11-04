import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Topbar from "./components/topbar/Topbar";
import ViewUser from "./pages/viewuser";

function AppContent() {
  const location = useLocation();
  const noLayoutRoutes = ["/", "/login"];
  const hideLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <div className="app-container">
      {!hideLayout && <Topbar />}

      <div className="page-body">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/viewuser" element={<ViewUser />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
