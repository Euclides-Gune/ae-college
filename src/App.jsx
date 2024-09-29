import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/Courses";


export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  );
}