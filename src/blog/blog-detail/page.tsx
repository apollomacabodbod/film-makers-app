import BlogCollaborating from "./_components/blog-collaborating";
import BlogDetail from "./_components/blog-detail";
import BlogDetailHeroSection from "./_components/blog-hero-section";



export default function BlogDetails(){

  return (<>



    <div className="relative flex flex-col bg-top bg-cover bg-no-repeat  transition-all duration-1000 ease-in-out"
      
      style={{
        backgroundImage: 'url("/blog-cover.jpg")',
      }}
  
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      
      <BlogDetailHeroSection/>

    </div>


    <div className="max-w-[1200px] lg:mx-auto flex flex-col  bg-[#232639]  px-[1.25em] transition-all duration-1000 ease-in-out">

      <BlogDetail/>
      <BlogCollaborating/>

    </div>

    
    
  </>)
}