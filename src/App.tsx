import { BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Home from "./home/page";
import About from "./about/page";
import Contact from "./contact/page";
import HomeHeader from "./home/_components/home-header";

function App() {


  return (

    <>
    
     

    
      <Router>
     
    
        <HomeHeader/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>



      </Router>




    </>



  );
}

export default App;
