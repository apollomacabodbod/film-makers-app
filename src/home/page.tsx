import HomeAboutUs from "./_components/home-about-us";
import HomeHeader from "./_components/home-header";
import HomeHeroSection from "./_components/home-hero-section";
import HomeSmoothScroll from "./_components/home-smooth-scroll";

export default function Home() {
  return (
  
    <>

     
      <HomeSmoothScroll/>


      <div className="relative flex flex-col border border-[#50B498] green bg-center bg-cover bg-no-repeat xl:px-[10.6875em] lg:px-[4.2em] px-[1.25em] transition-all duration-1000 ease-in-out"
      
        style={{
          backgroundImage: 'url("cameraman-shooting.jpg")',
        }}
    
      
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#1A1B2A66] opacity-90"></div>

          
        <HomeHeader/>
        <HomeHeroSection/>


      </div>


      <div className="flex flex-col border border-[#50B498] green bg-[#232639] xl:px-[5.5em] lg:px-[4.2em] px-[1.25em] transition-all duration-1000 ease-in-out">

        <HomeAboutUs/>

      </div>


    
    
    </>)
}
  