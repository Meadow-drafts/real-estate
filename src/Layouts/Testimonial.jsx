import { useRef, useState } from "react";
import { solutions } from "../data/solutionsData";
import { HiArrowUp, HiMinus, HiStar } from "react-icons/hi";
import { ImQuotesLeft, ImArrowLeft2, ImArrowRight2 } from "react-icons/im";
import { Testimonials } from "../data/testimonialsData";
import Slider from "react-slick";

export default function Testimonial() {
  const [slider, setSlider] = useState(null);

  const next = () => {
    if (slider) {
      slider.slickNext();
    }
  };

  const previous = () => {
    if (slider) {
      slider.slickPrev();
    }
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <>
      <section class="text-white  body-font mb-20">
        <div class="container rounded-lg my-20 px-5 py-24 mx-auto bg-neutral-800">
          <p className="flex justify-center text-cyan-600 pb-5">
            <HiMinus className="mt-1 mx-2 " />
            Our Solutions for
          </p>
          <div className="flex justify-center mb-10">
            <h1 className="font-bold text-4xl">
              See What Our Lovely{" "}
              <span className="font-normal italic">
                <br />
                Customer Says About Us{" "}
              </span>{" "}
            </h1>
          </div>
          <div class="text-white body-font">
            <div class="container px-5 py-4 mx-auto">
              <div>
                <Slider ref={(sliderRef) => setSlider(sliderRef)} {...settings}>
                  {Testimonials.map((item, index) => (
                    <div key={item.id} class="p-4 w-1/2">
                      <div class="h-full bg-neutral-700 p-4 lg:p-20 lg:mx-8 mx-0 rounded">
                        <div className="flex mb-2">
                          <HiStar size={28} className="text-yellow-500" />
                          <HiStar size={28} className="text-yellow-500" />
                          <HiStar size={28} className="text-yellow-500" />
                          <HiStar size={28} className="text-yellow-500" />
                          <HiStar size={28} className="text-yellow-500" />
                          <HiStar size={28} className="text-yellow-500" />
                          <p className="mx-2 font-semibold text-lg">
                            {item.rating}
                          </p>
                        </div>
                        <p class="leading-relaxed mb-6 text-gray-300">
                          Synth chartreuse iPhone lomo cray raw denim brunch
                          everyday carry neutra before they sold out fixie 90's
                          microdosing. Tacos pinterest fanny pack venmo,
                          post-ironic heirloom try-hard pabst authentic iceland.
                        </p>
                        <div className="flex justify-between">
                          <a class="inline-flex  items-center">
                            <img
                              alt="testimonial"
                              src="https://dummyimage.com/106x106"
                              class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                            />
                            <span class="flex-grow flex flex-col pl-4">
                              <span class="title-font font-medium ">
                                Holden Caulfield
                              </span>
                              <span class="text-gray-300 text-sm">
                                CEO, Insightlancer
                              </span>
                            </span>
                          </a>
                          <ImQuotesLeft
                            size={58}
                            className="text-gray-500 right-0"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="flex justify-center">
                  <div className="bg-neutral-500 rounded-full p-3">
                    <ImArrowLeft2 onClick={previous} className="w-6 h-6" />
                  </div>
                  <div className="bg-cyan-500 rounded-full p-3 mx-2">
                    <ImArrowRight2 onClick={next} className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
