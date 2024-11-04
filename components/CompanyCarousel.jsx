"use client";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import companies from "@/data/companies";

function CompanyCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="py-10"
    >
      <CarouselContent className="flex gap-4 items-center">
        {companies.map(({ name, id, path }) => (
          <CarouselItem key={id} className="basis-1/2 lg:basis-1/4">
            <Image src={path} alt={name} height={60} width={100} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default CompanyCarousel;
