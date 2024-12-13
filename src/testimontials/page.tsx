import WorksHeroSection from "../works/_components/works-hero-section";




export default function Testimontials(){


  return(<>


    <div className="relative flex flex-col  bg-top bg-cover bg-no-repeat transition-all duration-1000 ease-in-out"
          
      style={{
        backgroundImage: 'url("professional-camera3.jpg")',
      }}
      
    >
    
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
    
          
      <WorksHeroSection/>
    
    
    </div>
    
    
  </>)
}