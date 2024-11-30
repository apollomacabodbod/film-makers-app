

import { motion } from 'framer-motion'

export default function HomeTestimontials(){

  return (<>


    <div className="flex flex-col  lg:max-w-[35em] xl:max-w-[40.625em] border border-[#50B498] green">

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
    
        <p className="text-[#FF5E3A] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase ">testimonials</p>
    
    
      </motion.div>


      <p className='text-white font-roboto-condensed text-[2.5rem] sm3:text-[4rem] lg:text-[4.5rem] not-italic font-bold lg:whitespace-nowrap leading-[1em] mt-[0.2em] lg:mt-[0em]'>What People Says?</p>

      <p className='text-[#82869A] font-roboto-condensed text-[1.5rem] font-bold not-italic mt-[0.2em] lg:mt-[0em]'>What they say about us?</p>
      <p className='text-[#82869A] font-inter text-[1rem] not-italic font-normal mt-[0.2em] lg:mt-[0em]'>Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis dui. Integer consequat consectetur est id</p>
    </div>
    
    
  </>)
}