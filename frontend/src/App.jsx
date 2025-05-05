import React from "react"; 
import Home from "./pages/Home";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "./layouts/MainLayouts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/login";
import ProfileUI from "./pages/ProfileUI";
import ReportUI from "./pages/ReportUI";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<ProfileUI />} />
          <Route path="/report" element={<ReportUI />} /> 
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;