import { ReactNode } from "react";

const H1 = ({ children }: { children: ReactNode }) => (
  <h1 className='duration-300 max-w-fit text-3xl font-semibold tracking-wider my-10 px-5 outline outline-secondary py-3 rounded-2xl  shadow-xl cursor-default hover:mx-5 '>
    {children}
  </h1>
);
// eslint-disable-next-line react-refresh/only-export-components
export default H1;
