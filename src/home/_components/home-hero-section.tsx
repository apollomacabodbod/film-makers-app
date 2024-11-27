



export default function HomeHeroSection(){



  return (<>


    <div className="flex flex-col border border-[#50B498] green z-10 my-[5em]">


      <p className="font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase text-[#FF5E3A] border border-[#50B498] green">One scene at a time - the movie maker director.</p>

      <p className="font-roboto-condensed text-[4rem] lg:text-[6rem] not-italic font-bold leading-[1em] lg:max-w-[8em] text-white border border-[#50B498] green">Behind Every Great Film is a Visionary.</p>


      <p className="font-source-sans-pro text-white text-[1.25rem] not-italic font-normal border border-[#50B498] green lg:max-w-[29em] mt-[1.875em]">Crafting unforgettable stories bringing their creative vision to life on the big screen - the movie maker director</p>

    
      <div className="flex items-center mt-[1.875em]">


        <div className="flex flex-col">

          <button className="py-[1.0625em] px-[1.5625em] bg-[#FF5E3A] text-white rounded-[0.1875em] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase">Get started</button>

        </div>



        <div className="flex flex-col py-[1.0625em] px-[1.5625em] cursor-pointer ">


          <div className="flex  items-center justify-between gap-[0.625em] ">

            <p className="font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase text-white">view our works</p>

            <img src="home-hero-section-play.svg" alt="" width={13} height={0} className="min-w-[0.8125em] mt-[-0.1em] md:mt-[-0.2em] "/>

          </div>



        </div>




      </div>


       
    </div>
    
    
  </>)
}