// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";

import CursorPencil from "./components/CursorPencil";

export default function App() {
  return (
    <BrowserRouter>
      <CursorPencil />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        {/* Individual Project */}
        <Route path="/project/:id" element={<ProjectDetail />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="flex min-h-screen items-center justify-center">
              <h1 className="text-4xl font-light">404</h1>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
