
import { motion } from 'framer-motion'


export default function BlogDetailHeroSection(){

  return(<>

    <div className="max-w-[1200px] lg:mx-auto  px-[1.25em] z-20 lex flex-col mt-[20em] mb-[6.875em]  transition-all duration-1000 ease-in-out">

      <motion.p className="text-white font-roboto-condensed text-[6rem] not-italic font-bold leading-[1em] transition-all duration-1000 ease-in-out"
      
      
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
      
      
      >John Wick Chapter 4 Packs A Fast And Furious Punch</motion.p>

      <div className="flex items-baseline gap-[2.5625em] mt-[1.875em] mb-[3.125em]">


        <div className="flex flex-col">

          <div className="flex items-baseline gap-[0.625em]">

            <motion.img src="/blog-detail-calendar.svg" alt="" width={13} height={16} className='transition-all duration-1000 ease-in-out'
            
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

            <motion.p className="text-white transition-all duration-1000 ease-in-out"
            
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
            
            >March 27, 2023</motion.p>


          </div>

      

        </div>



        <div className="flex flex-col">

          <div className="flex items-baseline gap-[0.625em]">

            <motion.img src="/blog-detail-calendar.svg" alt="" width={13} height={16} className='transition-all duration-1000 ease-in-out'
            
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

            <motion.p className="text-white transition-all duration-1000 ease-in-out"
            
            
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
            
            
            >March 27, 2023</motion.p>


          </div>



        </div>




      </div>


    </div>
    
    
  </>)
}