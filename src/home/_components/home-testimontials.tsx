

import { motion } from 'framer-motion'

export default function HomeTestimontials(){

  return (<>


    <div className="flex flex-col xl:px-[5.5em] lg:px-[2.75em] px-[1.25em] transition-all duration-1000 ease-in-out mt-[6.25em] w-[43.75em]">

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
    
        <p className="text-[#FF5E3A] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase">testimonials</p>
    
    
      </motion.div>


      <p className='text-white font-roboto-condensed text-[4.5rem] not-italic font-bold whitespace-nowrap leading-[1em]'>What People Says?</p>

      <p className='text-[#82869A] font-roboto-condensed text-[1.5rem] font-bold not-italic '>What they say about us?</p>
      <p className='text-[#82869A] font-inter text-[1rem] not-italic font-normal '>Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis dui. Integer consequat consectetur est id</p>
    </div>
    
    
  </>)
}