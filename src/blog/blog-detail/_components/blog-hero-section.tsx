

export default function BlogDetailHeroSection(){

  return(<>

    <div className="z-20 lex flex-col mt-[20em] mb-[6.875em]  transition-all duration-1000 ease-in-out">

      <p className="text-white font-roboto-condensed text-[6rem] not-italic font-bold leading-[1em]">John Wick Chapter 4 Packs A Fast And Furious Punch</p>

      <div className="flex items-baseline gap-[2.5625em] mt-[1.875em] mb-[3.125em]">


        <div className="flex flex-col">

          <div className="flex items-baseline gap-[0.625em]">

            <img src="/blog-detail-calendar.svg" alt="" width={13} height={16}/>

            <p className="text-white">March 27, 2023</p>


          </div>

      

        </div>



        <div className="flex flex-col">

          <div className="flex items-baseline gap-[0.625em]">

            <img src="/blog-detail-calendar.svg" alt="" width={13} height={16}/>

            <p className="text-white">March 27, 2023</p>


          </div>



        </div>




      </div>


    </div>
    
    
  </>)
}