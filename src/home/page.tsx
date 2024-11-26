import HomeHeader from "./_components/home-header";
import HomeHeroSection from "./_components/home-hero-section";
import HomeSmoothScroll from "./_components/home-smooth-scroll";

export default function Home() {
  return (
  
    <>

     
      <HomeSmoothScroll/>


      <div className="relative flex flex-col border border-[#50B498] green bg-[rgba(26,27,42,0.40)] lg:px-[10.6875em]  px-[1.25em] transition-all duration-1000 ease-in-out">

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-10"></div>

          
        <HomeHeader/>
        <HomeHeroSection/>


      </div>


    
    
    </>)
}
  