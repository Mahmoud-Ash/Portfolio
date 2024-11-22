import { FaBoxesStacked } from "react-icons/fa6";
// import { PiSuitcaseSimple } from "react-icons/pi";
import {
  RiCodeSSlashLine,
  RiContactsLine,
  RiHomeLine,
  RiUser4Line,
} from "react-icons/ri";
import { useActiveSection } from "../context/ActiveSection.tsx/ActiveSectionContext";
import { twMerge } from "tailwind-merge";

const list = [
  { title: "home", icon: <RiHomeLine size={20} /> },
  { title: "about", icon: <RiUser4Line size={20} /> },
  { title: "skills", icon: <FaBoxesStacked size={20} /> },
  // {
  //   title: "services",
  //   icon: <PiSuitcaseSimple size={20} />,
  // },
  { title: "projects", icon: <RiCodeSSlashLine size={20} /> },
  { title: "contact", icon: <RiContactsLine size={20} /> },
];

const Header = () => {
  const { activeSection } = useActiveSection();

  return (
    <nav className='fixed w-full sm:w-fit sm:right-1/2 sm:translate-x-1/2 fade-in-down z-10 bottom-0 sm:bottom-auto sm:top-10 bg-bg4/20 backdrop-blur-lg  sm:rounded-full shadow-2xl'>
      <ul className='flex sm:w-fit sm:mx-auto sm:rounded-full items-center justify-between sm:justify-normal sm:gap-10 relative py-4 px-8 duration-300'>
        {list.map((item, index) => (
          <li key={item.title}>
            <a
              href={"#" + item.title}
              className={twMerge(
                "group size-full flex items-center justify-center relative cursor-pointer p-2 rounded-full "
              )}
            >
              <i
                className={twMerge(
                  "duration-500",
                  activeSection === index
                    ? "text-secondary scale-[1.3]"
                    : "text-primary/80  group-hover:text-secondary group-hover:scale-110"
                )}
              >
                {item.icon}
              </i>
              <span className='hidden sm:block absolute -bottom-14 bg-bg4/40 px-3 py-1 rounded-full backdrop-blur-2xl opacity-0 group-hover:opacity-100 duration-300 pointer-events-none outline-none uppercase '>
                {item.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
