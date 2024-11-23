import { ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }) => (
  <h1 className='duration-300 w-fit text-3xl text-primary font-semibold tracking-wider my-10 mx-auto hover:pl-5 py-3 cursor-default capitalize'>
    {children}
  </h1>
);
export default Heading;
