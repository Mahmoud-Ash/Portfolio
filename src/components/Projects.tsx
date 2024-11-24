import Link from "./Link";
import H1 from "./Heading";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { useActiveSection } from "../context/ActiveSection.tsx/ActiveSectionContext";
import { projects } from "../lib/constants";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { setActiveSection } = useActiveSection();
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) setActiveSection(3);
  }, [isInView, setActiveSection]);

  return (
    <section ref={sectionRef} id='projects' className='py-20'>
      <div className='flex flex-col gap-5'>
        <H1>
          My <span className='text-secondary'>Projects</span>
        </H1>
        {projects.map((project, i) => (
          <div
            data-aos={i % 2 ? "fade-left" : "fade-right"}
            key={project.title}
            className={`flex flex-col rounded-2xl bg-bg4/20 overflow-hidden min-h-96
                ${i % 2 ? "lg:flex-row-reverse" : "lg:flex-row"}`}
          >
            {/* DETAILS   */}
            <div className='lg:w-1/2 bg-blue-200/20 p-10 space-y-5'>
              {/* TITLE  */}
              <div className='space-y-2'>
                <h3 className='before:size-2 before:bg-secondary/40 font-semibold flex items-center gap-4'>
                  Title
                </h3>
                <p className='px-6 text-primary/60'>{project.title}</p>
              </div>
              {/* DESCRIPTION  */}
              <div className='space-y-2'>
                <h3 className='before:size-2 before:bg-secondary/40 font-semibold flex items-center gap-4'>
                  Description
                </h3>
                <p className='px-6 text-primary/60'>{project.desc}</p>
              </div>
              {/* TECHNOLOGIES  */}
              <div className='space-y-2'>
                <h3 className='before:size-2 before:bg-secondary/40 font-semibold flex items-center gap-4'>
                  Technologies
                </h3>
                <ul className='flex flex-wrap gap-2'>
                  {project.techs.map(tech => (
                    <li
                      key={tech}
                      className='px-3 py-1 ring-1 ring-secondary text-secondary rounded-full'
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* IMAGE  */}
            <div className='group lg:w-1/2 overflow-hidden grid'>
              <img
                src={project.img}
                alt='project demo'
                className='size-full object-cover group-hover:scale-110 duration-300 row-start-1 col-start-1'
              />
              <div className='z-10 w-full bg-bg2/30 py-10 px-2 flex flex-wrap gap-5 group-hover:bg-transparent duration-300 justify-center items-end row-start-1 col-start-1'>
                {project.repo && (
                  <Link href={project.repo}>View Source Code</Link>
                )}
                {project.link && <Link href={project.link}>Live Demo</Link>}
                {project.figma && (
                  <Link href={project.figma}>Figma Design</Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
