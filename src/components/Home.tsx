import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { VscGithubAlt } from "react-icons/vsc";

const socials = [
  {
    title: "facebook",
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/MahmoudAshraf101/",
  },
  {
    title: "instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/mahmoud_ash97/",
  },
  {
    title: "github",
    icon: <VscGithubAlt />,
    url: "https://github.com/Mahmoud-Ash",
  },
  {
    title: "linkedin",
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/in/mahmoud-ashraf97/",
  },
];

const Home = () => {
  return (
    <section
      id='home'
      className='flex flex-row-reverse items-center justify-between w-full min-h-screen pt-40 gap-10 '
    >
      <div data-aos='fade-right' className='flex flex-col items-center gap-4 '>
        <div className='w-[300px] h-[400px] rounded-full overflow-hidden shadow-xl'>
          <img
            src='image.JPG'
            alt='profile picture'
            className='size-full object-cover duration-300 hover:scale-105 shadow-2xl'
          />
        </div>
        <div className='flex gap-4'>
          {socials.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target='_blank'
              title={item.title}
              className='h-10 aspect-square text-xl duration-500 ring- ring-primary/80 hover:ring-0 text-primary/80 hover:text-primary rounded-full border-animated'
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
          Front-End Developer
        </span>
        <span className='text-lg'>based in Egypt.</span>
        <a className='mt-10 px-10 py-4 text-base font-semibold border-animated bg-secondary hover:bg-primary text-primary hover:text-secondary rounded-lg cursor-pointer'>
          See My Projects
        </a>
      </div>
    </section>
  );
};

export default Home;
