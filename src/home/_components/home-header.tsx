import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./home-sidebar-menu";




export default function HomeHeader(){

  const [sidebarOpen, setSidebarOpen] = useState(false);


  return (
    
    <>

      <div className="flex flex-col border border-[#50B498] green py-[0.8em]">


        <div className="flex items-center justify-between ">




          <div className="flex flex-col border border-[#50B498] green">

            <div className="flex items-center">

              <img src="/home-header-logo.svg" alt="" width={170} height={0} className="min-w-[10.625em] cursor-pointer"/>

            </div>


          </div>




          <div className="lg:flex lg:flex-col hidden border border-[#50B498] green">


            <div className="flex items-center gap-[1.5em] ">

              <Link to={"#"} className="font-roboto-condensed text-[0.875rem] not-italic font-bold text-white uppercase">Home </Link>
              <Link to={"#"} className="font-roboto-condensed text-[0.875rem] not-italic font-bold text-white uppercase">About </Link>
              <Link to={"#"} className="font-roboto-condensed text-[0.875rem] not-italic font-bold text-white uppercase">Services </Link>
              <Link to={"#"} className="font-roboto-condensed text-[0.875rem] not-italic font-bold text-white uppercase">Works </Link>
              <Link to={"#"} className="font-roboto-condensed text-[0.875rem] not-italic font-bold text-white uppercase">Blog </Link>
              <Link to={"#"} className="font-roboto-condensed text-[0.875rem] not-italic font-bold text-white uppercase">Testimontials </Link>

            </div>


          </div>


          <div className="flex flex-col lg:hidden border border-[#50B498] green"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >


            <div className="flex items-center">

              <img src="/humberger.svg" alt="home-header-humberger" width={23} height={0} className="cursor-pointer" />

            </div>

          
          </div>


        </div>




        


      


      </div>



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