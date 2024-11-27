
import { motion } from "framer-motion";

export default function HomeHeroSection(){



  return (<>


    <div className="flex flex-col  z-30 my-[9em] xl:px-[5.5em] lg:px-[4.2em] px-[1.25em]">


      <motion.p className="font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase text-[#FF5E3A]  transition-all duration-1000 ease-in-out "
      
      
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
      
      
      >One scene at a time - the movie maker director.</motion.p>

      <motion.p className="font-roboto-condensed text-[4rem] lg:text-[6rem] not-italic font-bold leading-[1em] lg:max-w-[8em] text-white  transition-all duration-1000 ease-in-out"
      
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
   
        
      
      >Behind Every Great Film is a Visionary.</motion.p>


      <motion.p className="font-source-sans-pro text-white text-[1.25rem] not-italic font-normal  lg:max-w-[29em] mt-[1.875em] transition-all duration-1000 ease-in-out"
      
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0 }}
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
      
      >Crafting unforgettable stories bringing their creative vision to life on the big screen - the movie maker director</motion.p>

    
      <div className="flex items-center mt-[1.875em]">


        <div className="flex flex-col">

          <motion.button className="py-[1.0625em] px-[1.5625em] bg-[#FF5E3A] text-white rounded-[0.1875em] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase"
          
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 1, ease: "easeInOut" }, // Applying duration and easing
              },
            }}
          
          
          >Get started</motion.button>

        </div>



        <div className="flex flex-col py-[1.0625em] px-[1.5625em] cursor-pointer ">


          <motion.div className="flex  items-center justify-between gap-[0.625em] "
          
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 1, ease: "easeInOut" }, // Applying duration and easing
              },
            }}
          
          
          >

            <p className="font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase text-white">view our works</p>

            <img src="home-hero-section-play.svg" alt="" width={13} height={0} className="min-w-[0.8125em] mt-[-0.2em]  "/>

          </motion.div>



        </div>




      </div>


       
    </div>
    
    
  </>)
}