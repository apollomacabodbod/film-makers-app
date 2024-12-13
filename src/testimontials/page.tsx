import TestimontialCards from "./_components/testimontials-cards";
import TestimontialsDetail from "./_components/testimontials-detail";
import TestimontialsHeroSection from "./_components/testimontials-hero-section";




export default function Testimontials(){


  return(<>


    <div className="relative flex flex-col  bg-top bg-cover bg-no-repeat transition-all duration-1000 ease-in-out"
          
      style={{
        backgroundImage: 'url("professional-camera3.jpg")',
      }}
      
    >
    
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
    
          
      <TestimontialsHeroSection/>
    
    </div>




    <div className="flex flex-col  bg-no-repeat h-auto bg-[#232639] "
    
      style={{
        backgroundImage: "url('/home-testimontials-vector1.svg')"
      }}
    
    
    >
    
      <div className=" lg:relative   flex flex-col bg-no-repeat h-auto  px-[1.25em] transition-all duration-1000 ease-in-out py-[6.25em] "
    
        style={{
          backgroundImage: "url('/home-testimontials-vector2.svg')"
        }}
    
      >
    
        <div className="max-w-[1200px] lg:mx-auto lg:px-[1.25em] ">
    
    
          {/* components */}
          <TestimontialsDetail/>
          <TestimontialCards/>
    
        </div>
    
    
        <div
          className=" relative lg:z-10 lg:absolute lg:top-[6.1em] lg:right-[3.8%] xl:top-[5.5em] xl:right-[7%] bg-top bg-no-repeat bg-cover w-full lg:w-[20em] h-[26em] lg:h-[35.8em] mt-[2em] lg:mt-[0em] rounded-[0.3125em]"
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