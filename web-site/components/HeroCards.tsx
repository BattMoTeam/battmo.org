"use client";
import React from "react";
import CardButton from "./CardButton";
import VideoCarousel from "./VideoCarousel";

const imageURL =
  "https://raw.githubusercontent.com/BattMoTeam/visual-identity/1bc87b07605d77fb3faa788c82f06ec2735ed31f/logos/battmo_logo_thumb.png";

const cards = [
  {
    title: "BattMo (MATLAB)",
    description: "Original MATLAB interface",
    imgSrc: imageURL,
    href: "https://github.com/BattMoTeam/BattMo",
    githubLink: "https://github.com/BattMoTeam/BattMo",
    docLink: "https://battmoteam.github.io/BattMo/",
  },
  {
    title: "BattMo.jl",
    description: "High-performance Julia interface",
    imgSrc: imageURL,
    href: "https://github.com/BattMoTeam/BattMo.jl",
    githubLink: "https://github.com/BattMoTeam/BattMo.jl",
    docLink: "https://battmoteam.github.io/BattMo.jl/dev/",
  },
  {
    title: "PyBattMo",
    description: "Python wrapper around BattMo.jl",
    imgSrc: imageURL,
    href: "https://github.com/BattMoTeam/PyBattMo",
    githubLink: "https://github.com/BattMoTeam/PyBattMo",
    docLink:
      "https://battmoteam.github.io/BattMo.jl/dev/manuals/pybattmo/installation",
  },
  {
    title: "BattMoApp",
    description: "Interactive web app",
    imgSrc: imageURL,
    href: "https://app.batterymodel.com/",
    githubLink: "https://github.com/BattMoTeam/BattMoApp",
    docLink: "https://battmoteam.github.io/BattMo/app.html",
  },
];

export default function HeroCards() {
  return (
    <section className="relative w-full flex flex-col items-center pt-20 gap-32">

      {/* --- Row 1: Description + Figure --- */}
      <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-8 max-w-7xl mx-auto">
        {/* Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What is BattMo?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            BattMo is a versatile, and open-sourced, toolbox for modeling, and optimizing electrochemical devices.
            The initial development features a pseudo X-dimensional (PXD) framework for the Doyle-Fuller-Newman model of lithium-ion battery cells. 
            However, the development plan for BattMo includes extensions to other battery chemistries (e.g. metal-air) and eventually hydrogen systems (i.e. electrolyzers and fuel cells). 
            It provides interfaces for MATLAB, Python, and Julia, and includes an interactive web app to explore 
            battery behavior, continuum modeling, and design optimization.
          </p>
        </div>

        {/* Figure */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={`${process.env.NODE_ENV === "production" ? "/battmo.org" : ""}/I_wish_i_had_a_virtual_cell.png`}
            alt="BattMo Overview"
            className="w-80 md:w-[520px] rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* --- Row 2: Video Carousel --- */}
      <div className="w-full flex flex-col items-center">
      <VideoCarousel />
      </div>
        

      {/* --- Row 3: BattMo Family Cards --- */}
      <div className="w-full flex flex-col items-center pb-30">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">
          BattMo Family
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
          {cards.map((card) => (
            <CardButton
              key={card.title}
              title={card.title}
              description={card.description}
              imgSrc={card.imgSrc}
              href={card.href}
              githubLink={card.githubLink}
              docLink={card.docLink}
            />
          ))}
        </div>
      </div>

    </section>
  );
}
