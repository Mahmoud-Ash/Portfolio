import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./components/Contact";
import ActiveSectionProvider from "./context/ActiveSection.tsx/ActiveSectionProvider";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <>
      <ActiveSectionProvider>
        <Header />
        <main className='max-w-[1200px] mx-auto px-10 pb-10 rounded-xl'>
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <footer></footer>
      </ActiveSectionProvider>
    </>
  );
}

export default App;
