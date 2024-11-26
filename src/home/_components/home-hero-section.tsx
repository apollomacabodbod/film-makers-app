



export default function HomeHeroSection(){



  return (<>


    <div className="flex flex-col border border-[#50B498] green">


      <p className="font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase text-[#FF5E3A]">One scene at a time - the movie maker director.</p>

      <p>Behind Every Great Film is a Visionary.</p>


      <p>Crafting unforgettable stories bringing their creative vision to life on the big screen - the movie maker director</p>

    
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