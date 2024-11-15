import H1 from "./H1";

const Projects = () => {
  return (
    <div>
      <section id='projects' className='mb-20'>
        <div className='flex flex-col'>
          <H1>
            My <span className='text-secondary'>Projects</span>
          </H1>
          <div className='flex rounded-2xl bg-bg4/20 overflow-hidden'>
            <div
              data-aos='flip-down'
              className='w-1/2 bg-blue-200/20 h-80 p-10'
            >
              <h3 className='before:size-2 before:bg-secondary/40 flex items-center gap-4 '>
                Description
              </h3>
              {/* <p>Single page e-commerce application </p> */}
              <h3 className='before:size-2 before:bg-secondary/40 flex items-center gap-4 '>
                Technologies
              </h3>
            </div>
            <div
              data-aos='flip-right'
              className='w-1/2 bg-yellow-200/20 h-80 overflow-hidden '
            >
              <img
                src='e-commerce.png'
                alt='project demo'
                className='size-full object-cover hover:scale-110 duration-300'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
