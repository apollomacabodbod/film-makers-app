
import { motion } from 'framer-motion'
import { useState } from "react"

export default function HomeServicesCards(){


    type ServicesCards = {
        id: number;
        title: string;
        description: string;
        image: string;
        iconOuter: string;
        iconInner: string;
    }


    const [cards] = useState<ServicesCards[]>([

      {id: 1, title: 'Movie Production', description: 'Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.'
        ,image: '/professional-camera.jpg' , iconOuter: 'home-services-icon-outer.svg', iconInner: 'home-movie-production.svg'},

      {id: 2, title: 'Movie Directing', description: 'Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.'
        ,image: '/cameraman-shooting.jpg' , iconOuter: 'home-services-icon-outer.svg', iconInner: 'home-movie-directing.svg'},


      {id: 3, title: 'High Quality Work', description: 'Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.'
        ,image: '/videographer-filming.jpeg' , iconOuter: 'home-services-icon-outer.svg', iconInner: 'home-high-quality.svg'},



      {id: 4, title: 'Sound Effects', description: 'Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.'
        ,image: '/professional-recording.jpg' , iconOuter: 'home-services-icon-outer.svg', iconInner: 'home-sound-effects.svg'},

      {id: 5, title: 'Live Streaming', description: 'Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.'
        ,image: '/body-part.jpg' , iconOuter: 'home-services-icon-outer.svg', iconInner: 'home-live-streaming.svg'},


      {id: 6, title: 'Video Converting', description: 'Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.'
        ,image: '/videographer-editing.JPG' , iconOuter: 'home-services-icon-outer.svg', iconInner: 'home-video-converting.svg'},
    ])


    return (<>



      <div className="grid grid-cols-1 sm3:grid-cols-2 lg:grid-cols-3  gap-[1.875em] mt-[3.125em]">

        {cards.map((item) => (

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



            <div className="px-[1.25em] relative bg-center bg-no-repeat bg-cover w-full  xs:top-[16.1em] xs11:top-[16.9em] xs12:top-[17.6em] xs10:top-[17em] xs1:top-[17em]  sm:top-[16.9em] sm3:top-[16.1em] md1:top-[16.9em] md2:top-[16.9em] lg:top-[15.7em] xl:top-[15em]  pb-[0.9375em] "

              style={{
                background: "linear-gradient(180deg, rgba(17, 18, 30, 0.00) 0%, rgba(17, 18, 30, 0.80) 100%)",
              }}
             
            >


              <motion.div className="bg-center bg-no-repeat bg-cover w-[3.125em] h-[3.125em]   transition-all duration-1000 ease-in-out"

                style={{

                  backgroundImage: `url(${item.iconOuter})`
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

                    backgroundImage: `url(${item.iconInner})`
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

              <motion.p className="text-white font-inter text-[0.7rem] lg:text-[0.9rem] xl:text-[1rem] not-italic font-normal leading-[1.2em] transition-all duration-1000 ease-in-out"
              
              
              
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