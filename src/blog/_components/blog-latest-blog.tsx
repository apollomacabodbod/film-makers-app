


import { motion } from 'framer-motion'
import { useState } from 'react'

export default function LatestBlogCards(){

  type cards = {
    id: number;
    title: string;
    date: string;
    image: string;
  }


  const [latestcards] = useState<cards[]>([

    {id: 1, title: 'John Wick Chapter 4 Packs A Fast And Furious Punch', date: 'March 27, 2023 No Comments', image: '/home-blog-image1.webp'},
    {id: 2, title: 'John Wick Chapter 4 Packs A Fast And Furious Punch', date: 'March 27, 2023 No Comments', image: '/home-blog-image1.webp'},
    {id: 3, title: 'John Wick Chapter 4 Packs A Fast And Furious Punch', date: 'March 27, 2023 No Comments', image: '/home-blog-image1.webp'},
    {id: 4, title: 'John Wick Chapter 4 Packs A Fast And Furious Punch', date: 'March 27, 2023 No Comments', image: '/home-blog-image1.webp'},
    {id: 5, title: 'John Wick Chapter 4 Packs A Fast And Furious Punch', date: 'March 27, 2023 No Comments', image: '/home-blog-image1.webp'},
    {id: 6, title: 'John Wick Chapter 4 Packs A Fast And Furious Punch', date: 'March 27, 2023 No Comments', image: '/home-blog-image1.webp'},
    {id: 7, title: 'John Wick Chapter 4 Packs A Fast And Furious Punch', date: 'March 27, 2023 No Comments', image: '/home-blog-image1.webp'},
    {id: 8, title: 'John Wick Chapter 4 Packs A Fast And Furious Punch', date: 'March 27, 2023 No Comments', image: '/home-blog-image1.webp'},
  ])




  return (<>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1.875em] mb-[6.25em] '>

      {latestcards.map((data) => (

        <div key={data.id} className='flex flex-col '>


          <motion.div className="flex items-center  transiton-all duration-1000 ease-in-out "
          
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

            <img src={data.image} alt="" width={0} height={0} className="w-[258px] h-[258px] object-cover rounded-[0.3125em] "/>

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
        
        
          >{data.title}</motion.p>

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
        
          >{data.date}</motion.p>


        </div>


      ))}




    </div>


    
    
    
  </>)
}