import { ReactNode } from "react";

const Heading = ({ children }: { children: ReactNode }) => (
  <h1 className='duration-300 text-3xl font-semibold tracking-wider my-10 mx-auto hover:pl-5 py-3 cursor-default '>
    {children}
  </h1>
);
export default Heading;
