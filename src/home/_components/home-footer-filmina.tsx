import HomeFooterCards from "./home-footer-cards";
import HomeFooterCopyright from "./home-footer-copyright";

import { motion } from 'framer-motion'

export default function HomefooterFilmina(){


  return (<>


    <div className="flex flex-col border border-[#50B498] green mt-[6.5em]">


      <div className="lg:flex lg:items-center lg:gap-[2.2em] xl:gap-[3.125em] border border-[#50B498] green w-full ">



        <div className="flex flex-col gap-[1.875em] ">


          <motion.div className="flex items-center transition-all duration-1000 ease-in-out"
          
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

            <img src="/home-header-logo.svg" alt="" width={170} height={34}/>

          </motion.div>

          <motion.p className="text-[#82869A] transtion-all duration-1000 ease-in-out"
          
             
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
          
          >Proin et magna blandit arcu pellentes sceleri sit amet a sapien. Aenean purus nunc cursus in ante in, vehicula facilisis </motion.p>


        </div>



        <div className="flex flex-col border border-[#50B498] green h-[190px] mt-[1.5em] lg:mt-[0em]">

          <motion.p className="text-white font-roboto-condensed text-[1.25rem] not-italic font-bold transition-all duration-1000 ease-in-out"
          
          
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
          
          
          >Keep in touch</motion.p>

          <motion.p className="text-[#82869A]  mt-[0.625em] font-inter text-[1rem] not-italic font-normal min-w-[14.75em] transition-all duration-1000 ease-in-out"
          
          
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
          
          
          >768 Market Street San Francisco, CA 64015, United States</motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal whitespace-nowrap hidden transition-all duration-1000 ease-in-out"
          
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
          
          
          
          ></motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"
          
          
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
          
          
          >info@filmina.com</motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal whitespace-nowrap transition-all duration-1000 ease-in-out"
          
          
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
          
          
          >(+021) 345 678 910</motion.p>
           
        </div>


        <HomeFooterCards/>
        



      </div>


      <HomeFooterCopyright/>


       


    </div>
    
    
  </>)
}