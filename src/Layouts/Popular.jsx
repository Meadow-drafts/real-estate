import { HiArrowUp, HiMinus } from "react-icons/hi";
import { CiLocationOn } from "react-icons/ci";
import { FaBath, FaBed, FaRegObjectGroup } from "react-icons/fa";
import { popular } from "../data/popularData";



export default function Popular() {
  return (
    <>
      <section class="text-gray-600 bg-gray-100 mx-20 rounded-lg body-font">
        <div className="pt-20 px-28">
          <p className="flex text-cyan-600 pb-5 text-xl font-semibold">
            <HiMinus className="mt-1  " />
            Best Deals
          </p>
          <div className="flex justify-between">
            <h1 className="font-bold text-4xl text-black">
              Popular{" "}
              <span className="font-normal italic">Property Deals </span>{" "}
            </h1>
            <div class=" ">
              <button class="flex mx-auto rounded-md text-white bg-blue-500 border-0 py-3 px-8 focus:outline-none hover:bg-blue-600  text-sm">
                View All Properties
                <div class="transform rotate-45 mx-3">
                      <HiArrowUp className="text-white w-5 h-5" />
                    </div>
              </button>
            </div>
          </div>
        </div>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {popular.map((item,index) => (
                 <div key={item.id} class="p-4 md:w-1/3">
                 <div class="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
                   <img
                     class="lg:h-48 md:h-36 w-full object-cover object-center"
                     src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     alt="blog"
                   />
                   <div class="p-4">
                     
                     <h1 class="title-font text-2xl font-bold text-cyan-600 mb-2">
                       {item.price}
                     </h1>
                     <h1 class="title-font text-lg font-semibold text-black mb-3">
                       {item.name}
                     </h1>
                     <p class="leading-relaxed flex mb-3 text-gray-800">
                       <CiLocationOn size={28}  /> {item.location}
                     </p>
                     <div className="border border-gray-300" />
                     
                     <div className="flex justify-between pt-3"> 
                     <div className="flex text-black font-semibold">
                        <FaBed size={28} className="text-cyan-700 w-6 h-6" /> 
                        <p className="px-2 pt-1">{item.beds}</p>
                        <span className="sm:hidden lg:block pt-1">Beds</span> 
                     </div>
                     <div className="flex text-black font-semibold">
                        <FaBath size={28} className="text-cyan-700 w-6 h-6"  /> 
                        <p className="px-2 pt-1">{item.bath}</p>
                        <span className="sm:hidden lg:block pt-1">Bath</span> 

                     </div>
                     <div className="flex text-black font-semibold">
                        <FaRegObjectGroup size={28} className="text-cyan-700 w-6 h-6"  /> 
                        <p className="px-2 pt-1">{item.size}</p>
                        <span className="sm:hidden lg:block pt-1">sqrt</span> 

                     </div>

                     </div>
                   </div>
                 </div>
               </div>
            ))}
           
          </div>
        </div>
      </section>
    </>
  );
}
