

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

      {id: 2, title: 'Movie Production', description: 'Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.'
        ,image: '/home-services-cards.svg' , iconOuter: 'home-services-icon-outer.svg', iconInner: 'home-services-icon-inner.svg'},


      {id: 3, title: 'Movie Production', description: 'Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.'
        ,image: '/home-services-cards.svg' , iconOuter: 'home-services-icon-outer.svg', iconInner: 'home-services-icon-inner.svg'},



      {id: 4, title: 'Movie Production', description: 'Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.'
        ,image: '/home-services-cards.svg' , iconOuter: 'home-services-icon-outer.svg', iconInner: 'home-services-icon-inner.svg'},


      {id: 5, title: 'Movie Production', description: 'Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.'
        ,image: '/home-services-cards.svg' , iconOuter: 'home-services-icon-outer.svg', iconInner: 'home-services-icon-inner.svg'},


      {id: 6, title: 'Movie Production', description: 'Proin et magna blandit arcu pellent esque sceleri bandio wasikolo.'
        ,image: '/home-services-cards.svg' , iconOuter: 'home-services-icon-outer.svg', iconInner: 'home-services-icon-inner.svg'},
    ])


    return (<>



      <div className="grid grid-cols-1"></div>
    
    
    </>)
}