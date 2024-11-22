import { useEffect, useRef } from "react";
import { socials } from "../lib/constants";
import { FaArrowCircleDown } from "react-icons/fa";
import { useActiveSection } from "../context/ActiveSection.tsx/ActiveSectionContext";
import { useInView } from "framer-motion";

const Home = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { setActiveSection } = useActiveSection();
  const isInView = useInView(sectionRef, { once: false, amount: 0.6 });

  useEffect(() => {
    if (isInView) setActiveSection(0);
  }, [isInView, setActiveSection]);

  return (
    <section
      ref={sectionRef}
      id='home'
      className='flex flex-col md:flex-row-reverse items-center justify-between w-full min-h-screen pt-10 sm:pt-40 gap-10 '
    >
      <div data-aos='fade-right' className='flex flex-col items-center gap-4 '>
        <div className='w-[300px] h-[400px] rounded-full overflow-hidden shadow-xl'>
          <img
            src='image.JPG'
            alt='profile picture'
            className='size-full object-cover duration-300 hover:scale-105 shadow-2xl'
          />
        </div>
        <div className='flex gap-8 justify-center'>
          {socials.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target='_blank'
              title={item.title}
              className='text-2xl duration-300 ring- ring-primary/80 hover:ring-0 text-primary/50 hover:text-secondary'
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
      <div
        data-aos='fade-left'
        className='flex flex-col gap-2 justify-center items-start'
      >
        <span className='text-lg'>Hello, i'm</span>
        <span className='text-5xl font-extrabold text-secondary'>Mahmoud,</span>
        <span className='text-4xl font-extrabold text-secondary'>
          Front-End Web Developer
        </span>
        <span className='text-secondary text-base'>specialized in React</span>
        <span className='text-lg'>based in Egypt.</span>
        <a className='mt-10 px-8 py-4 space-x-3 text-base font-semibold border-animated bg-secondary hover:bg-primary text-primary hover:text-secondary rounded-lg cursor-pointer'>
          <span>Download CV</span>
          <FaArrowCircleDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Home;
