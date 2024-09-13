import AccordionComponent from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import CarouselComponent from "@/components/ui/carousel";
import React from "react";

const page = () => {
  return (
    <>
      <Button className="mt-5 ml-6">Button</Button>
      <AccordionComponent />
      <div className="w-[800px] h-[400px]">
        <CarouselComponent />
      </div>
    </>
  );
};

export default page;
