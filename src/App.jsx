import ParticlesBackground from "./components/ParticlesBackground";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import SocialLinks from "./components/SocialLinks";
import GeneralFooter from "./components/GeneralFooter";

function App() {
  return (
    <>
      <ParticlesBackground />
      <SocialLinks />

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* <Route path="/about-me" element={<AboutPage />} /> */}

        {/* <Route path="/projects" element={<AllProjectsPage />} /> */}
      </Routes>

      <GeneralFooter />
    </>
  );
}

export default App;
