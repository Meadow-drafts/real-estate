import { HiArrowUp, HiMinus, HiStar } from "react-icons/hi";
import { FaFacebookSquare, FaLinkedin , } from "react-icons/fa";
import {  FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <section class="text-white mt-36  body-font">
      <footer class="bg-neutral-800 absoluute  text-white body-font">
        {/* subbscription */}
      <div class="relative bottom-36  container rounded-lg  px-5 py-28 mx-auto bg-cyan-600 ">
          <p className="flex justify-center text-lg font-semibold  pb-5">
            <HiMinus className="mt-1 mx-2 " />
            Our Newsletter
          </p>
          <div className="flex flex-col justify-center items-center mb-10">
            <h1 className="font-bold text-center text-4xl">
              Subscribe to Our Newsletter to Get <br /> Updates to Our Latest
              News{" "}
            </h1>
            <div className="mt-3">
                <input className="p-4 rounded-lg mx-2" type='text' placeholder="Enter Email Address" />
                <button className=" bg-neutral-600 p-4 text-white rounded-lg" >Subscribe</button>
            </div>
          </div>
         
        </div>
        {/* end of subscribtion */}
        <div class="container px-5 py-2 mx-auto">
            <div class="flex flex-wrap md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class="font-medium  text-3xl mb-3">Real Estate</h2>
                
                <p class="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack Bitters chicharrones fanny pack Bitters chicharrones fanny 
                </p>
                <div className="flex ">
                    <FaFacebookSquare className="m-2 w-6 h-6" />
                    <FaLinkedin className="m-2 w-6 h-6" />
                    <FaXTwitter className="m-2 w-6 h-6" />
                    <FaInstagram className="m-2 w-6 h-6" />
                </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class=" font-medium  tracking-widest text-lg mb-3">Company</h2>
                <nav class="list-none mb-10 font-normal text-gray-400 ">
                <li className="py-2">
                    <a class=" hover:text-gray-500">Home</a>
                </li>
                <li className="py-2">
                    <a class=" hover:text-gray-500">About</a>
                </li>
                <li className="py-2">
                    <a class=" hover:text-gray-500">Rentals</a>
                </li>
                <li className="py-2">
                    <a class=" hover:text-gray-500">Testimonials</a>
                </li>
                <li className="py-2"> 
                    <a class=" hover:text-gray-500">Contact</a>
                </li>
                </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class=" font-medium  tracking-widest text-lg mb-3">Contact</h2>
                <nav class="list-none mb-10 font-normal text-gray-400 ">
                <li className="py-2">
                    <a class=" hover:text-gray-500">+237 698754123</a>
                </li>
                <li className="py-2">
                    <a class=" hover:text-gray-500">www.example.com</a>
                </li>
                <li className="py-2">
                    <a class=" hover:text-gray-500">example@gmail.com</a>
                </li>
                <li className="py-2">
                    <a class=" hover:text-gray-500">56, Rajar Golli, <br/> Amborkhana, Sylhet</a>
                </li>
                </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 class=" font-medium  tracking-widest text-lg mb-3">Support</h2>
                <nav class="list-none mb-10 font-normal text-gray-400 ">
                <li className="py-2">
                    <a class=" hover:text-gray-500">My Account</a>
                </li>
                <li className="py-2">
                    <a class=" hover:text-gray-500">Payments</a>
                </li>
                <li className="py-2">
                    <a class=" hover:text-gray-500">Others</a>
                </li>
                </nav>
            </div>
           
            </div>
        </div>        

        <div class="border-t border-neutral-500 mx-16" />

        <div class="text-gray-400">
            <div class="container px-5 py-12 mx-auto flex items-center sm:flex-row flex-col">
            <a class="flex title-font font-medium items-center md:justify-start justify-center ">               
                <span class="text-xl">Copyright</span>
            </a>
            <p class="text-sm sm:ml-6 sm:mt-0 mt-4">© 2023 Real Estate.
                <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="ml-1" target="_blank">All Rights Reserved.</a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
               User Terms & Conditions | Privacy Policy
            </span>
            </div>
        </div>

  
</footer>
        
       
      </section>
    </>
  );
}
