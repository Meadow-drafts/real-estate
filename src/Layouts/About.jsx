import { HiArrowUp, HiMinus } from "react-icons/hi";
import ReactPlayer from 'react-player';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

export default function About() {
  return (
    <>
      <section class="text-gray-600 py-20 body-font">
      <div className="flex flex-col justify-center items-center">
        <p className="flex text-cyan-600 pb-5 text-xl font-semibold">
            <HiMinus className="mt-1  "/>
           Why Choose Us
          </p>
          <h1 className="font-bold text-4xl text-black">Your Ideal Choice: Unveiling <br/> the <span className="font-normal italic">Benefits of Our Services </span> </h1>
        </div>
       <div className=" bg-gray-200 rounded-xl " >
       {/* <Video autoPlay loop muted 
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster="http://sourceposter.jpg"
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/webm" />
        </Video> */}
        </div>
     
        <div class="container flex flex-wrap px-5 py-24 mx-auto justify-between items-center">
          <div class="md:w-1/2 md:pr-12 md:py-8  md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              We are full prepared to turn your dreams into reality.
            </h1>
            <p class="leading-relaxed text-base">
              Locavore cardigan small batch roof party blue bottle blog meggings
              sartorial jean shorts kickstarter migas sriracha church-key synth
              succulents.
            </p>
          </div>
          <div class="flex flex-wrap px-16 -m-4 text-center">
            <div class="p-4 w-1/3 border-r border-gray-300">
              <h2 class="title-font font-medium text-5xl text-cyan-600">
                2.7K
              </h2>
              <p class="leading-relaxed">Properties Sold</p>
            </div>
            <div class="p-4 w-1/3 border-r border-gray-300">
              <h2 class="title-font font-medium text-5xl text-cyan-600">
                1.8K
              </h2>
              <p class="leading-relaxed">Happy customers</p>
            </div>
            <div class="p-4 w-1/3  ">
              <h2 class="title-font font-medium text-5xl text-cyan-600">
                4.9
              </h2>
              <p class="leading-relaxed">Review Ratings</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
