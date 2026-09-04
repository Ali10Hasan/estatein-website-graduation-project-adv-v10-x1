import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-14 z-50 w-50 h-50 md:w-50 md:h-50 lg:w-58 lg:h-58 rounded-full bg-purple-60 text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp size={16}/>
                </button>
            )}
        </>
    );
};

export default ScrollToTop;