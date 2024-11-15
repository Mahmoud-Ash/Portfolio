import { FaBoxesStacked } from "react-icons/fa6";
// import { PiSuitcaseSimple } from "react-icons/pi";
import {
  RiCodeSSlashLine,
  RiContactsLine,
  RiHomeLine,
  RiUser4Line,
} from "react-icons/ri";

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
  return (
    <nav className=' fixed fade-in-down z-10 top-10 right-1/2 translate-x-1/2 mx-auto w-fit  rounded-full shadow-2xl py-4 px-8 duration-300 bg-bg4/10 backdrop-blur-lg'>
      <ul className='flex items-center gap-10'>
        {list.map(item => (
          <li key={item.title}>
            <a
              href={"#" + item.title}
              className='group flex items-center justify-center gap-2 relative cursor-pointer p-2 rounded-full ring-secondary hover:ring-2 duration-300'
            >
              <i className=' duration-300 text-primary/80  group-hover:text-secondary group-hover:scale-110'>
                {item.icon}
              </i>
              <span className='absolute -bottom-14 bg-bg4/40 px-3 py-1 rounded-full backdrop-blur-2xl opacity-0 group-hover:opacity-100 duration-300 pointer-events-none uppercase '>
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
