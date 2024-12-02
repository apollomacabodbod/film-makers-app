
import { motion } from 'framer-motion'

export default function HomeCollaborating() {


  return (
    <>
      <div className="relative flex flex-col border border-[#50B498] green  bg-[#BDBDBD] rounded-[0.3125em] mt-[5.875em] py-[5em]">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(26,27,43,0.8)] to-[rgba(26,27,43,0)]"></div>

        {/* Content */}
        <div className="z-10 relative flex items-center gap-[0.625em] ">
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

          
        </div>

        <p className="mt-[0.1em] text-white z-10 font-roboto-condensed text-[3.4rem] lg:text-[4rem] xl:text-[4.5rem] not-italic font-bold leading-[1em] lg:max-w-[10em] border border-[#50B498] green">We Love Collaborating With Other Creatives</p>


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
          className="absolute bg-center bg-no-repeat bg-cover w-[6.25em] h-[6.25em] top-[24em] sm1:top-[17.3em] lg:top-[18.6em] right-[-0.1%] xl:top-[19.7em] xl:right-[-0.1%]"
          style={{
            backgroundImage: "url('/home-testimontials-ornament.svg')",
          }}
        ></div>


      </div>
    </>
  );
}
