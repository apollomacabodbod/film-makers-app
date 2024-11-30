import HomeAboutUs from "./_components/home-about-us";
import HomeBlog from "./_components/home-blog";
import HomeBlogCards from "./_components/home-blog-cards";
import HomeDirectors from "./_components/home-directors";
import HomeHeroSection from "./_components/home-hero-section";
import HomeOurCinema from "./_components/home-our-cinema";
import HomePartners from "./_components/home-partners";
import HomeServices from "./_components/home-services";
import HomeServicesCards from "./_components/home-services-cards";
import HomeSmoothScroll from "./_components/home-smooth-scroll";
import HomeTestimontialCards from "./_components/home-testimontial-cards";
import HomeTestimontials from "./_components/home-testimontials";
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



      <div className="flex flex-col bg-no-repeat h-auto bg-[#232639] border border-[#50B498] green"

        style={{
          backgroundImage: "url('/home-testimontials-vector1.svg')"
        }}


      >

        <div className="lg:relative flex flex-col bg-no-repeat h-auto xl:px-[5.5em] lg:px-[2.75em] px-[1.25em] transition-all duration-1000 ease-in-out py-[6.25em] border border-[#50B498] green"

          style={{
            backgroundImage: "url('/home-testimontials-vector2.svg')"
          }}

        >

          {/* components */}
          <HomeTestimontials/>
          <HomeTestimontialCards/>


          <div
            className="relative lg:z-10 lg:absolute lg:top-[6.4em] lg:right-[3.8%] xl:top-[5.8em] xl:right-[7%] bg-center bg-no-repeat bg-cover w-full lg:w-[20em] h-[35em] lg:h-[35.8em] mt-[2em] lg:mt-[0em]"
            style={{
              backgroundImage: "url('/videographer-man1.jpg')",
            }}
          >
            {/* Ornament */}
            <div
              className="absolute bg-center bg-no-repeat bg-cover w-[6.25em] h-[6.25em] top-[28.7em] right-[-0.1%] lg:top-[29.6em] lg:right-[-0.1%]"
              style={{
                backgroundImage: "url('/home-testimontials-ornament.svg')",
              }}
            ></div>
          </div>




        </div>



      </div>



      <div className="flex flex-col border border-[#50B498] green bg-[#232639] xl:px-[5.5em] lg:px-[2.75em] px-[1.25em] transition-all duration-1000 ease-in-out">

        <HomeBlog/>
      
      </div>
    
    
    </>)
}
  