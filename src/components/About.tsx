import H1 from "./H1";

const About = () => {
  return (
    <section data-aos='flip-down' id='about' className='mb-10'>
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
