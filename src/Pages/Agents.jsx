import Navbar from "../Layouts/Navbar"
import Footer from "../Layouts/Footer"
import { agents } from "../data/agentsData"
import { HiArrowUp, HiMinus, HiStar } from "react-icons/hi";



export default function Agents(){
    return(
        <>
        <Navbar/>
        <h1>Agents</h1>

        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap justify-center -m-4">
            {agents.map((item,index) => (
                 <div key={item.id} class="p-4 lg:p-24 md:p-10 lg:-m-20 m-0 md:w-1/3">
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
          <div class="flex flex-wrap justify-center -m-4">
            {agents.map((item,index) => (
                 <div key={item.id} class="p-4 lg:p-24 md:p-10 lg:-m-20 m-0 md:w-1/3">
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
        <Footer/>
        </>
    )
}