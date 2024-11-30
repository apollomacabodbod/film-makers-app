

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
        ,image: '/home-services-cards.svg' , iconOuter: 'home-services-icon-outer.svg', iconInner: 'home-services-icon-inner.svg'},

      {id: 2, title: 'Movie Directing', description: 'Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.'
        ,image: '/home-services-cards.svg' , iconOuter: 'home-services-icon-outer.svg', iconInner: 'home-services-icon-inner.svg'},


      {id: 3, title: 'High Quality Work', description: 'Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.'
        ,image: '/home-services-cards.svg' , iconOuter: 'home-services-icon-outer.svg', iconInner: 'home-services-icon-inner.svg'},



      {id: 4, title: 'Sound Effects', description: 'Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.'
        ,image: '/home-services-cards.svg' , iconOuter: 'home-services-icon-outer.svg', iconInner: 'home-services-icon-inner.svg'},


      {id: 5, title: 'Live Streaming', description: 'Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.'
        ,image: '/home-services-cards.svg' , iconOuter: 'home-services-icon-outer.svg', iconInner: 'home-services-icon-inner.svg'},


      {id: 6, title: 'Video Converting', description: 'Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.'
        ,image: '/home-services-cards.svg' , iconOuter: 'home-services-icon-outer.svg', iconInner: 'home-services-icon-inner.svg'},
    ])


    return (<>



      <div className="grid grid-cols-1 sm3:grid-cols-2 lg:grid-cols-3 border border-[#50B498] green gap-[1.875em] mt-[3.125em]">

        {cards.map((item) => (

          <div key={item.id} className="bg-center bg-no-repeat bg-cover h-[25em] border border-[#50B498] green px-[1.25em]"

            style={{
              backgroundImage: `url(${item.image})`
            }}
            
          >



            <div className="relative bg-center bg-no-repeat bg-cover w-full  xs:top-[15.8em] sm:top-[16.6em] sm3:top-[15.8em] md1:top-[16.7em]  lg:top-[15.4em] xl:top-[14.7em]  pb-[0.9375em] border border-[#50B498] green bg-[linear-gradient(180deg,rgba(17,18,30,0.00)_0%,rgba(17, 18, 30, 0.80)_100%)]"


            >


              <div className="bg-center bg-no-repeat bg-cover w-[3.125em] h-[3.125em]  border border-[#50B498] green"

                style={{

                  backgroundImage: `url(${item.iconOuter})`
                }}

              >

        
              </div>

              <p className="font-roboto-condensed text-white  text-[2rem] lg:text-[2rem] xl:text-[2.25rem] not-italic font-bold mt-[0.1em]">{item.title}</p>

              <p className="text-white font-inter text-[0.7rem] lg:text-[0.9rem] xl:text-[1rem] not-italic font-normal leading-[1.2em]">{item.description}</p>
        
            </div>




            


          </div>
        ))}


      </div>
    
    
    </>)
}