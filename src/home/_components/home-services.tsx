

import { motion } from 'framer-motion'

export default function HomeServices(){


  return (<>

    <div className="flex flex-col border border-[#50B498] green mt-[6.25em]">

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

        <p className="text-[#FF5E3A] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase">services</p>


      </motion.div>
        


      <p className='text-white font-roboto-condensed text-[4.5rem] not-italic font-bold leading-[1em] text-center'>Our Services</p>
    
      <p className='text-[#82869A] font-inter text-[1rem] font-normal text-center mt-[1.25em] '>Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien aenean</p>
    
    </div>
    
    
  </>)
}