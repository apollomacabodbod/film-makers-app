
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutHeroSection(){

  return(<>

    <div className="z-20 lex flex-col mt-[13.0625em] mb-[6.875em]">

      <motion.div className="flex items-center justify-center gap-[0.625em] transiton-all duration-1000 ease-in-out"
            
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

        <p className="text-[#FF5E3A] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase">Our Services</p>


      </motion.div>


      <motion.p className="text-white font-roboto-condensed text-[6rem] text-center font-bold not-italic leading-[1em] transiton-all duration-1000 ease-in-out"
      
      
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
      
      >Our Services</motion.p>
   


      <motion.div className="flex items-baseline justify-center gap-[1.25em] transiton-all duration-1000 ease-in-out"
      
       
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

        <img src="/about-home.svg" alt="" width={20} height={11}/>

        <Link to={"/"} className="font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase text-white">Home</Link>

        <img src="/about-arrow.svg" alt="" width={7} height={11}/>

        <p className="font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase text-white">Our Services</p>

      </motion.div>
   
   
    </div>
    
    
  </>)
}