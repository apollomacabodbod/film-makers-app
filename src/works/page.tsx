import WorksCards from "./_components/works-cards";
import WorksHeroSection from "./_components/works-hero-section";
import WorksOurWorks from "./_components/works-our-works";




export default function Works(){


  return (<>


    <div className="relative flex flex-col  bg-top bg-cover bg-no-repeat transition-all duration-1000 ease-in-out"
      
      style={{
        backgroundImage: 'url("professional-camera3.jpg")',
      }}
  
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      
      <WorksHeroSection/>


    </div>





    <div className="max-w-[1200px] lg:mx-auto flex flex-col  bg-[#232639]  px-[1.25em] transition-all duration-1000 ease-in-out">

      <WorksOurWorks/>
      <WorksCards/>

    </div>


    
    
  </>)
}