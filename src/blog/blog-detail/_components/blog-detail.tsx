import { useParams } from "react-router-dom";
import { motion } from 'framer-motion'



export default function BlogDetail() {
  const { id } = useParams();

  return (<>




    <div className="flex flex-col border border-[#50B498] green">


      <div className="lg:flex lg:items-center border border-[#50B498] green gap-[1.875em] justify-between">



        <div className="flex flex-col border border-[#50B498] green mt-[3.125em] mb-[6.25em] max-w-[48.125em] ">

          <p className="text-[#82869A] font-roboto-condensed text-[1.5rem] not-italic font-bold leading-[1.2em]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          <p className="text-[#82869A] font-roboto text-[1rem] not-italic font-normal mt-[2em]">Bibendum sit pharetra vitae pellentesque sodales neque mollis orci, purus. Feugiat volutpat eu velit purus enim cum. Eu ipsum viverra sudisse placerat leo. Libero vel mi porttitor luctus viverra a vel vehicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor aliquam id cursus quam tempor vulputate cursus.<br/><br/>

 Bibendum leo, sapien, nisl bibendum. Ultricies urna ultricies risus, at. Risus tincidunt netus et pellentesque maecenas pulvinar. Arcu duis tortor turpis nunc, nunc est blandit. Vel volutpat purus mauris condimentum amet tellus scelerisque semper blandit. Feugiat accumsan blandit acu, integer faucibus. At cursus elit hac vitae nec tortor iaculis viverra. Sem aliquet vulputate metus tristique sem commodo faucibus. Sagittis sittis eget at sit posuere est at. Eget eget id iaculis at est cras tristique sit. Nunc sem magna morbi vitae tempus sed consequat. Urna tellus id tique mattis molestie lectus imperdiet. Facilisi suscipit mauris nisl nibh felis pellentesque. Tempus et vitae, at quis nisl enim molestie felis. Tincidunt ornare facilisis interdum ipsum.</p>


          <p className="text-[#FF5E3A] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase leading-[1.2em] mt-[2em]">AI,  Machine Enginer,  Computer Vision,  3D Vision</p>


          <div className="flex items-center border border-[#50B498] green gap-[0.625em] mt-[2em]">


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



          <motion.div className="flex items-center  gap-[0.625em] transiton-all duration-1000 ease-in-out mt-[6.25em]"
      
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
              },
            }}
                
          >
      
            <img src="/home-about-us-line.svg" alt="" width={40} height={0} className="min-w-[2.5em]"/>
      
            <p className="text-[#FF5E3A] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase ">comments</p>
      
      
          </motion.div>


          <p className="text-white font-roboto-condensed text-[4.5rem] not-italic font-bold leading-[1em] ">Leave a Reply</p>

          <p className="text-[#82869A] mt-[1.875em] font-roboto-condensed text-[1rem] font-normal">Your email address will not be published. Required fields are marked *</p>

          <textarea placeholder="Comment" name="" id="" className="mt-[1.25em] px-[1.5em] pt-[0.625em] pb-[6.25em] outline-none rounded-[0.1875em] text-[#82869A] font-roboto-condensed text-[1rem] not-italic font-normal"></textarea>
          <input placeholder="Name" type="text"  className="mt-[1.25em] px-[1.5em] py-[0.625em] outline-none rounded-[0.1875em] text-[#82869A] font-roboto-condensed text-[1rem] not-italic font-normal"/>
          <input placeholder="Email Address" type="text"  className="mt-[1.25em] px-[1.5em] py-[0.625em] outline-none rounded-[0.1875em] text-[#82869A] font-roboto-condensed text-[1rem] not-italic font-normal"/>
          <input placeholder="Website" type="text"  className="mt-[1.25em] px-[1.5em] py-[0.625em] outline-none rounded-[0.1875em] text-[#82869A] font-roboto-condensed text-[1rem] not-italic font-normal"/>

          <div className="flex items-center">



            <motion.button className="mt-[1.25em] py-[0.9em] px-[1.5625em] bg-[#FF5E3A] text-white rounded-[0.1875em] font-roboto-condensed text-[1rem] not-italic font-bold uppercase transtion-all duration-1000 ease-in-out"


              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0, ease: "easeInOut" }, // Applying duration and easing
                },
              }}


            >subscribe</motion.button>



          </div>





        </div>




        {/* Blog SideBar */}

        <div className="flex flex-col border border-[#50B498] green  lg:mt-[-81.8em] lg-4:mt-[-82em] lg-1:mt-[-80.5em] lg-9:mt-[-78.5em] lg-10:mt-[-77em] lg-11:mt-[-75.5em] lg-12:mt-[-74em] lg-13:mt-[-72.5em] lg-14:mt-[-71em]  xl:mt-[-74.1em]">

  

          <div className="flex items-center lg:bg-white w-full">

            <input type="text" className="outline-none py-[0.625em] px-[1.5em] border border-[#50B498] green text-[#82869A]  text-[1rem] not-italic font-normal  w-[15.4em] sm3:w-[18.75em]"/>

            {/* <img src="/blog-sidebar-searchbar.svg" alt="" width={14} height={16} className="bg-[#FF5E3A] py-[0.875em] px-[1.75em]  "/> */}

            <div className="bg-center  bg-no-repeat  bg-[#FF5E3A] py-[1.5em] px-[1.75em] w-14px h-16px"
              style={{
                backgroundImage: "url('/blog-sidebar-searchbar.svg')"
              }}

            >


            </div>

          </div>



        </div>




      </div>




    </div>


  
  
  </>)
}

