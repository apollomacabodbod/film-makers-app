

import { motion } from "framer-motion";

export default function HomePartners(){


  return (<>


    <div className="flex flex-col border border-[#50B498] green mt-[5.875em]">


      <motion.div className="flex items-center justify-center gap-[0.625em] transiton-all duration-1000 ease-in-out"
            
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

        <p className="text-[#FF5E3A] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase">Partners</p>


      </motion.div>


      <p className="font-roboto-condensed text-white text-[2.8125rem] not-italic font-bold text-center">Trusted by the Best Brands</p>


      <div className="flex items-center justify-center gap-[6.25em]">

        <img src="/home-partners-image1.svg" alt="" width={90} height={60}/>
        <img src="/home-partners-image2.svg" alt="" width={60} height={60}/>
        <img src="/home-partners-image3.svg" alt="" width={60} height={60}/>
        <img src="/home-partners-image4.svg" alt="" width={75} height={60}/>
        <img src="/home-partners-image5.svg" alt="" width={89.388} height={60}/>
        <img src="/home-partners-image6.svg" alt="" width={61.25} height={60}/>



      </div>



    </div>
    
    
  </>)
}