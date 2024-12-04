


import { motion } from 'framer-motion'

export default function HomeBlogCards(){

  return (<>



    <div className="flex flex-col ">


      <div className="lg:flex lg:items-center lg:gap-[1.875em] w-full">


        <div className="flex flex-col  mt-[1.5em] lg:mt-[0em] ">

          <motion.div className="flex items-center transiton-all duration-1000 ease-in-out"
          
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

            <img src="/home-blog-image1.webp" alt="" width={0} height={0} className="w-[258px] h-[258px] object-cover rounded-[0.3125em]"/>
  
          </motion.div>

          <motion.p className="font-roboto-condensed text-[1.5rem] not-italic font-bold text-white mt-[1.25em] transition-all duration-1000 ease-in-out"
          
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

          <motion.p className="text-[#82869A] font-inter text-[1rem] not-italic font-normal  mt-[0.625em] transition-all duration-1000 ease-in-out" 
          
          
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
          
          >March 27, 2023 No Comments</motion.p>


        </div>



        <div className="flex flex-col  mt-[1.5em] lg:mt-[0em] ">

          <motion.div className="flex items-center transiton-all duration-1000 ease-in-out"
          
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

            <img src="/home-blog-image4.jpeg" alt="" width={0} height={0} className="w-[258px] h-[258px] object-cover rounded-[0.3125em]"/>
  
          </motion.div>

          <motion.p className="font-roboto-condensed text-[1.5rem] not-italic font-bold text-white mt-[1.25em] transition-all duration-1000 ease-in-out"
          
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

          <motion.p className="text-[#82869A] font-inter text-[1rem] not-italic font-normal  mt-[0.625em] transition-all duration-1000 ease-in-out" 
          
          
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
          
          >March 27, 2023 No Comments</motion.p>


        </div>




        <div className="flex flex-col   mt-[1.5em] lg:mt-[0em] ">

          <motion.div className="flex items-center transiton-all duration-1000 ease-in-out"
          
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

            <img src="/home-blog-image2.webp" alt="" width={0} height={0} className="w-[258px] h-[258px] object-cover rounded-[0.3125em]"/>
  
          </motion.div>

          <motion.p className="font-roboto-condensed text-[1.5rem] not-italic font-bold text-white mt-[1.25em] transition-all duration-1000 ease-in-out"
          
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

          <motion.p className="text-[#82869A] font-inter text-[1rem] not-italic font-normal  mt-[0.625em] transition-all duration-1000 ease-in-out" 
          
          
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
          
          >March 27, 2023 No Comments</motion.p>


        </div>



      </div>








    </div>


   




    
    
    
  </>)
}