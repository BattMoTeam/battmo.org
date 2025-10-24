"use client";

import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel";

interface VideoItem {
  title: string;
  description: string;
  src: string;
}

const videos: VideoItem[] = [
  {
    title: "Thermal Effects",
    description: "3D fully coupled thermal model in MATLAB.",
    src: `${process.env.NODE_ENV === "production" ? "" : ""}/tesla_roll.mp4`,
  },
  {
    title: "High performance",
    description: "Utilize the high performance interface in Julia for fast simulations.",
    src: `${process.env.NODE_ENV === "production" ? "" : ""}/battmo_jl_small.mp4`,
  },
  {
    title: "Interactive Web Interface",
    description: "See how BattMoApp lets you tweak parameters live.",
    src: `${process.env.NODE_ENV === "production" ? "" : ""}/battmo_app_video.mp4`,
  },
];

export default function VideoCarousel() {
  const plugin = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section className="w-full flex flex-col items-center bg-foreground/5 py-20 overflow-hidden">
      <h2 className="text-4xl font-bold text-primary mb-12 text-center">
        BattMo in Action
      </h2>

      <div className="relative w-full max-w-6xl flex items-center justify-center">
        {/* Carousel */}
        <Carousel
          opts={{
            align: "center",     // center the active slide
            loop: true,          // infinite looping
            dragFree: true,      // free scrolling
            containScroll: "keepSnaps",
          }}
        //   plugins={[plugin.current]}
          className="w-full relative"
        >
          {/* Slides */}
          <CarouselContent className="-ml-4">
            {videos.map((video, index) => (
              <CarouselItem
                key={index}
                className="basis-[70%] md:basis-[55%] lg:basis-[50%] flex justify-center px-2 transition-transform duration-300"
              >
                <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden flex flex-col w-full transform hover:scale-[1.02] transition-transform duration-300">
                  <video
                    src={video.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="w-full aspect-4/3 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-primary mb-2">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {video.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Arrows (must be inside <Carousel> for context) */}
          <CarouselPrevious className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 bg-card/80 hover:bg-card rounded-full p-3 shadow-lg hidden md:flex items-center justify-center text-2xl cursor-pointer">
            ◀
          </CarouselPrevious>
          <CarouselNext className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 bg-card/80 hover:bg-card rounded-full p-3 shadow-lg hidden md:flex items-center justify-center text-2xl cursor-pointer">
            ▶
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}
