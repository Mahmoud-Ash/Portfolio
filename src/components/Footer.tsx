import { useMemo } from "react";
import { socials } from "../lib/constants";

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className='flex flex-col items-center gap-5 justify-center py-20 text-xs text-primary/50'>
      <div className='flex gap-8 justify-center pt-10 '>
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
      &copy; {currentYear} AshZ. All rights reserved.
    </footer>
  );
};

export default Footer;
