



export default function HomeHeroSection(){



  return (<>


    <div className="flex flex-col border border-[#50B498] green z-10 my-[7em]">


      <p className="font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase text-[#FF5E3A] border border-[#50B498] green">One scene at a time - the movie maker director.</p>

      <p className="font-roboto-condensed text-[6rem] not-italic font-bold leading-[1em] lg:max-w-[8em] text-white border border-[#50B498] green">Behind Every Great Film is a Visionary.</p>


      <p className="font-source-sans-pro text-white text-[1.25rem] not-italic font-normal border border-[#50B498] green lg:max-w-[29em] mt-[1.875em]">Crafting unforgettable stories bringing their creative vision to life on the big screen - the movie maker director</p>

    
      <div className="flex items-center">


        <div className="flex flex-col">

          <button className="">Get started</button>

        </div>



        <div className="flex flex-col">


          <div className="flex items-center justify-between gap-[0.8125em]">

            <p>view our works</p>

            <img src="home-hero-section-play.svg" alt="" width={13} height={0} className="min-w-[0.8125em]"/>

          </div>



        </div>




      </div>


       
    </div>
    
    
  </>)
}