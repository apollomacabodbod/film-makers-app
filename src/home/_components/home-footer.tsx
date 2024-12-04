import HomefooterFilmina from "./home-footer-filmina";




export default function HomeFooter(){


  return (<>

    <div className="z-10 flex flex-col border border-[#50B498] green mt-[3.375em] mb-[2em]">


      <div className="lg:flex lg:items-center">


        <div className="flex flex-col border border-[#50B498] green">


          <div className="lg:flex lg:items-center">

            <p className="text-white font-roboto-condensed text-[2.25rem] not-italic font-bold mr-[1em]">Subscribe</p>
            <p className="text-[#82869A] text-[0.9rem] xl:text-[1rem] font-inter not-italic font-normal lg:max-w-[31.25em] lg:mr-[1em]">Proin magna blandit arcu pellent esque sceleri sque sit amet sapien purus nunc cursus antein vehicula facilisis Integer conse</p>

          </div>


        </div>



        <div className="flex flex-col mt-[1em] lg:mt-[0em]">


          <div className="sm3:flex sm3:items-center">

 
            <input type="text" className="py-[0.625em] px-[1.5em] rounded-[0.1875em] font-inter text-[1rem] not-italic font-normal focus:outline-none  w-full sm1:w-[18.75em]  sm1:mr-[0.625em]"/>
     
     
     
        
            <button className="mt-[1em] sm3:mt-[0em] py-[0.9em] px-[1.5625em] bg-[#FF5E3A] text-white rounded-[0.1875em] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase">subscribe</button>
     


          </div>


        </div>

       
       
       
       
      
        
     
     
      </div>


      <HomefooterFilmina/>



    </div>
    
    
  </>)
}