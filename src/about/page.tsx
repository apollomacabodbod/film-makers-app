import AboutAboutUs from "./_components/about-about-us";
import AboutCinema from "./_components/about-cinema";
import AboutDirectors from "./_components/about-directors";
import AboutSection from "./_components/about-section";
import AboutTestimontials from "./_components/about-testimontials";
import AboutTestimontialCards from "./_components/about-testimontials-cards";

export default function About() {
 
 
  return (<>


    <div className="relative flex flex-col  bg-top bg-cover bg-no-repeat transition-all duration-1000 ease-in-out"
      
      style={{
        backgroundImage: 'url("about-us.jpg")',
      }}
    
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

        
      <AboutSection/>


    </div>


   
    <div className="flex flex-col  bg-[#232639] xl:px-[5.5em] lg:px-[2.75em] px-[1.25em] transition-all duration-1000 ease-in-out">

      <AboutAboutUs/>
      <AboutCinema/>
      <AboutDirectors/>
    

    </div>



    <div className="flex flex-col bg-no-repeat h-auto bg-[#232639] "

      style={{
        backgroundImage: "url('/home-testimontials-vector1.svg')"
      }}


    >

      <div className="lg:relative flex flex-col bg-no-repeat h-auto xl:px-[5.5em] lg:px-[2.75em] px-[1.25em] transition-all duration-1000 ease-in-out py-[6.25em] "

        style={{
          backgroundImage: "url('/home-testimontials-vector2.svg')"
        }}

      >

        {/* components */}
        <AboutTestimontials/>
        <AboutTestimontialCards/>


        <div
          className="relative lg:z-10 lg:absolute lg:top-[6.1em] lg:right-[3.8%] xl:top-[5.5em] xl:right-[7%] bg-top bg-no-repeat bg-cover w-full lg:w-[20em] h-[26em] lg:h-[35.8em] mt-[2em] lg:mt-[0em] rounded-[0.3125em]"
          style={{
            backgroundImage: "url('/videographer-man1.jpg')",
          }}
        >
          {/* Ornament */}
          <div
            className="absolute bg-center bg-no-repeat bg-cover w-[6.25em] h-[6.25em] top-[19.8em] right-[-0.1%] lg:top-[29.6em] lg:right-[-0.1%]"
            style={{
              backgroundImage: "url('/home-testimontials-ornament.svg')",
            }}
          ></div>
        </div>




      </div>



    </div>


   
  </>)
}
