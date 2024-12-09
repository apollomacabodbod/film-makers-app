import AboutHeroSection from "../about/_components/about-hero-section"
import BlogCards from "./_components/blog"
import LatestBlogCards from "./_components/blog-latest-blog"




export default function Blog(){


  return (<>


    <div className="relative flex flex-col  bg-top bg-cover bg-no-repeat transition-all duration-1000 ease-in-out"
      
      style={{
        backgroundImage: 'url("director-of-production.jpg")',
      }}
  
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      
      <AboutHeroSection/>


    </div>

    <div className="flex flex-col bg-[#232639] transition-all duration-1000 ease-in-out xl:px-[5.5em] lg:px-[2.75em] px-[1.25em] border border-[#50B498] green">

      <BlogCards/>
      <LatestBlogCards/>

    </div>

    
    
  </>)
}