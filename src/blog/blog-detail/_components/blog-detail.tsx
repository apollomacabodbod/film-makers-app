import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const { id } = useParams();

  return (<>


    <div className="flex flex-col border border-[#50B498] green mt-[3.125em] mb-[6.25em] max-w-[48.125em] gap-[2em]">

      <p className="text-[#82869A] font-roboto-condensed text-[1.5rem] not-italic font-bold leading-[1.2em]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
      <p className="text-[#82869A] font-roboto text-[1rem] not-italic font-normal">Bibendum sit pharetra vitae pellentesque sodales neque mollis orci, purus. Feugiat volutpat eu velit purus enim cum. Eu ipsum viverra sudisse placerat leo. Libero vel mi porttitor luctus viverra a vel vehicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor aliquam id cursus quam tempor vulputate cursus.<br/><br/>

       Bibendum leo, sapien, nisl bibendum. Ultricies urna ultricies risus, at. Risus tincidunt netus et pellentesque maecenas pulvinar. Arcu duis tortor turpis nunc, nunc est blandit. Vel volutpat purus mauris condimentum amet tellus scelerisque semper blandit. Feugiat accumsan blandit acu, integer faucibus. At cursus elit hac vitae nec tortor iaculis viverra. Sem aliquet vulputate metus tristique sem commodo faucibus. Sagittis sittis eget at sit posuere est at. Eget eget id iaculis at est cras tristique sit. Nunc sem magna morbi vitae tempus sed consequat. Urna tellus id tique mattis molestie lectus imperdiet. Facilisi suscipit mauris nisl nibh felis pellentesque. Tempus et vitae, at quis nisl enim molestie felis. Tincidunt ornare facilisis interdum ipsum.</p>


      <p className="text-[#FF5E3A] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase leading-[1.2em]">AI,  Machine Enginer,  Computer Vision,  3D Vision</p>
 
 
      <div className="flex items-center border border-[#50B498] green gap-[0.625em]">


        <div className="flex flex-col w-full">

          <div className="flex items-center bg-[#82869A] py-[0.625em] px-[0.9375em] border border-[#50B498] green gap-[0.9375em]">

            <img src="/blog-facebook.svg" alt="" width={20} height={20}/>

            <p className="text-white font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase ">Facebook</p>

          </div>


        </div>




        <div className="flex flex-col w-full">

          <div className="flex items-center bg-[#82869A] py-[0.625em] px-[0.9375em] border border-[#50B498] green gap-[0.9375em]">

            <img src="/blog-twitter.svg" alt="" width={20} height={20}/>

            <p className="text-white font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase ">Twitter</p>

          </div>


        </div>



        <div className="flex flex-col w-full">

          <div className="flex items-center bg-[#82869A] py-[0.625em] px-[0.9375em] border border-[#50B498] green gap-[0.9375em]">

            <img src="/blog-linkedIn.svg" alt="" width={20} height={20}/>

            <p className="text-white font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase ">Linkedin</p>

          </div>


        </div>



        <div className="flex flex-col w-full ">

          <div className="flex items-center bg-[#82869A] py-[0.625em] px-[0.9375em] border border-[#50B498] green gap-[0.9375em]">

            <img src="/blog-telegram.svg" alt="" width={20} height={20}/>

            <p className="text-white font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase ">Telegram</p>

          </div>


        </div>



      </div>

 
    </div>

  
  
  </>)
}

