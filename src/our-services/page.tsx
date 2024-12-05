import HomeHeroSection from "../home/_components/home-hero-section";
import ServicesCards from "./_components/services-cards";
import ServicesCollaborating from "./_components/services-collaborating";
import ServicesOurServices from "./_components/services-our-services";



export default function Services(){


  return(
    <>





      <div className="flex flex-col  bg-[#232639] xl:px-[5.5em] lg:px-[2.75em] px-[1.25em] transition-all duration-1000 ease-in-out">

        <ServicesOurServices/>
        <ServicesCards/>
        <ServicesCollaborating/>

      </div>
    
    </>)
}