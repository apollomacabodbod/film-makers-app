import { motion } from 'framer-motion'



export default function BlogDetail() {

  return (<>




    <div className="flex flex-col ">


      <div className="lg:flex lg:items-center  gap-[1.875em] justify-between">



        <div className="flex flex-col  mt-[3.125em] mb-[6.25em] max-w-[48.125em] ">

          <motion.p className="text-[#82869A] font-roboto-condensed text-[1.5rem] not-italic font-bold leading-[1.2em] transition-all duration-1000 ease-in-out"
          
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
          
          >Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</motion.p>
          <motion.p className="text-[#82869A] font-roboto text-[1rem] not-italic font-normal mt-[2em] transition-all duration-1000 ease-in-out"
          
          
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
          
          
          >Bibendum sit pharetra vitae pellentesque sodales neque mollis orci, purus. Feugiat volutpat eu velit purus enim cum. Eu ipsum viverra sudisse placerat leo. Libero vel mi porttitor luctus viverra a vel vehicula ultricies. Tellus egestas ac in sit et quis vitae. Metus auctor aliquam id cursus quam tempor vulputate cursus.<br/><br/>

 Bibendum leo, sapien, nisl bibendum. Ultricies urna ultricies risus, at. Risus tincidunt netus et pellentesque maecenas pulvinar. Arcu duis tortor turpis nunc, nunc est blandit. Vel volutpat purus mauris condimentum amet tellus scelerisque semper blandit. Feugiat accumsan blandit acu, integer faucibus. At cursus elit hac vitae nec tortor iaculis viverra. Sem aliquet vulputate metus tristique sem commodo faucibus. Sagittis sittis eget at sit posuere est at. Eget eget id iaculis at est cras tristique sit. Nunc sem magna morbi vitae tempus sed consequat. Urna tellus id tique mattis molestie lectus imperdiet. Facilisi suscipit mauris nisl nibh felis pellentesque. Tempus et vitae, at quis nisl enim molestie felis. Tincidunt ornare facilisis interdum ipsum.</motion.p>


          <motion.p className="text-[#FF5E3A] font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase leading-[1.2em] mt-[2em] transition-all duration-1000 ease-in-out"
          
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
          
          
          
          
          >AI,  Machine Enginer,  Computer Vision,  3D Vision</motion.p>


          <div className="lg:flex lg:items-center  gap-[0.625em] mt-[2em]">


            <motion.div className="flex flex-col w-[11.5625em] lg:w-full transition-all duration-1000 ease-in-out "
            
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

              <div className="flex items-center bg-[#82869A] py-[0.625em] px-[0.9375em]  gap-[0.9375em] rounded-[0.1875em]">

                <img src="/blog-facebook.svg" alt="" width={20} height={20}/>

                <p className="text-white font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase ">Facebook</p>

              </div>


            </motion.div>




            <div className="flex flex-col w-[11.5625em] lg:w-full mt-[1em] lg:mt-[0em]">

              <motion.div className="flex items-center bg-[#82869A] py-[0.625em] px-[0.9375em]  gap-[0.9375em] transition-all duration-1000 ease-in-out rounded-[0.1875em]"
              
              
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

                <img src="/blog-twitter.svg" alt="" width={20} height={20}/>

                <p className="text-white font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase ">Twitter</p>

              </motion.div>


            </div>



            <div className="flex flex-col w-[11.5625em] lg:w-full mt-[1em] lg:mt-[0em]">

              <motion.div className="flex items-center bg-[#82869A] py-[0.625em] px-[0.9375em]  gap-[0.9375em] transition-all duration-1000 ease-in-out rounded-[0.1875em]"
              
              
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

                <img src="/blog-linkedIn.svg" alt="" width={20} height={20}/>

                <p className="text-white font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase ">Linkedin</p>

              </motion.div>


            </div>



            <div className="flex flex-col w-[11.5625em] lg:w-full mt-[1em] lg:mt-[0em] rounded-[0.1875em]">

              <motion.div className="flex items-center bg-[#82869A] py-[0.625em] px-[0.9375em]  gap-[0.9375em] transition-all duration-1000 ease-in-out rounded-[0.1875em]"
              
              
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

                <img src="/blog-telegram.svg" alt="" width={20} height={20}/>

                <p className="text-white font-roboto-condensed text-[0.875rem] not-italic font-bold uppercase ">Telegram</p>

              </motion.div>


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


          <motion.p className="text-white font-roboto-condensed text-[4.5rem] not-italic font-bold leading-[1em] transiton-all duration-1000 ease-in-out"
          
          
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
          
          >Leave a Reply</motion.p>

          <motion.p className="text-[#82869A] mt-[1.875em] font-roboto-condensed text-[1rem] font-normal transiton-all duration-1000 ease-in-out"
          
          
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
          
          
          >Your email address will not be published. Required fields are marked *</motion.p>

          <motion.textarea placeholder="Comment" name="" id="" className="mt-[1.25em] px-[1.5em] pt-[0.625em] pb-[6.25em] outline-none rounded-[0.1875em] text-[#82869A] font-roboto-condensed text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"
          
          
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
          
          
          ></motion.textarea>
          <motion.input placeholder="Name" type="text"  className="mt-[1.25em] px-[1.5em] py-[0.625em] outline-none rounded-[0.1875em] text-[#82869A] font-roboto-condensed text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"
          
          
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
          
          
          
          />
          <motion.input placeholder="Email Address" type="text"  className="mt-[1.25em] px-[1.5em] py-[0.625em] outline-none rounded-[0.1875em] text-[#82869A] font-roboto-condensed text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"
          
          
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
          
          
          
          />
          <motion.input placeholder="Website" type="text"  className="mt-[1.25em] px-[1.5em] py-[0.625em] outline-none rounded-[0.1875em] text-[#82869A] font-roboto-condensed text-[1rem] not-italic font-normal transition-all duration-1000 ease-in-out"
          
          
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
          
          
          
          />

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

        <div className=" flex flex-col   lg:mt-[-21.9em]  lg-4:mt-[-21.9em] lg-5:mt-[-22em]  lg-6:mt-[-20.5em]  lg-7:mt-[-18.8em] lg-8:mt-[-17.5em] lg-9:mt-[-16em]  transition-all duration-1000 ease-in-out">

  

          <motion.div className="flex items-center lg:justify-between lg:bg-white  rounded-[0.1875em] transition-all duration-1000 ease-in-out"
          
          
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

            <input type="text" className="rounded-l-[0.1875em] rounded-r-[0em] outline-none py-[0.660em] px-[1.5em]  text-[#82869A]  text-[1rem] not-italic font-normal  w-[14.8em] sm3:w-[18.75em] transition-all duration-1000 ease-in-out"/>

            {/* <img src="/blog-sidebar-searchbar.svg" alt="" width={14} height={16} className="bg-[#FF5E3A] py-[0.875em] px-[1.75em]  "/> */}

            <div className="rounded-r-[0.1875em] bg-center  bg-no-repeat  bg-[#FF5E3A] py-[1.41em] lg:py-[1.5em] px-[2em] w-14px h-16px"
              style={{
                backgroundImage: "url('/blog-sidebar-searchbar.svg')"
              }}

            >


            </div>

          </motion.div>

          <motion.p className="text-white font-roboto-condensed text-[2.25rem] font-bold leading-[1em] mt-[1.875em] transition-all duration-1000 ease-in-out"
          
          
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

          
          >Latest Post</motion.p>



          <div className="flex flex-col mt-[1.875em] ">

 

            <motion.div className="flex items-center gap-[1.25em] transition-all duration-1000 ease-in-out "
            
            
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


              <img src="/home-blog-image1.webp" alt="" width={100} height={100} className='rounded-[0.1875em]'/>


              <div className="flex flex-col">

                <p className="text-white font-roboto-condensed text-[1.25rem] not-italic font-bold ">John Wick Chapter 4 Packs A Fast And Furious Punch</p>

                <p className="text-[#82869A] font-roboto-condensed text-[1rem] not-italic font-normal ">March 27, 2023</p>


              </div>


            </motion.div>



            <motion.div className="flex items-center gap-[1.25em] mt-[1.25em] transition-all duration-1000 ease-in-out"
            
            
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


              <img src="/home-blog-image1.webp" alt="" width={100} height={100} className='rounded-[0.1875em]'/>


              <div className="flex flex-col">

                <p className="text-white font-roboto-condensed text-[1.25rem] not-italic font-bold ">John Wick Chapter 4 Packs A Fast And Furious Punch</p>

                <p className="text-[#82869A] font-roboto-condensed text-[1rem] not-italic font-normal ">March 27, 2023</p>


              </div>


            </motion.div>



            <motion.div className="flex items-center gap-[1.25em] mt-[1.25em] transition-all duration-1000 ease-in-out"
            
            
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


              <img src="/home-blog-image1.webp" alt="" width={100} height={100} className='rounded-[0.1875em]'/>


              <div className="flex flex-col">

                <p className="text-white font-roboto-condensed text-[1.25rem] not-italic font-bold ">John Wick Chapter 4 Packs A Fast And Furious Punch</p>

                <p className="text-[#82869A] font-roboto-condensed text-[1rem] not-italic font-normal ">March 27, 2023</p>


              </div>


            </motion.div>



            <motion.div className="flex items-center gap-[1.25em] mt-[1.25em] transition-all duration-1000 ease-in-out"
            
            
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


              <img src="/home-blog-image1.webp" alt="" width={100} height={100} className='rounded-[0.1875em]'/>


              <div className="flex flex-col">

                <p className="text-white font-roboto-condensed text-[1.25rem] not-italic font-bold ">John Wick Chapter 4 Packs A Fast And Furious Punch</p>

                <p className="text-[#82869A] font-roboto-condensed text-[1rem] not-italic font-normal ">March 27, 2023</p>


              </div>


            </motion.div>


            <motion.div className="flex items-center gap-[1.25em] mt-[1.25em] transition-all duration-1000 ease-in-out"
            
            
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


              <img src="/home-blog-image1.webp" alt="" width={100} height={100} className='rounded-[0.1875em]'/>


              <div className="flex flex-col">

                <p className="text-white font-roboto-condensed text-[1.25rem] not-italic font-bold ">John Wick Chapter 4 Packs A Fast And Furious Punch</p>

                <p className="text-[#82869A] font-roboto-condensed text-[1rem] not-italic font-normal ">March 27, 2023</p>


              </div>


            </motion.div>



  


          </div>




        </div>




      </div>




    </div>


  
  
  </>)
}

