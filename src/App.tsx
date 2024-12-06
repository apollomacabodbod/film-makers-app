import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./home/page";
import About from "./about/page";
import Contact from "./contact/page";
import HomeHeader from "./home/_components/home-header";
import HomeFooter from "./home/_components/home-footer";
import Services from "./our-services/page";
import Works from "./works/page";
import HomeSmoothScroll from "./home/_components/home-smooth-scroll";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component doesn't render anything
}

function App() {
  const location = useLocation(); // Now safe to use because it's inside a Router

  return (
    <>
      <HomeSmoothScroll/>
      <ScrollToTop /> {/* Handles scroll-to-top on location change */}
      <HomeHeader />
      
      <Routes > {/* Unique key for re-mounting */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works />} />
      </Routes>
      <div key={location.pathname} className="flex flex-col bg-[#11121E] xl:px-[5.5em] lg:px-[2.75em] px-[1.25em]">
        <HomeFooter />
      </div>
    </>
  );
}

export default App;
