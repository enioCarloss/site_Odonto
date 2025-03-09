import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/views/home.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
