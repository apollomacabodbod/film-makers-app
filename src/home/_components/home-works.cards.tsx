
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


     <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#50B498] green gap-[1.875em] mt-[3.125em]">

      
       {data.map((item) => (


         <div key={item.id} className="bg-cover bg-center bg-no-repeat  h-[20.0625em] border border-[#50B498] green"
           style={{
             backgroundImage: `url(${item.image})`, 
           }}
   
         >


           <div className="relative flex flex-col border border-[#50B498] green top-[8em] sm0:top-[7.3em] sm1:top-[8.5em] sm:top-[8.6em] 
           
           pt-[4.8125em] pb-[2em] px-[1.875em] bg-[linear-gradient(180deg,rgba(17,18,30,0)_0%,rgba(17,18,30,0.8)_100%)]">

             <p className={`font-roboto-condensed text-white text-[2.25rem] not-italic font-bold leading-[1em] ${item.title === "Company Profile" && "whitespace-nowrap"}`}>{item.title}</p>


             <div className="flex items-center justify-between mt-[0.5em]">

               <p className="text-[0.8rem]  sm:text-[1rem] sm1:text-[0.8rem] xl:text-[1rem] text-white font-inter  not-italic font-normal">{item.description}</p>
               <p className="font-roboto-condensed text-[1.25rem] not-italic font-bold text-white">{item.year}</p>

             </div>


           </div>


         </div>


  
       ))}

        
     </div>
    
    
   </>)
}