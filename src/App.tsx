import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./home/page";
import About from "./about/page";
import Contact from "./contact/page";
import HomeHeader from "./components/home-header";
import HomeFooter from "./home/_components/home-footer";
import Services from "./our-services/page";
import Works from "./works/page";
import { LenisProvider } from "./context/lenis";
import ScrollToTop from "./components/scroll-top";
import Blog from "./blog/page";
import BlogDetails from "./blog/blog-detail/page";
import Testimontials from "./testimontials/page";
import NotFound from "./components/not-found";

function App() {
  
  const location = useLocation(); // Now safe to use because it's inside a Router



  return (
    <>
      <LenisProvider>
     
        <HomeHeader />

        <ScrollToTop/>
      
        <Routes > {/* Unique key for re-mounting */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/works" element={<Works />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} /> {/* Dynamic route with ID */}
          <Route path="/testimontials" element={<Testimontials />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div key={location.pathname} className=" flex flex-col bg-[#11121E] ">
          <HomeFooter />
        </div>
          
       
      </LenisProvider>
    </>
  );
}

export default App;
