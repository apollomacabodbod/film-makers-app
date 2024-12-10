import BlogDetail from "./_components/blog-detail";
import BlogDetailHeroSection from "./_components/blog-hero-section";



export default function BlogDetails(){

  return (<>



    <div className="relative flex flex-col bg-top bg-cover bg-no-repeat xl:px-[5.5em] lg:px-[2.75em] px-[1.25em] transition-all duration-1000 ease-in-out"
      
      style={{
        backgroundImage: 'url("/about-us.jpg")',
      }}
  
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      
      <BlogDetailHeroSection/>

    </div>


    <div className="flex flex-col  bg-[#232639] xl:px-[5.5em] lg:px-[2.75em] px-[1.25em] transition-all duration-1000 ease-in-out">

      <BlogDetail/>

    </div>

    
    
  </>)
}