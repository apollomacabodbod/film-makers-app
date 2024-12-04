

import { motion } from 'framer-motion'
import HomeBlogCards from './home-blog-cards'

export default function HomeBlog(){



  return (<>


    <div className="flex flex-col  ">


      <div className='lg:flex lg:items-center'>


        <div className='flex flex-col lg:max-w-[230px] xl:max-w-[286px]  lg:mr-[3.125em]'>


          <motion.div className="flex items-center  gap-[0.625em] transiton-all duration-1000 ease-in-out"
            
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
                      
          >
            
            <img src="/home-about-us-line.svg" alt="" width={40} height={0} className="min-w-[2.5em]"/>
            
            <p className="text-[#FF5E3A] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase ">Blog</p>
            
            
          </motion.div>
    
    
    
          <motion.p className='font-roboto-condensed text-[4.2rem] xl:text-[4.5rem] not-italic font-bold leading-[1em] text-white transition-all duration-1000 ease-in-out'
          
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
          
          
          >Our Latest Blog</motion.p>
    
    
          <motion.p className='text-[#82869A] font-inter text-[0.9rem] xl:text-[1rem] not-italic font-normal mt-[1.875em] transition-all duration-1000 ease-in-out'
          
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
          
          
          
          >Proin et magna blandit arcu pellentes scelerisque sit amet a sapien. Aenean purus nunc cursus in ante</motion.p>
       
       
          <motion.div className="flex items-center mt-[1.875em] transiton-all duration-1000 ease-in-out"
                
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
              
              
          >
    
    
            <button className="py-[1.0625em] px-[1.5625em] bg-[#FF5E3A] text-white rounded-[0.1875em] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase">View All</button>
    
    
          </motion.div>
       


        </div>


        <HomeBlogCards/>




      </div>



   
    </div>
    
    
  </>)
}