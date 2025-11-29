import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Projects from "./Projects";
const FrontEnd = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default FrontEnd;
