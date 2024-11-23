import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact";
import ActiveSectionProvider from "./context/ActiveSection.tsx/ActiveSectionProvider";
import Layout from "./Layout";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <ActiveSectionProvider>
        <Layout>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Layout>
      </ActiveSectionProvider>
    </>
  );
}

export default App;
