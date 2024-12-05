import WorksCards from "./_components/works-cards";
import WorksOurWorks from "./_components/works-our-works";




export default function Works(){


  return (<>







    <div className="flex flex-col  bg-[#232639] xl:px-[5.5em] lg:px-[2.75em] px-[1.25em] transition-all duration-1000 ease-in-out">

      <WorksOurWorks/>
      <WorksCards/>

    </div>


    
    
  </>)
}