import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Calendar from "./components/Calendar";
import Login from "./components/Login";

// import { RequireToken } from "./utils/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
