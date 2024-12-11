
import { motion } from 'framer-motion'

export default function BlogCollaborating() {


  return (
    <>
      <motion.div className="relative flex flex-col  bg-cover bg-center  rounded-[0.3125em] my-[5.875em] py-[5em] px-[1em] transtion-all duration-1000 ease-in-out"
      
      
        style={{
          backgroundImage: "url('/professional-camera3.jpg')"
        }}

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
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,27,43,0.8)] to-[rgba(26,27,43,0)]"></div>

        {/* Content */}
        <motion.div className="z-10 relative flex items-center gap-[0.625em] transition-all duration-1000 ease-in-out"
        
        
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
          <img
            src="/home-collaborating-image.svg"
            alt="Collaborating"
            width={40}
            height={0}
            className='min-w-[2.5em] '
          />
          <p className="text-white font-roboto-condensed text-[0.875em] font-bold uppercase">
            collaborating
          </p>

          
        </motion.div>

        <motion.p className="mt-[0.1em] text-white z-10 font-roboto-condensed text-[3.2rem] lg:text-[4rem] xl:text-[4.5rem] not-italic font-bold leading-[1em] lg:max-w-[10em]  transition-all duration-1000 ease-in-out"
        
        
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
            
        
        
        >We Love Collaborating With Other Creatives</motion.p>


        <motion.div className="z-10 flex items-center mt-[1.875em] transiton-all duration-1000 ease-in-out"
                
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
    
    
          <button className="py-[1.0625em] px-[1.5625em] bg-[#FF5E3A] text-white rounded-[0.1875em] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase">let’s collaborations</button>
    
    
        </motion.div>


        {/* Ornament */}
        <div
          className="absolute bg-center bg-no-repeat bg-cover w-[6.25em] h-[6.25em] top-[23.4em] sm0-0:top-[20.2em] sm1:top-[20em] sm1-1:top-[17em]  md1-1:top-[13.8em]  lg:top-[18.5em] right-[-0.0%] xl:top-[19.6em] xl:right-[-0.0%]"
          style={{
            backgroundImage: "url('/home-testimontials-ornament.svg')",
          }}
        ></div>


      </motion.div>
    </>
  );
}
