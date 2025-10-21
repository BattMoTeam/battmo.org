"use client";
import React from "react";
import CardButton from "./CardButton";

const imageURL = "https://raw.githubusercontent.com/BattMoTeam/visual-identity/1bc87b07605d77fb3faa788c82f06ec2735ed31f/logos/battmo_logo_thumb.png";

const HeroCards = () => {
  const cards = [
    {
      title: "BattMo (MATLAB)",
      description: "Original MATLAB interface",
      imgSrc: "/tesla_roll.mp4",
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
      docLink: "https://battmoteam.github.io/BattMo.jl/dev/manuals/pybattmo/installation",
    },
    {
      title: "BattMoApp",
      description: "Interactive web app",
      imgSrc: "/BattMoApp.png",
      href: "https://app.batterymodel.com/",
      githubLink: "https://github.com/BattMoTeam/BattMoApp",
      docLink: "https://battmoteam.github.io/BattMo/app.html",
    },
  ];

  return (
    <section className="relative w-screen min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-5xl font-bold text-primary mb-12 text-center">BattMo Family</h1>

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
    </section>
  );
};

export default HeroCards;
