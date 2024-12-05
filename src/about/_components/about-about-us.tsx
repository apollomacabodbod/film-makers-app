
import { motion } from "framer-motion";


export default function AboutAboutUs(){

  return(<>

    <div className="flex flex-col  my-[9em]  transiton-all duration-1000 ease-in-out">

        
      <div className="lg:flex lg:items-center lg:justify-between gap-[3.125em] w-full ">


        <div className="flex flex-col lg:max-w-[25em] l-middle:max-w-[30em] xl:max-w-[34.375em] lg:mt-[-3.2em] l-middle:mt-[-5em] xl:mt-[-6.5em]  transiton-all duration-1000 ease-in-out">

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

            <p className="text-[#FF5E3A] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase">About Us</p>


          </motion.div>


          <motion.p className="font-roboto-condensed text-[4rem] xs10:text-[4.1rem] xl:text-[4.5rem] leading-[1em] font-bold text-white transiton-all duration-1000 ease-in-out" 
          
          
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
          
          >We Are a Team of Passionate Filmmakers</motion.p>
          <motion.p className="text-[#82869A] text-[1.5rem] font-bold font-roboto-condensed leading-[1.2em] mt-[1.875em] transiton-all duration-1000 ease-in-out"
          
          
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
          
          >Dedicated to bringing creative and compelling stories to life on screen</motion.p>
          <motion.p className="text-[#82869A] font-roboto-condensed text-[1rem] font-normal mt-[1.875em] transiton-all duration-1000 ease-in-out"
          
          
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
          
          
          >Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis dui. Integer consequat consectetur est id blandit. Proin et magna blandit arcu pellentesque scelerisque sit amet.</motion.p>
          <motion.p className="text-[#82869A] font-roboto-condensed text-[1rem] font-normal mt-[1em] transiton-all duration-1000 ease-in-out"
          
          
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
          
          
          >Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis dui. Integer consequat consectetur est id blandit. Proin et magna blandit arcu pellentesque scelerisque sit amet.</motion.p>
          <motion.p className="text-[#82869A] font-roboto-condensed text-[1rem] font-normal mt-[1em] transiton-all duration-1000 ease-in-out"
          
          
          
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
          
          
          >Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis dui.</motion.p>

   


        </div>




        <div
          className="relative  lg:h-[43.75em] w-full h-[17em] md:h-[33.5em]  rounded-[0.3125em] mt-[2em] lg:mt-[0em] "
        >
          <motion.div
            className="absolute inset-0 bg-center bg-cover transition-all duration-1000 ease-in-out rounded-[0.3125em]"
            style={{
              backgroundImage: 'url("videographer-man.jpg")',
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


          ></motion.div>
          <motion.div
            className="absolute bg-cover bg-no-repeat bg-center w-[100px] h-[100px] top-[10em] md:top-[26.5em] right-[-0.0%] lg:top-[36.9em] lg:right-[-0.0%] transition-all duration-1000 ease-in-out"
            style={{
              backgroundImage: 'url("home-about-us-ornament.svg")',
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



          </motion.div>
        </div>




      </div>
        
        
  
   
    </div>
    
  </>)
}