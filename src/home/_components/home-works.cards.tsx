import { motion } from 'framer-motion'
import { useState } from "react"


export default function HomeWorksCards(){


   type HomeCards = {
      id: number;
      title: string;
      description: string;
      year: string;
      image: string;
      
   }


   const [data] = useState<HomeCards[]>([

     {id: 1 , title: "TV Commecial", description: 'Proin et magna blandit arcu pellentes scelerisque.', image: '/romantic-date.jpg',year: "2023"},
     {id: 2 , title: "Indie Movie", description: 'Proin et magna blandit arcu pellentes sceleris ameta.', image: '/mime-artists.jpg',year: "2023"},
     {id: 3 , title: "Documentary", description: 'Proin et magna blandit arcu pellentes sceleris ameta.', image: '/portrait-of-videographer.jpg',year: "2023"},
     {id: 4 , title: "Company Profile", description: 'Proin et magna blandit arcu pellentes sceleris ameta.', image: '/movie-clapper.jpg',year: "2023"},


   ])



   return (<>


     <div className="grid grid-cols-1 lg:grid-cols-2  gap-[1.875em] mt-[3.125em]">

      
       {data.map((item) => (


         <motion.div key={item.id} className="bg-cover bg-center bg-no-repeat  h-[20.0625em]  transition-all duration-1000 ease-in-out rounded-[0.3125em]"
           style={{
             backgroundImage: `url(${item.image})`, 
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


           <div className="relative flex flex-col  xs:top-[8.3em]  sm0:top-[8.1em] sm1:top-[8.7em] sm0-1:top-[8.7em] sm0-11:top-[8.7em] sm:top-[8.1em] 
           
           pt-[4.8125em] pb-[2em] px-[1.875em] bg-[linear-gradient(180deg,rgba(17,18,30,0)_0%,rgba(17,18,30,0.8)_100%)]">

             <motion.p className={`transition-all duration-1000 ease-in-out font-roboto-condensed text-white text-[2.25rem] not-italic font-bold leading-[1em] ${item.title === "Company Profile" && "whitespace-nowrap"}`}
             
             
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


             <div className="flex items-center justify-between mt-[0.5em]">

               <motion.p className="text-[0.8rem]  sm:text-[0.8rem] sm1:text-[0.8rem] xl:text-[1rem] text-white font-inter  not-italic font-normal transition-all duration-1000 ease-in-out"
               
               
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
               <motion.p className="font-roboto-condensed text-[1.25rem] not-italic font-bold text-white transition-all duration-1000 ease-in-out"
               
               
               
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
               
               >{item.year}</motion.p>

             </div>


           </div>


         </motion.div>


  
       ))}

        
     </div>
    
    
   </>)
}