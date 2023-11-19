import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Table1 from "./components/Table1";
import HomePage from "./components/HomePage";
import VideoPage from "./components/VideoPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/table1" element={<Table1 />} />
        <Route path="/videos" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  )}