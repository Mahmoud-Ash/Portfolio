import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <button
        type='button'
        onClick={() => scroll(0, 0)}
        className='fixed bottom-20 right-4 sm:right-10 aspect-square bg-bg4/20 p-4 rounded-lg hover:bg-bg4/40 cursor-pointer duration-300 '
      >
        <BsArrowUp className='animate-bounce' />
      </button>
    )
  );
};

export default ScrollToTopButton;
