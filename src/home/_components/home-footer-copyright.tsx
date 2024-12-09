

import { motion } from 'framer-motion'


export default function HomeFooterCopyright(){


  return (<>

    <div className="flex flex-col mt-[1.5em] lg:mt-[4.9375em] transition-all duration-1000 ease-in-out">


      <div className="lg:flex lg:items-center lg:justify-between  transition-all duration-1000 ease-in-out">


        <div className="flex flex-col mt-[1.5em] lg:mt-[0em]">

          <motion.p className="text-[#82869A] text-center lg:text-start transition-all duration-1000 ease-in-out"
          
          
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
          
          >© 2024 Filmina. All Rights Reserved.</motion.p>

        </div>


        <div className="flex flex-col mt-[1.5em] lg:mt-[0em]">


          <div className="flex items-center justify-center gap-[1.875em] lg:mt-[0em]">

            <motion.img src="/home-footer-facebook.svg" alt="" width={16} height={14} className='transition-all duration-1000 ease-in-out'
            
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
            <motion.img src="/home-footer-twitter.svg" alt="" width={25} height={14} className='transition-all duration-1000 ease-in-out'
            
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
            <motion.img src="/home-footer-instagram.svg" alt="" width={25} height={14} className='transition-all duration-1000 ease-in-out'
            
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
            <motion.img src="/home-footer-youtube.svg" alt="" width={25} height={14} className='transition-all duration-1000 ease-in-out'
            
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
            <motion.img src="/home-footer-linkedIn.svg" alt="" width={25} height={14} className='transition-all duration-1000 ease-in-out'
            
            
            
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
          </div>


        </div>


      </div>
        
    </div> 
    
    
  </>)
}