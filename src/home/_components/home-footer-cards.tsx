
import { motion } from 'framer-motion'

export default function HomeFooterCards(){

  return (<>


    <div className="flex flex-col transition-all duration-1000 ease-in-out">

      <div className="md:flex md:items-baseline md:justify-between gap-[3.125em] w-full  transition-all duration-1000 ease-in-out">





        <div className="flex flex-col mt-[1.5em] lg:mt-[0em]">

          <motion.p className="text-white font-roboto-condensed text-[1.25rem] not-italic font-bold transition-all duration-1000 ease-in-out"


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


          >Keep in touch</motion.p>

          <motion.p className="text-[#82869A]  mt-[0.625em] font-inter text-[1rem] not-italic font-normal min-w-[14.75em] transition-all duration-1000 ease-in-out"


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


          >768 Market Street San Francisco, CA 64015, United States</motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal whitespace-nowrap hidden transition-all duration-1000 ease-in-out"

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



          ></motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"


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


          >info@filmina.com</motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal whitespace-nowrap transition-all duration-1000 ease-in-out"


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


          >(+021) 345 678 910</motion.p>
 
        </div>




        <div  className="flex flex-col lg:max-w-[16.4375em] mt-[1em] lg:mt-[0em] ">

          <motion.p className="text-white font-roboto-condensed text-[1.25rem] not-italic font-bold transition-all duration-1000 ease-in-out"
          
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
          
          
          >Services</motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em]  font-inter text-[1rem] not-italic font-normal whitespace-nowrap transition-all duration-1000 ease-in-out"
          
          
          
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
          
          >Movie production</motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"
          
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
          
          
          
          >Movie directing</motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"
          
          
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
          
          
          >High quality work</motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"
          
          
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
          
          
          >Sound effect</motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"
          
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
          
          
          
          >Live streaming</motion.p>

        </div>




        <div className="flex flex-col lg:max-w-[16.4375em] mt-[1em] lg:mt-[0em] ">

          <motion.p className="text-white font-roboto-condensed text-[1.25rem] not-italic font-bold transition-all duration-1000 ease-in-out whitespace-nowrap"
          
          
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
          
          
          >Quick links</motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em]  font-inter text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"
          
          
          
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
          
          
          >About</motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"
          
          
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
          
          
          >Services</motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"
          
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
          
          
          
          >Works</motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"
          
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
          
          
          
          >Blog</motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"
          
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
          
          
          
          >Testimonials</motion.p>

        </div>



        <div className="flex flex-col lg:max-w-[16.4375em] mt-[1em] lg:mt-[0em] ">

          <motion.p className="text-white font-roboto-condensed text-[1.25rem] not-italic font-bold transition-all duration-1000 ease-in-out"
          
          
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
          
          >Supports</motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em]  font-inter text-[1rem] not-italic font-normal whitespace-nowrap transition-all duration-1000 ease-in-out"
          
          
          
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
          
          >Help center</motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"
          
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
          
          
          >Disclaimer</motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"
          
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
          
          
          
          >FAQs</motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"
          
          
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
          
          
          >Contact</motion.p>

          <motion.p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal whitespace-nowrap transition-all duration-1000 ease-in-out"
          
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
          
          
          
          >Privacy Policy</motion.p>

        </div>





      </div>


    </div>
    
    
  </>)
}