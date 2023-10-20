import { HiArrowUp, HiMinus, HiStar } from "react-icons/hi";
import { Agents } from "../data/agentsData";
import {Houses} from '../data/housesData'
import Slider from "react-slick";


export default function Followus(){

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "200px",
        slidesToShow: 2.5,
        autoplay:true,
        autoplaySpeed:2000,
        cssEase:"linear",
        speed: 500,
      };
      
    return(
        <>
          <section class="text-white  w-full mb-20">
        <div class=" rounded-lg  py-14  ">
          <p className="flex justify-center text-lg font-semibold text-cyan-600 pb-5">
            <HiMinus className="mt-1 mx-2 "/>
            Our Solutions for
          </p>
          <div className="flex justify-center mb-10">
            <h1 className="font-bold text-black text-center text-4xl">Follow for Updates & <span className="font-normal italic"><br/>Exclusive Offers! </span> </h1>
          </div>
          <div class="container px-5 mx-auto">
          <div>
        <Slider {...settings}>
            {Houses.map((item,index) => (
                 <div key={item.id} class="p-4 md:w-1/3">
                 <div class="h-full border-8rounded-lg overflow-hidden">
                   <img
                     class="lg:h-48 rounded-lg md:h-36 w-full object-cover object-center"
                     src={item.img}
                     alt="blog"
                   />
                 </div>
               </div>
            ))}
        </Slider>
      </div>
          </div>
         
          </div>
          
      </section>
        </>
    )
}

{/* <div class="flex flex-row">
            {Houses.map((item,index) => (
                 <div key={item.id} class="p-4 md:w-1/3">
                 <div class="h-full border-8rounded-lg overflow-hidden">
                   <img
                     class="lg:h-48 rounded-lg md:h-36 w-full object-cover object-center"
                     src={item.img}
                     alt="blog"
                   />
                 </div>
               </div>
            ))}
           
          </div> */}