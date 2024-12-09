
import { useState } from "react";
import { motion } from "framer-motion";

export default function HomePartners(){


  type data = {
    id: number;
    image: string;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [images, setImages] = useState<data[]>([

    {id: 1, image: '/home-partners-image1.svg'},
    {id: 2, image: '/home-partners-image2.svg'},
    {id: 3, image: '/home-partners-image3.svg'},
    {id: 4, image: '/home-partners-image4.svg'},
    {id: 5, image: '/home-partners-image5.svg'},
    {id: 6, image: '/home-partners-image6.svg'},
    
  ])



  return (<>

 
    <div className="flex flex-col  mt-[5.875em] transition-all duration-1000 ease-in-out" >


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


      <motion.p className="font-roboto-condensed text-white text-[2.8125rem] not-italic font-bold text-center transiton-all duration-1000 ease-in-out"
      
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
        
      
      
      >Trusted by the Best Brands</motion.p>



      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6  gap-[1em] sm:gap-[2em] xl:gap-[6.25em]  mt-[3.5em] transiton-all duration-1000 ease-in-out">

        {images.map((item) => (

          <div key={item.id} className="flex flex-col   ">

            <div className="flex items-center justify-center    ">

              <motion.img src={item.image} alt="home-partners-brand" width={`
  ${(item.id === 1 && 90) || (item.id === 2 && 60) || (item.id === 3 && 60) || (item.id === 4 && 75) ||
   (item.id === 5 && 89.388) || (item.id === 6 && 61.25)}
`}

              className={`${(item.id === 1 && 'min-w-[5.625em]') || (item.id === 2 && 'min-w-[3.75em]') || (item.id === 3 && 'min-w-[3.75em]')
            || (item.id === 4 && 'min-w-[4.6875em]') || (item.id === 5 && 'min-w-[5.58675em]') || (item.id === 6 && 'min-w-[3.828125em]')
            
            
              } transiton-all duration-1000 ease-in-out` }


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

              
              height={60}/>


            </div>

        

          </div>


        ))}





      </div>



    </div>
    
    
  </>)
}