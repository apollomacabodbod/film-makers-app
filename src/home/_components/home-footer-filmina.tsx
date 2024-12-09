import HomeFooterCards from "./home-footer-cards";
import HomeFooterCopyright from "./home-footer-copyright";

import { motion } from 'framer-motion'

export default function HomefooterFilmina(){


  return (<>


    <div className="flex flex-col  mt-[6.5em] transition-all duration-1000 ease-in-out">


      <div className="lg:flex lg:items-center lg:gap-[2.2em] xl:gap-[3.125em]  w-full  transition-all duration-1000 ease-in-out">



        <div className="flex flex-col gap-[1.875em]  lg:mt-[-0em] lg-1:mt-[-1em] lg-2:mt-[-2.4em] lg-3:mt-[-3.9em]  xl:mt-[-4em]">


          <motion.div className="flex items-baseline transition-all duration-1000 ease-in-out"
          
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

          <motion.p className="text-[#82869A] text-[1rem] font-inter font-normal transtion-all duration-1000 ease-in-out"
          
             
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





        <HomeFooterCards/>
        



      </div>


      <HomeFooterCopyright/>


       


    </div>
    
    
  </>)
}