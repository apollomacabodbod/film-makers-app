

// import { useState } from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";





export default function BlogCardsItems(){


  const { posts, loading, error } = useSelector((state: RootState) => state.posts) ;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;





  // type cards = {
  //   id: number;
  //   title: string;
  //   date: string;
  //   image: string;
  // }


  // const [latestcards] = useState<cards[]>([

  //   {id: 1, title: 'John Wick Chapter 4 Packs A Fast And Furious Punch', date: 'March 27, 2023 No Comments', image: '/home-blog-image4.jpeg'},
  //   {id: 2, title: 'John Wick Chapter 4 Packs A Fast And Furious Punch', date: 'March 27, 2023 No Comments', image: '/home-blog-image1.webp'},
  //   {id: 3, title: 'John Wick Chapter 4 Packs A Fast And Furious Punch', date: 'March 27, 2023 No Comments', image: '/home-blog-image2.webp'},
  // ])




  return (<>





    <div className='grid grid-cols-1  lg:grid-cols-3  gap-[1.875em] mt-[1.5em] lg:mt-[0em]  '>

      {posts.map((data) => (



        <Link key={data.id} to={`/blog/${data.id}`} className="flex flex-col transition-all duration-1000 ease-in-out ">



          <motion.div className="lg:flex lg:items-center lg:gap-[1.875em]  "
    
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

            <img src={data.image} alt="" width={0} height={0} className="w-[258px] h-[258px] object-top object-cover rounded-[0.3125em] "/>

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


        </Link>


      ))}




    </div>








   




    
    
    
  </>)
}