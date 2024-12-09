


import { motion } from "framer-motion";

export default function WorksOurWorks(){

  return (<>


    <div className="flex flex-col mt-[9em]  transition-all duration-1000 ease-in-out">



      <div className="lg:flex lg:items-center lg:justify-between">



        <div className="flex flex-col">



          <motion.div className="flex items-center gap-[0.625em] transiton-all duration-1000 ease-in-out"
            
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

            <p className="text-[#FF5E3A] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase">works</p>


          </motion.div>


          <motion.p className="font-roboto-condensed text-[3rem]  lg:text-[3.5rem] xl:text-[4.5rem] not-italic font-bold leading-[1em] text-white sm2:whitespace-nowrap transiton-all duration-1000 ease-in-out"
          
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
        
          
          
          >Check Out Our Latest Works</motion.p>
          <motion.p className="text-[#82869A] font-inter text-[1rem] font-normal mt-[1.25em] transiton-all duration-1000 ease-in-out"
          
          
          
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
        
          
          >Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien aenean</motion.p>
   


        </div>








            
      </div>

       



         
   
   
    </div>
    
    
  </>)
}