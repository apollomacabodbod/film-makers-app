
import { motion } from "framer-motion";

export default function HomeOurCinema(){

  return (<>
    

    <div className="flex flex-col  mb-[6.25em] ">




      <div className="lg:flex lg:items-center lg:justify-between lg:gap-[3.125em]">




        <motion.div className="bg-center bg-no-repeat bg-cover w-full  md:h-[33.5em] h-[16em] transiton-all duration-1000 ease-in-out rounded-[0.3125em]"
          style={{
            backgroundImage: "url('/cameraman-big-cinema.jpg')"
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


          <motion.div className="relative bg-center bg-no-repeat bg-cover w-[6.25em] h-[6.25em] md:top-[27.3em] top-[9.6em] transiton-all duration-1000 ease-in-out"

            style={{
              backgroundImage: "url('/home-directors-image2.svg')"
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
            


        </motion.div>



        <div className="flex flex-col  lg:w-[32em] mt-[2em] lg:mt-[0em] ">


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

            <p className="text-[#FF5E3A] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase">Our Cinematography</p>


          </motion.div>


          <motion.p className="font-roboto-condensed  text-[3rem] lg:text-[3.4rem] xl:text-[4.4rem] not-italic font-bold leading-[1em] text-white transiton-all duration-1000 ease-in-out"
          
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
          
          >Cinematography</motion.p>
          <motion.p className="font-roboto-condensed text-[3rem] lg:text-[3.4rem] xl:text-[4.4rem] not-italic font-bold leading-[1em] text-white transiton-all duration-1000 ease-in-out"
          
          
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
          
          >and Film</motion.p>
          <motion.p className="font-roboto-condensed text-[3rem] lg:text-[3.4rem] xl:text-[4.4rem] not-italic font-bold leading-[1em] text-white transiton-all duration-1000 ease-in-out"
          
          
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
          
          >Production</motion.p>

          <motion.p className="mt-[1em] text-[#82869A] font-roboto-condensed text-[1.5rem] not-italic font-bold leading-[1.2em] transiton-all duration-1000 ease-in-out"
         
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
         
         
          >Our video production company is here to help you create stunning images from start to finish.</motion.p>

          <motion.p className="mt-[1em] text-[#82869A] font-inter text-[1rem] not-italic font-normal  transiton-all duration-1000 ease-in-out"
          
          
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
          
          
          >Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis dui. Integer consequat consectetur est id blandit. Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. </motion.p>
      
      
          <motion.div className="flex items-center mt-[1.875em] transiton-all duration-1000 ease-in-out"
            
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


            <button className="py-[1.0625em] px-[1.5625em] bg-[#FF5E3A] text-white rounded-[0.1875em] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase">get started</button>


          </motion.div>
      
        </div>








      </div>


     





    </div>
    
  </>)
}