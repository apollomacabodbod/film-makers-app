import { useEffect } from "react";
import BlogCards from "./_components/blog"
import BlogHeroSection from "./_components/blog-hero-section"
import LatestBlogCards from "./_components/blog-latest-blog"
import { AppDispatch } from "@/src/redux/store";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../redux/features/blog-slice";


export default function Blog(){


  const dispatch = useDispatch<AppDispatch>();
  

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);



  return (<>


    <div className="relative flex flex-col  bg-top bg-cover bg-no-repeat transition-all duration-1000 ease-in-out"
      
      style={{
        backgroundImage: 'url("movie-clapper.jpg")',
      }}
  
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      
      <BlogHeroSection/>

    </div>

    <div className="max-w-[1200px] lg:mx-auto flex flex-col bg-[#232639] transition-all duration-1000 ease-in-out  px-[1.25em] ">

      <BlogCards/>
      <LatestBlogCards/>

    </div>

    
    
  </>)
}