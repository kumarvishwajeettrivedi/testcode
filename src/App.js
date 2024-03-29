import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/home/Home.jsx";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

