import { useEffect } from "react";
import ServicesCards from "./_components/services-cards";
import ServicesCollaborating from "./_components/services-collaborating";
import AboutHeroSection from "./_components/services-hero-section";
import ServicesOurServices from "./_components/services-our-services";
import { AppDispatch } from "@/src/redux/store";
import { useDispatch } from "react-redux";
import { fetchServices } from "src/redux/features/services-slice";



export default function Services(){


  const dispatch = useDispatch<AppDispatch>();
  

  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);



  return(
    <>


      <div className="relative flex flex-col  bg-top bg-cover bg-no-repeat transition-all duration-1000 ease-in-out"
      
        style={{
          backgroundImage: 'url("director-of-production.jpg")',
        }}
    
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>

        
        <AboutHeroSection/>


      </div>






      <div className="max-w-[1200px] lg:mx-auto flex flex-col  bg-[#232639]  px-[1.25em] transition-all duration-1000 ease-in-out">

        <ServicesOurServices/>
        <ServicesCards/>
        <ServicesCollaborating/>

      </div>
    
    </>)
}