import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className='max-w-[1200px] mx-auto px-4 sm:px-10 rounded-xl overflow-x-hidden'>
        {children}
      </main>
      {/* SCROLL TO TOP BUTTON  */}
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

export default Layout;
