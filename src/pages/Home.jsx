// src/pages/Home.jsx

import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectSection from "../components/ProjectSection";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Header />

      <main>
        <Hero />
        <ProjectSection />
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
}
