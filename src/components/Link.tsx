import { ReactNode } from "react";

const Link = ({
  href = "#",
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <a
      href={href}
      target='_blank'
      className='duration-300 px-3 py-2 font-semibold backdrop-blur-xl bg-secondary/60 group-hover:bg-primary/80 text-primary group-hover:text-secondary ring-secondary hover:ring-2 focus:ring-offset-2 rounded-full'
    >
      {children}
    </a>
  );
};

export default Link;
