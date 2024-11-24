import { useEffect, useRef } from "react";
import H1 from "./Heading";
import { useInView } from "framer-motion";
import { useActiveSection } from "../context/ActiveSection.tsx/ActiveSectionContext";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { setActiveSection } = useActiveSection();
  const isInView = useInView(sectionRef, { once: false, amount: 1 });

  useEffect(() => {
    if (isInView) setActiveSection(1);
  }, [isInView, setActiveSection]);

  return (
    <section ref={sectionRef} data-aos='fade-up' id='about' className='py-20'>
      <div className='flex flex-col'>
        <H1>
          <span className='text-secondary'>About</span> Me
        </H1>
        {/* <h1 className='duration-300 max-w-fit text-5xl font-bold tracking-wider my-10 px-4 py-3 rounded-2xl bg-bg4/10 hover:bg-bg4/20 shadow-xl cursor-default hover:px-5 '></h1> */}
        {/* <span className='text-3xl block mb-3 '>Welcome to my portfolio.</span> */}
        <p
          data-aos='fade-left'
          className='text-lg max-w-[600px] text-primary/60'
        >
          My name is Mahmoud, a Civil engineer, now a passionate Front-End Web
          Developer from Port Said, Egypt. I specialize in building responsive,
          user-friendly websites and applications using the latest web
          technologies.
        </p>
      </div>
    </section>
  );
};

export default About;
