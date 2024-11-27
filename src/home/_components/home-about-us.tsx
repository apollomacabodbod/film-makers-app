



export default function HomeAboutUs(){


  return (
    
    <>

      <div className="flex flex-col border border-[#50B498] green ">

        <div className="flex items-center gap-[0.625em]">

          <img src="/home-about-us-line.svg" alt="" width={40} height={0} className="min-w-[2.5em]"/>

          <p className="text-[#FF5E3A] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase">About Us</p>


        </div>


        <p className="text-white font-roboto-condensed text-[4rem] lg:text-[4.5rem] not-italic font-bold leading-[1em] lg:max-w-[8em]">We Are a Team of Passionate Filmmakers</p>

        <p className="text-[#82869A] font-roboto-condensed text-[1.5rem] not-italic font-bold leading-[1.2em] lg:max-w-[23em]">Dedicated to bringing creative and compelling stories to life on screen</p>
       

        <p className="text-[#82869A] ">Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis dui. Integer consequat consectetur est id blandit. Proin et magna blandit arcu pellentesque scelerisque sit amet.</p>

      </div>


    
    
    </>
  )
}