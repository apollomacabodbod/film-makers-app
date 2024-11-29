import HomeAboutUs from "./_components/home-about-us";
import HomeDirectors from "./_components/home-directors";
import HomeHeroSection from "./_components/home-hero-section";
import HomeOurCinema from "./_components/home-our-cinema";
import HomePartners from "./_components/home-partners";
import HomeSmoothScroll from "./_components/home-smooth-scroll";

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


      <div className="flex flex-col border border-[#50B498] green bg-[#232639] xl:px-[5.5em] lg:px-[4.2em] px-[1.25em] transition-all duration-1000 ease-in-out">

        <HomeAboutUs/>
        <HomePartners/>
        <HomeDirectors/>
        <HomeOurCinema/>

      </div>


    
    
    </>)
}
  