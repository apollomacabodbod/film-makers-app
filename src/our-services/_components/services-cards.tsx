
import { motion } from 'framer-motion'

import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";

export default function ServicesCards(){


  const { services, loading, error } = useSelector((state: RootState) => state.services) ;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;


  return (<>



    <div className="grid grid-cols-1 sm3:grid-cols-2 lg:grid-cols-3  gap-[1.875em] mt-[3.125em]  transition-all duration-1000 ease-in-out">

      {services.map((item) => (

        <motion.div key={item.id} className="bg-center bg-no-repeat bg-cover h-[25em]  transition-all duration-1000 ease-in-out rounded-[0.3125em]"

          style={{
            backgroundImage: `url(${item.image})`
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



          <div className="px-[1.25em] relative bg-center bg-no-repeat bg-cover w-full  top-[14.8em] sm0-10:top-[16.3em] sm3:top-[14.8em] md1-2:top-[16.3em] lg:top-[14.8em] xl:top-[14.4em] pb-[0.9375em] "

            style={{
              background: "linear-gradient(180deg, rgba(17, 18, 30, 0.00) 0%, rgba(17, 18, 30, 0.80) 100%)",
            }}
             
          >


            <motion.div className="bg-center bg-no-repeat bg-cover w-[3.125em] h-[3.125em]   transition-all duration-1000 ease-in-out"

              style={{

                backgroundImage: `url(home-services-icon-outer.svg)`
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


              <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-center bg-no-repeat  w-[30px] h-[30px]  "

                style={{

                  backgroundImage: `url(home-video-converting.svg)`
                }}

              >


              </div>


        
            </motion.div>

            <motion.p className="font-roboto-condensed text-white  text-[2rem] lg:text-[2rem] xl:text-[2.25rem] not-italic font-bold mt-[0.1em] transition-all duration-1000 ease-in-out"
              
              
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
              
            >{item.title}</motion.p>

            <motion.p className="text-white font-roboto-condensed text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"
              
              
              
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
              
            >{item.description}</motion.p>
        
          </div>




            


        </motion.div>
      ))}


    </div>
    
    
  </>)
}