import { solutions } from "../data/solutionsData";
import { HiArrowUp } from "react-icons/hi";
export default function Solutions() {
  return (
    <>
      <section class="text-white  body-font">
        <div class="container rounded-lg my-20 px-5 py-24 mx-auto bg-neutral-800">
          <div class="flex flex-wrap -m-4">
            {solutions.map((item, index) => (
              <div class="p-4 md:w-1/3 relative ">
                <div class="h-full bg-neutral-700  border-opacity-60 rounded-lg overflow-hidden">
                  <div class="p-4 ">
                    <h1 class="title-font text-lg font-medium ">
                      {item.title}
                    </h1>
                    <p class="leading-relaxed  ">{item.description}</p>
                  </div>
                  <div className="bg-neutral-500 h-3 mx-8 rounded-t-lg" />
                  <div className="bg-neutral-600 h-4  mx-4 rounded-t-lg" />
                  <img
                    class="lg:h-48 md:h-36 rounded-xl w-full object-cover object-center "
                    src={item.img}
                    alt="blog"
                  />
                  <div class="absolute rounded-3xl bottom-0 right-0 h-28 w-24 bg-neutral-800 transform rotate-75 rounded-tl-full flex items-center justify-center">
                    <div class="transform rotate-45 rounded-full p-5 ml-3 mt-3 bg-neutral-600">
                      <HiArrowUp className="text-white w-8 h-8" />
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
