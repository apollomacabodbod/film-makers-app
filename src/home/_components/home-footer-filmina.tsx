import HomeFooterCards from "./home-footer-cards";



export default function HomefooterFilmina(){


  return (<>


    <div className="flex flex-col border border-[#50B498] green mt-[6.5em]">


      <div className="lg:flex lg:items-center lg:gap-[2.2em] xl:gap-[3.125em] border border-[#50B498] green w-full ">



        <div className="flex flex-col gap-[1.875em] ">


          <div className="flex items-center">

            <img src="/home-header-logo.svg" alt="" width={170} height={34}/>

          </div>

          <p className="text-[#82869A] ">Proin et magna blandit arcu pellentes sceleri sit amet a sapien. Aenean purus nunc cursus in ante in, vehicula facilisis </p>


        </div>



        <div className="flex flex-col border border-[#50B498] green h-[190px] mt-[1.5em] lg:mt-[0em]">

          <p className="text-white font-roboto-condensed text-[1.25rem] not-italic font-bold ">Keep in touch</p>

          <p className="text-[#82869A]  mt-[0.625em] font-inter text-[1rem] not-italic font-normal min-w-[14.75em]">768 Market Street San Francisco, CA 64015, United States</p>

          <p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal whitespace-nowrap hidden"></p>

          <p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal">info@filmina.com</p>

          <p className="text-[#82869A] mt-[0.625em] font-inter text-[1rem] not-italic font-normal whitespace-nowrap">(+021) 345 678 910</p>
           
        </div>


        <HomeFooterCards/>



      </div>


       


    </div>
    
    
  </>)
}