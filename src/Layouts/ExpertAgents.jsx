import { HiArrowUp, HiMinus, HiStar } from "react-icons/hi";
import { FaBath, FaBed, FaRegObjectGroup } from "react-icons/fa";
import { popular } from "../data/popularData";
import { Agents } from "../data/agentsData";



export default function ExpertAgent(){
    return(
        <>
            <section class="text-gray-600 bg-gray-100 mx-20 rounded-lg body-font">
        <div className="pt-20 px-10">
          <p className="flex text-cyan-600 pb-5 text-xl font-semibold">
            <HiMinus className="mt-1  " />
            Expert Agents
          </p>
          <div className="flex justify-between">
            <h1 className="font-bold text-4xl text-black">
              Your{" "}
              <span className="font-normal italic">Expert Guides </span>{" "}
              in Real Estate
            </h1>
            <div class=" ">
              <button class="flex mx-auto rounded-md text-white bg-blue-500 border-0 py-3 px-8 focus:outline-none hover:bg-blue-600  text-sm">
                View All Agents
                <div class="transform rotate-45 mx-3">
                      <HiArrowUp className="text-white w-5 h-5" />
                    </div>
              </button>
            </div>
          </div>
        </div>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap justify-center -m-4">
            {Agents.map((item,index) => (
                 <div class="p-4 lg:p-24 md:p-10 lg:-m-20 m-0 md:w-1/3">
                 <div class="h-full border-8 border-white border-opacity-60 rounded-lg overflow-hidden">
                   <img
                     class="lg:h-48 rounded-t-lg md:h-36 w-full object-cover object-center"
                     src={item.img}
                     alt="blog"
                   />
                   <div class="p-4">

                    <div className="flex justify-between">
                    <h1 class="title-font text-xl font-bold text-black mb-2">
                       {item.name}
                     </h1> 
                     <div className="flex">
                     <HiStar size={28} className="-mt-1 text-yellow-500" />   
                     <h1 class="title-font text-sm font-medium text-black mb-2">
                      ({item.rating})
                     </h1> 
                     </div> 
                     
                    </div> 
                     
                     <h1 class="title-font text-lg font-semibold  mb-3">
                       {item.type}
                     </h1>
                   </div>
                 </div>
               </div>
            ))}
           
          </div>
        </div>
      </section>
        </>
    )
}