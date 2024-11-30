import HomeAboutUs from "./_components/home-about-us";
import HomeDirectors from "./_components/home-directors";
import HomeHeroSection from "./_components/home-hero-section";
import HomeOurCinema from "./_components/home-our-cinema";
import HomePartners from "./_components/home-partners";
import HomeServices from "./_components/home-services";
import HomeServicesCards from "./_components/home-services-cards";
import HomeSmoothScroll from "./_components/home-smooth-scroll";
import HomeWorks from "./_components/home-works";
import HomeWorksCards from "./_components/home-works.cards";

export default function Home() {
  return (
  
    <>

     
      <HomeSmoothScroll/>


      <div className="relative flex flex-col  bg-center bg-cover bg-no-repeat  transition-all duration-1000 ease-in-out"
      
        style={{
          backgroundImage: 'url("cameraman-shooting.jpg")',
        }}
      
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>

          
        
        <HomeHeroSection/>


      </div>


      <div className="flex flex-col border border-[#50B498] green bg-[#232639] xl:px-[5.5em] lg:px-[2.75em] px-[1.25em] transition-all duration-1000 ease-in-out">

        <HomeAboutUs/>
        <HomePartners/>
        <HomeDirectors/>
        <HomeOurCinema/>
        <HomeWorks/>
        <HomeWorksCards/>
        <HomeServices/>
        <HomeServicesCards/>

      </div>


    
    
    </>)
}
  