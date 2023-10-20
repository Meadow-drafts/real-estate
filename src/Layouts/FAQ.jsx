import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { FAQS } from "../data/faqData";
import { HiArrowUp, HiMinus } from "react-icons/hi";


export default function FAQ() {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-5 mx-auto flex flex-wrap">
          <div class="flex flex-wrap w-full">
            <div class="lg:w-1/2 md:w-1/2 md:pr-10 md:py-6">
              <Accordion>
                {FAQS.map((item, index) => (
                  <AccordionItem key={item.id}>
                    <h2>
                      <AccordionButton p={6}>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          color="black"
                          fontWeight="semibold"
                        >
                          {item.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div >

            <div  class="lg:w-1/2 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12">

            <p className="flex text-cyan-600 pb-3">
            <HiMinus className="mt-1 mx-2 "/>
           FAQ
          </p>
            <h1 className="font-bold text-3xl text-black">Questions? Look here.</h1>

            
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
