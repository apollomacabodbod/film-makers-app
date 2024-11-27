



export default function HomeAboutUs(){


  return (
    
    <>

      <div className="flex flex-col lg:mt-[6.25em] md:mt-[3em] my-[6em]">

        <div className="md:flex md:item-center md:justify-between md:gap-[3.125em]">



          <div className="flex flex-col border border-[#50B498] green ">

            <div className="flex items-center gap-[0.625em]">

              <img src="/home-about-us-line.svg" alt="" width={40} height={0} className="min-w-[2.5em]"/>

              <p className="text-[#FF5E3A] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase">About Us</p>


            </div>


            <p className="text-white font-roboto-condensed text-[4rem] lg:text-[4rem] not-italic font-bold leading-[1em] lg:max-w-[8em] mt-[0.1em]">We Are a Team of Passionate Filmmakers</p>

            <p className="text-[#82869A] font-roboto-condensed text-[1.5rem] not-italic font-bold leading-[1.2em] lg:max-w-[23em] mt-[1.875em]">Dedicated to bringing creative and compelling stories to life on screen</p>


            <p className="text-[#82869A] font-inter text-[1rem] not-italic font-normal leading-[1.5em] max-w-[34em] mt-[1.875em]">Proin et magna blandit arcu pellentesque scelerisque sit amet a sapien. Aenean purus nunc, cursus in ante in, vehicula facilisis dui. Integer consequat consectetur est id blandit. Proin et magna blandit arcu pellentesque scelerisque sit amet.</p>


            <div className="flex items-center mt-[1.875em]">


              <button className="py-[1.0625em] px-[1.5625em] bg-[#FF5E3A] text-white rounded-[0.1875em] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase">learn more</button>


            </div>


          </div>




          <div className="flex items-center justify-center  md:relative lg:top-[-9em] md:top-[-7em] mt-[2em] lg:mt-[0em]">

            <div
              className=" bg-cover bg-no-repeat bg-center md:w-[350px] md:h-[670px]  w-full h-[25em]"
              style={{
                backgroundImage: 'url("home-about-us-image1.svg")',
              }}
            ></div>


          </div>






        </div>



      </div>

     

    
    
    </>
  )
}