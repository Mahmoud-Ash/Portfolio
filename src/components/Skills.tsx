import H1 from "./H1";

const techs = {
  title: "Tech stack",
  data: [
    { name: "HTML", url: "html.svg" },
    { name: "CSS", url: "css.svg" },
    { name: "Javascript", url: "javascript.svg" },
    { name: "Typescript", url: "ts.svg" },
    { name: "Sass", url: "sass.svg" },
    { name: "TailwindCSS", url: "twcss.svg" },
    { name: "React", url: "react.svg" },
    { name: "Redux Toolkit", url: "redux.svg" },
  ],
};
const tools = {
  title: "Tools",
  data: [
    { name: "VS Code", url: "vscode.svg" },
    { name: "Vite", url: "vite.svg" },
    { name: "Git", url: "git.svg" },
    { name: "Figma", url: "figma.svg" },
  ],
};
const skills = [techs, tools];

const Skills = () => {
  return (
    <section data-aos='flip-down' id='skills' className='mb-20'>
      <div className='flex flex-col'>
        <H1>
          My <span className='text-secondary'>Skills</span>
        </H1>
        {skills.map((skill, i) => (
          <div key={i}>
            <h2
              data-aos='fade-left'
              className='duration-300 ml-20 cursor-default text-xl flex w-fit items-center mb-20 gap-5 hover:gap-10 hover:bg-bg4/10 px-5 py-3 rounded-full shadow-lg
            before:size-2 before:bg-secondary before:rounded-full before:inline-block '
            >
              {skill.title}
            </h2>
            <ul className='flex flex-wrap mb-20 gap-y-20'>
              {skill.data.map((tech, i) => (
                <li
                  data-aos={i % 2 ? "flip-right" : "flip-left"}
                  key={tech.name}
                  className='group duration-300 flex grow flex-col items-center justify-center gap-5 w-1/4 min-w-44 rounded-full '
                >
                  <img
                    src={tech.url}
                    alt={tech.name}
                    className=' h-12 max-w-12 group-hover:-translate-y-2 duration-300'
                  />
                  <span>{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
