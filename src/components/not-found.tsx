import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function NotFound(){

  return (<>







    <div className="relative flex flex-col min-h-screen bg-right bg-cover bg-no-repeat transition-all duration-1000 ease-in-out"
              
      style={{
        backgroundImage: 'url("professional-camera3.jpg")',
      }}
          
    >
        
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
        
              
      <div className="max-w-[1200px] lg:mx-auto  px-[1.25em] z-20 lex flex-col  my-auto   transition-all duration-1000 ease-in-out">

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


          <p className="text-[#FF5E3A] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase">page not found</p>


        </motion.div>


        <motion.p className="text-white font-roboto-condensed text-[3.5rem] sm3:text-[6rem] text-center font-bold not-italic leading-[1em] transiton-all duration-1000 ease-in-out"


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

        >404</motion.p>



        <motion.div className="flex items-baseline justify-center gap-[1.25em] transiton-all duration-1000 ease-in-out"

 
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




          <p className="font-source-sans-pro text-[1.25rem] not-italic  text-white font-normal">Sorry, we couldn’t find the page you are looking for.</p>

        </motion.div>


        <motion.div className="flex items-center justify-center mt-[1.875em] transiton-all duration-1000 ease-in-out"
            
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

  
          <Link to={"/"} >

            <button className="py-[1.0625em] px-[1.5625em] bg-[#FF5E3A] text-white rounded-[0.1875em] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase">back to home</button>

          </Link>

           


        </motion.div>




      </div>
        
    </div>

    
    
  </>)
}