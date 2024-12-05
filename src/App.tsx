import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./home/page";
import About from "./about/page";
import Contact from "./contact/page";
import HomeHeader from "./home/_components/home-header";
import HomeFooter from "./home/_components/home-footer";
import Services from "./our-services/page";

function App() {


  return (

    <>
    
     

    
      <Router>
     
    
        <HomeHeader/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services/>} />
          
        </Routes>



        < div
          className="flex flex-col  bg-[#11121E] xl:px-[5.5em] lg:px-[2.75em] px-[1.25em]  "
        >


          <HomeFooter/>


        </div>



      </Router>




    </>



  );
}

export default App;
