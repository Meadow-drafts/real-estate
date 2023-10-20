import { HiArrowUp, HiMinus } from "react-icons/hi";
import { blogs } from "../data/blogData";
import { CiLocationOn } from "react-icons/ci";
import { FaBath, FaBed, FaUserTie, FaCalendarWeek } from "react-icons/fa";


export default function Blog(){
    return(
        <>
         <section class="text-black  body-font">
        <div class="container rounded-lg mt-20 px-5 py-24 mx-auto ">
          <p className="flex text-cyan-600 pb-5">
            <HiMinus className="mt-1 mx-2 "/>
           Blog and News
          </p>
          <div className="flex justify-between mb-3">
        <h1 className="font-bold text-4xl">Our Lates Blog & News</h1>
            <div className="flex w-1/2">
              <HiMinus size={68} className="transform rotate-90 text-cyan-600 -mt-2 -mr-3"/>
              <p>We could find you any property in a residential area, We could find you any property in an urban area</p>
            </div>
          </div>

          <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-wrap -m-4">
            {blogs.map((item,index) => (
                 <div class="p-4 md:w-1/3">
                 <div class="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
                   <img
                     class="lg:h-48 md:h-36 w-full object-cover object-center"
                     src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     alt="blog"
                   />
                   <div class="p-4">
                     
                     <h1 class="title-font text-md font-semibold text-gray-600 mb-2">
                       {item.title}
                     </h1>
                     <h1 class="title-font text-xl font-semibold text-black mb-3">
                       {item.headline}
                     </h1>
                     <div className="flex justify-between pt-3"> 
                     <div className="flex text-black font-semibold">
                        <FaUserTie size={28} className="text-cyan-700 w-6 h-6" /> 
                        <p className="px-2 pt-1">{item.author}</p>
                     </div>
                     <div className="flex text-black font-semibold">
                        <FaCalendarWeek size={28} className="text-cyan-700 w-6 h-6"  /> 
                        <p className="px-2 pt-1">{item.date}</p>

                     </div>

                     </div>
                   </div>
                 </div>
               </div>
            ))}
           
          </div>
        </div>
        </div>
      </section>
        </>
    )
}