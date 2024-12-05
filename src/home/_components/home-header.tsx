import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./home-sidebar-menu";



export default function HomeHeader(){


  const [scrolling, setScrolling] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setScrolling(isScrolling);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    
    <>


      <header
        className={`fixed top-0 left-0 w-full  transition-all duration-1000 ease-in-out z-40 ${
          scrolling
            ? 'backdrop-blur-lg bg-black/40 shadow-lg'
            : 'bg-transparent backdrop-blur-none shadow-none'
        }`}
      >



        <div className="relative flex flex-col py-[1.2em] xl:px-[5.5em] lg:px-[2.75em] px-[1.25em]">


          <div className="flex items-center justify-between ">




            <div className="flex flex-col ">

              <div className="flex items-center">

                <img src="/home-header-logo.svg" alt="" width={170} height={0} className="min-w-[10.625em] cursor-pointer"/>

              </div>


            </div>




            <div className="lg:flex lg:flex-col hidden ">


              <div className="flex items-center gap-[1.5em] ">

                <Link to={"/"} className="font-roboto-condensed text-[0.875rem] not-italic font-bold text-white uppercase">Home </Link>
                <Link to={"/about"} className="font-roboto-condensed text-[0.875rem] not-italic font-bold text-white uppercase">About </Link>
                <Link to={"/services"} className="font-roboto-condensed text-[0.875rem] not-italic font-bold text-white uppercase">Services </Link>
                <Link to={"#"} className="font-roboto-condensed text-[0.875rem] not-italic font-bold text-white uppercase">Works </Link>
                <Link to={"#"} className="font-roboto-condensed text-[0.875rem] not-italic font-bold text-white uppercase">Blog </Link>
                <Link to={"#"} className="font-roboto-condensed text-[0.875rem] not-italic font-bold text-white uppercase">Testimontials </Link>

              </div>


            </div>


            <div className="flex flex-col lg:hidden "
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >


              <div className="flex items-center">

                <img src="/humberger.svg" alt="home-header-humberger" width={23} height={0} className="cursor-pointer" />

              </div>

          
            </div>


          </div>




        


      


        </div>

      </header>




      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setSidebarOpen(false)} // Close sidebar on overlay click
        />
      )}

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />


    
    
    
    </>)
}