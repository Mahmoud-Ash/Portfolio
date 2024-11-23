import { useMemo } from "react";

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className='flex justify-center gap-1 py-20 text-xs text-primary/50'>
      &copy; {currentYear} AshZ. All rights reserved.
    </footer>
  );
};

export default Footer;
