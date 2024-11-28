
import { motion } from "framer-motion";


export default function HomeAboutUs(){


  return (
    
    <>

      <div className="flex flex-col lg:mt-[6.25em] md:mt-[3em] my-[6em] border border-[#50B498] green ">

        <div className="md:flex md:item-center md:justify-between xl:gap-[3.125em] lg:gap-[3em] md:gap-[1.2em]">



          <div className="flex flex-col border border-[#50B498] green">

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


            <motion.p className="text-white font-roboto-condensed text-[4rem] lg:text-[4rem] not-italic font-bold leading-[1em] lg:max-w-[8em] mt-[0.1em] transiton-all duration-1000 ease-in-out"
            
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

            <motion.p className="text-[#82869A] font-roboto-condensed text-[1.5rem] not-italic font-bold leading-[1.2em] lg:max-w-[23em] mt-[1.875em] transiton-all duration-1000 ease-in-out"
            
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


            <motion.p className="text-[#82869A] font-inter text-[1rem] not-italic font-normal leading-[1.5em] max-w-[34em] mt-[1.875em] transiton-all duration-1000 ease-in-out"
            
            
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


              <button className="py-[1.0625em] px-[1.5625em] bg-[#FF5E3A] text-white rounded-[0.1875em] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase">learn more</button>


            </motion.div>


          </div>





          <div className="flex items-center justify-center  relative lg:top-[-9em] md:top-[-7em] mt-[2em] lg:mt-[0em]">


            <motion.div className="bg-center bg-cover bg-no-repeat  lg:w-[530px] md:w-[400px] md:h-[670px] w-full h-[25em] transition-all duration-1000 ease-in-out rounded-[0.3125em]"
 
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

            >



              <div
                className="absolute bg-cover bg-no-repeat bg-center w-[100px] h-[100px]  top-[18em] md:top-[35em] right-[-0.1%] xl:right-[-0.1%] lg:right-[-0.1%] md:right-[-0.1%]"
                style={{
                  backgroundImage: 'url("home-about-us-ornament.svg")',
                }}
              >

              </div>


            </motion.div>


          </div>


          






        </div>



      </div>

     

    
    
    </>
  )
}