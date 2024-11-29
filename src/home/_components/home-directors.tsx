


import { motion } from "framer-motion";

export default function HomeDirectors(){


  return (<>

    <div className="flex flex-col mt-[6.25em] mb-[20em] border border-[#50B498] green">


      <div className="bg-right sm:bg-center bg-no-repeat bg-cover w-full md:h-[31.25em] h-[25.25em] pr-[6.25em]"

        style={{
          backgroundImage: "url('/operator-working.jpg')"
        }}
        
      >


        <div className="relative bg-center bg-no-repeat bg-cover w-[6.25em] h-[6.25em]"

          style={{
            backgroundImage: "url('/home-directors-image2.svg')"
          }}

        >


        </div>



        <div className="relative bg-[#11121E] w-full h-[16.5em] md:top-[16em] top-[10em]"

        >


          <div className="flex flex-col">


            <div className="flex items-center justify-between mt-[3.125em]">


              <div className="flex flex-col border border-[#50B498] green">


                <motion.div className="flex items-center  gap-[0.625em] transiton-all duration-1000 ease-in-out"

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

                  <p className="text-[#FF5E3A] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase ">Directors</p>


                </motion.div>



                <p className="text-white font-roboto-condensed text-[4.5rem] not-italic font-bold  leading-[1em] whitespace-nowrap">Meet the Our</p>
                <p className="text-white font-roboto-condensed text-[4.5rem] not-italic font-bold  leading-[1em] whitespace-nowrap">Video Directors</p>


              </div>


              <div className="flex flex-col border border-[#50B498] green">


                <p className="text-white font-roboto-condensed text-[1.5rem] not-italic font-bold ">Our team is made up of experienced and talented filmmakers who share a common goal</p>

                <p className="text-white">Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc cursus in ante in.</p>

              </div>


            </div>



    
          </div>

           


        </div>


      </div>



    </div>
    
    
  </>)
}