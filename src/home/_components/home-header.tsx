import { Link } from "react-router-dom";




export default function HomeHeader(){

  return (
    
    <>

      <div className="flex flex-col border border-[#50B498] green">


        <div className="flex items-center justify-between ">




          <div className="flex flex-col">

            <div className="flex items-center">

              <img src="/home-header-logo.svg" alt="" width={170} height={0} className="min-w-[10.625em]"/>

            </div>


          </div>




          <div className="lg:flex lg:flex-col hidden">


            <div className="flex items-center gap-[1.5em] ">

              <Link to={"/contact"} >Home </Link>
              <Link to={"/contact"} >About </Link>
              <Link to={"/contact"} >Services </Link>
              <Link to={"/contact"} >Works </Link>
              <Link to={"/contact"} >Blog </Link>
              <Link to={"/contact"} >Testimontials </Link>

            </div>


          </div>


        </div>




        


      


      </div>
    
    
    
    </>)
}