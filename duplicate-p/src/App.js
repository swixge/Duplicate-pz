import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./views/LoginPage";
import RegistrationPage from "./views/RegistrationPage";
import MainPage from "./views/MainPage";
import UserCabinet from "./views/UserCabinet";
import AdminPage from "./views/AdminPage";
import TextAnalyzerForm from "./TextAnalyzerForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/cabinet" element={<UserCabinet />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
