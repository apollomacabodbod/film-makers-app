
import { useState } from "react"


export default function HomeWorksCards(){


   type HomeCards = {
      id: number;
      title: string;
      description: string;
      year: string;
      image: string;
      
   }


   const [data, setData] = useState<HomeCards[]>([

     {id: 1 , title: "TV Commecial", description: 'Proin et magna blandit arcu pellentes scelerisque.', image: '/home-works-card.svg',year: "2023"},
     {id: 2 , title: "Indie Movie", description: 'Proin et magna blandit arcu pellentes sceleris ameta.', image: '/home-works-card.svg',year: "2023"},
     {id: 3 , title: "Documentary", description: 'Proin et magna blandit arcu pellentes sceleris ameta.', image: '/home-works-card.svg',year: "2023"},
     {id: 4 , title: "Company Profile", description: 'Proin et magna blandit arcu pellentes sceleris ameta.', image: '/home-works-card.svg',year: "2023"},


   ])



   return (<>


     <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#50B498] green gap-[1.875em] mt-[3.125em]">

      
       {data.map((item) => (


         <div className="bg-cover bg-center bg-no-repeat  h-[20.0625em] border border-[#50B498] green"
           style={{
             backgroundImage: `url(${item.image})`, 
           }}
   
         >


           <div className="relative flex flex-col border border-[#50B498] green top-[13.4em] sm:top-[14.4em] py-[1.25em] px-[1.875em]">

             <p>{item.title}</p>


             <div className="flex items-center justify-between">

               <p className="text-[0.8rem]  sm:text-[1rem] lg:text-[0.8rem] xl:text-[1rem]">{item.description}</p>
               <p>{item.year}</p>

             </div>


           </div>


         </div>


  
       ))}

        
     </div>
    
    
   </>)
}