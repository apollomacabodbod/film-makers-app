import HomefooterFilmina from "./home-footer-filmina";

import { motion } from 'framer-motion'


export default function HomeFooter(){


  return (<>

    <div className="z-10 flex flex-col mt-[3.375em] mb-[2em]">


      <div className="lg:flex lg:items-center">


        <div className="flex flex-col ">


          <div className="lg:flex lg:items-center "
          
        
          
          >

            <motion.p className="text-white font-roboto-condensed text-[2.25rem] not-italic font-bold mr-[1em] transition-all duration-1000 ease-in-out"
            
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
            
            >Subscribe</motion.p>
            <motion.p className="text-[#82869A] text-[0.9rem] xl:text-[1rem] font-inter not-italic font-normal lg:max-w-[31.25em] lg:mr-[1em] transition-all duration-1000 ease-in-out"
            
            
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
            
            >Proin magna blandit arcu pellent esque sceleri sque sit amet sapien purus nunc cursus antein vehicula facilisis Integer conse</motion.p>

          </div>


        </div>



        <div className="flex flex-col mt-[1em] lg:mt-[0em]">


          <div className="sm3:flex sm3:items-center">

 
            <motion.input type="text" className="mt-[1em] sm3:mt-[0em] py-[0.625em] px-[1.5em] rounded-[0.1875em] font-inter text-[1rem] not-italic font-normal focus:outline-none  w-full sm1:w-[18.75em]  sm1:mr-[0.625em] transtion-all duration-1000 ease-in-out"
            
            
              
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
     
     
     
        
            <motion.button className="mt-[2em]  sm3:mt-[0em] py-[0.9em] px-[1.5625em] bg-[#FF5E3A] text-white rounded-[0.1875em] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase transtion-all duration-1000 ease-in-out"
            
            
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
            
            
            >subscribe</motion.button>
     


          </div>


        </div>

       
       
       
       
      
        
     
     
      </div>


      <HomefooterFilmina/>



    </div>
    
    
  </>)
}