
import { motion } from 'framer-motion'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "@/src/redux/store";
import { fetchPosts } from "src/redux/features/single-blog-slice";



export default function BlogDetailHeroSection(){


  const { id } = useParams();
  const blogId = Number(id); // Convert to a number for comparison

  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error } = useSelector((state: RootState) => state.blog);

  useEffect(() => {
    dispatch(fetchPosts(blogId));
  },[dispatch, blogId]);

  // Find the specific post by ID
  const post = posts.find((p) => p.id === blogId);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-white">Error: {error}</p>;

  return(<>

    <div className="max-w-[1200px] lg:mx-auto  px-[1.25em] z-20 lex flex-col mt-[20em] mb-[6.875em]  transition-all duration-1000 ease-in-out">

      <motion.p className="text-white font-roboto-condensed text-[6rem] not-italic font-bold leading-[1em] transition-all duration-1000 ease-in-out"
      
      
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
          },
        }}
      
      
      >{post?.title}</motion.p>

      <div className="flex items-baseline gap-[2.5625em] mt-[1.875em] mb-[3.125em]">


        <div className="flex flex-col">

          <div className="flex items-baseline gap-[0.625em]">

            <motion.img src="/blog-detail-calendar.svg" alt="" width={13} height={16} className='transition-all duration-1000 ease-in-out'
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
                },
              }}
            
            
            />

            <motion.p className="text-white transition-all duration-1000 ease-in-out"
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
                },
              }}
            
            >March 27, 2023</motion.p>


          </div>

      

        </div>



        <div className="flex flex-col">

          <div className="flex items-baseline gap-[0.625em]">

            <motion.img src="/blog-detail-calendar.svg" alt="" width={13} height={16} className='transition-all duration-1000 ease-in-out'
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
                },
              }}
            
            
            
            />

            <motion.p className="text-white transition-all duration-1000 ease-in-out"
            
            
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
                },
              }}
            
            
            >March 27, 2023</motion.p>


          </div>



        </div>




      </div>


    </div>
    
    
  </>)
}