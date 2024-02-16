import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Calendar from "./components/Calendar";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
