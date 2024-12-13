
import { motion } from "framer-motion";
import { useState } from "react";


export default function TestimontialsLatest(){


    type testimontials = {

        id: number;
        title: string;
        description: string;
        image: string;
        name: string
    }


    const [testimontialsCards] = useState<testimontials[]>([

      {id: 1, title: 'I Really Like the Idea of the Movies',
        description: 'Proin magna blandit arcu pellent esque sceleri sque sit amet sapien purus nunc cursus antein vehicula facilisis Integer conse tetur est id.'
        , image: '/home-testimontials-user1.png', name: 'Swann Nevve'},


      {id: 2, title: 'I Really Like the Idea of the Movies',
        description: 'Proin magna blandit arcu pellent esque sceleri sque sit amet sapien purus nunc cursus antein vehicula facilisis Integer conse tetur est id.'
        , image: '/home-testimontials-user1.png', name: 'Swann Nevve'},



      {id: 3, title: 'I Really Like the Idea of the Movies',
        description: 'Proin magna blandit arcu pellent esque sceleri sque sit amet sapien purus nunc cursus antein vehicula facilisis Integer conse tetur est id.'
        , image: '/home-testimontials-user1.png', name: 'Swann Nevve'},



      {id: 4, title: 'I Really Like the Idea of the Movies',
        description: 'Proin magna blandit arcu pellent esque sceleri sque sit amet sapien purus nunc cursus antein vehicula facilisis Integer conse tetur est id.'
        , image: '/home-testimontials-user1.png', name: 'Swann Nevve'},



      {id: 5, title: 'I Really Like the Idea of the Movies',
        description: 'Proin magna blandit arcu pellent esque sceleri sque sit amet sapien purus nunc cursus antein vehicula facilisis Integer conse tetur est id.'
        , image: '/home-testimontials-user1.png', name: 'Swann Nevve'},



      {id: 6, title: 'I Really Like the Idea of the Movies',
        description: 'Proin magna blandit arcu pellent esque sceleri sque sit amet sapien purus nunc cursus antein vehicula facilisis Integer conse tetur est id.'
        , image: '/home-testimontials-user1.png', name: 'Swann Nevve'},

    ])


    return(<>



      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[1.875em]">

        {testimontialsCards.map((data) => (


          <div key={data.id} className="flex flex-col  bg-white  w-full  px-[1.875em] py-[1.875em] gap-[1.25em] rounded-[0.3125em] 
    
mt-[1.875em]
">


            <motion.div className="flex items-center justify-between transiton-all duration-1000 ease-in-out"
      
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

              <img src="/home-testimontials-rating.svg" alt="" width={79} height={14}/>
              <img src="/home-testimontials-quotes.svg" alt="" width={32} height={26}/>

            </motion.div>

            <motion.p className="text-[#11121E] font-roboto-condensed not-italic font-bold leading-[1em] text-[2.25rem] transiton-all duration-1000 ease-in-out"
      
      
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
      
      
      
            >{data.title}</motion.p>

            <motion.p className="text-[#82869A] font-inter lg:text-[0.8rem] xl:text-[1rem] not-italic font-normal transiton-all duration-1000 ease-in-out" 
      
      
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
      
      
      
      
            >{data.description}</motion.p>

            <div className="flex items-center ">

              <motion.img 
                src={data.image} 
                alt="" 
                width={0} 
                height={0} 
                className="mr-[0.9375em]  w-16 h-16 rounded-full object-cover transiton-all duration-1000 ease-in-out" 
        
        
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
        
              />

              <motion.p className="text-[#11121E] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase transiton-all duration-1000 ease-in-out"
        
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
        
              >{data.name}</motion.p>
       
              <motion.img src="/home-testimontials-dash.svg" alt="" width={4} height={15} className="mx-[0.3125em] transiton-all duration-1000 ease-in-out"
        
        
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
        
              />

              <motion.p className="text-[#FF5E3A] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase transiton-all duration-1000 ease-in-out"
        
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
        
        
              >Business</motion.p>

            </div>
 
          </div>



        ))}




      </div>



  
    
    
    </>)
}