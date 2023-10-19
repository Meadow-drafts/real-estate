import { process } from "../data/proccessData";
import { useState } from "react";
import { HiArrowUp, HiMinus } from "react-icons/hi";


export default function Process() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <section class="text-gray-600 mx-auto body-font">
        <div className="flex flex-col justify-center items-center">
        <p className="flex text-cyan-600 pb-5 text-lg font-semibold">
            <HiMinus className="mt-1  "/>
           Process
          </p>
          <h1 className="font-bold text-4xl text-black">Navigating the <span className="font-normal italic">Real Estate Journey </span> </h1>
          <p>We could find you any property in a residential area, We could find you any property in an urban area</p>

        </div>
  
        <div class="container px-5 py-24 mx-auto  flex flex-wrap">
       
          <div class="w-1/2 mb-10 lg:mb-0 mx-auto rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center "
              src="https://dummyimage.com/460x500"
            />
          </div>
          {/* right div */}

          <div class="  flex flex-col flex-wrap  py-6 -mb-10 lg:w-1/2  text-left">
            {process.map((item, index) => (
              <div
                className={`p-2 w-full relative 
                 
                `}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                key={item.id}
              >
                <div
                  className={`h-full flex items-center border-gray-200 border p-4 rounded-lg ${
                    hoveredIndex === index ? "bg-neutral-800 text-white" : ""
                  }`}
                >
                  {/* icon  */}
                  <div className={`bg-white rounded-full w-12 h-12 mr-2 ${hoveredIndex !== index ? "hidden" : ""}`}>
                    {item.icon}
                  </div>
                  <div class="flex-grow">
                    <h2 class={`pr-5 ${hoveredIndex === index ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h2>
                    <p className={`pr-5 ${hoveredIndex === index ? 'text-gray-400' : 'text-gray-500'}`}>
                        {item.description} </p>
                  </div>
                </div>
                {/* icon 2 */}
                <div
                  class={`w-10 h-10 absolute right-0 top-0  mt-10 -mr-2 rounded-full ${
                    hoveredIndex === index ? "hidden" : ""
                  }`}
                >
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
