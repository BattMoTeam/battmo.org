"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";



const collageWords = [
  // Top-Left
  { text: "Lithium-ion",              top: "10%", left: "10%", color: "text-[color:var(--primary)]/80", rotate: -7 },
  { text: "Simulation",               top: "25%", left: "5%", color: "text-[color:var(--footer-primary)]/90", rotate: 9 },
  { text: "Python",                   top: "15%", left: "20%", color: "text-[color:var(--primary)]/65", rotate: -8 },
  { text: "Coupled Thermal Model",    top: "35%", left: "15%", color: "text-[color:var(--muted-foreground)]/75", rotate: -6 },
  { text: "Web Application",          top: "45%", left: "10%", color: "text-[color:var(--muted-foreground)]/85", rotate: 4 },

  // Top-Right
  { text: "Open Source",              top: "10%", left: "70%", color: "text-[color:var(--accent-foreground)]/70", rotate: -5 },
  { text: "MATLAB",                   top: "35%", left: "50%", color: "text-[color:var(--muted-foreground)]/85", rotate: 6 },
  { text: "Interactive 3D Plotting", top: "30%", left: "70%", color: "text-[color:var(--muted-foreground)]/80", rotate: 6 },
  { text: "Sodium-ion",               top: "10%", left: "40%", color: "text-[color:var(--primary)]/75", rotate: -9 },
  { text: "Continuum Modeling",       top: "25%", left: "55%", color: "text-[color:var(--footer-primary)]/70", rotate: 8 },

  // Bottom-Left
  { text: "Julia",                    bottom: "35%", left: "90%", color: "text-[color:var(--footer-primary)]/80", rotate: 7 },
  { text: "Electrochemistry",         bottom: "15%", left: "10%", color: "text-[color:var(--muted-foreground)]/90", rotate: 4 },
  { text: "Optimization",             bottom: "45%", left: "25%", color: "text-[color:var(--muted-foreground)]/80", rotate: -7 },
  { text: "P2D",                      bottom: "25%", left: "20%", color: "text-[color:var(--muted-foreground)]/75", rotate: 7 },
  { text: "Finite Volume Method",     bottom: "35%", left: "7%", color: "text-[color:var(--primary)]/70", rotate: 10 },

  // Bottom-Right
  { text: "Battery Cell",             bottom: "10%", left: "75%", color: "text-[color:var(--primary)]/75", rotate: -10 },
  { text: "Cell Library",             bottom: "20%", left: "35%", color: "text-[color:var(--footer-primary)]/85", rotate: -5 },
  { text: "Calibration",              bottom: "25%", left: "70%", color: "text-[color:var(--accent-foreground)]/80", rotate: 6 },
  { text: "SEI Modeling",             bottom: "30%", left: "50%", color: "text-[color:var(--muted-foreground)]/80", rotate: 5 },
  { text: "P3D",                      bottom: "50%", left: "80%", color: "text-[color:var(--muted-foreground)]/80", rotate: -4 },
  { text: "P4D",                      bottom: "35%", left: "65%", color: "text-[color:var(--muted-foreground)]/85", rotate: 5 },
  { text: "Plotting Dashboards",      bottom: "10%", left: "50%", color: "text-[color:var(--muted-foreground)]/85", rotate: -5 },
];


const Hero = () => {
  const heroCardsRef = useRef<HTMLDivElement>(null);

  const scrollToCards = () => {
    heroCardsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section className="relative w-full h-[calc(100vh-6rem)] bg-background overflow-hidden flex flex-col items-center justify-center text-center">
        {/* --- Collage Layer --- */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {collageWords.map((word, index) => (
            <motion.span
              key={index}
              className={`absolute text-xl sm:text-2xl md:text-3xl font-semibold whitespace-nowrap ${word.color}`}
              style={{
                top: word.top,
                left: word.left,
                bottom: word.bottom,
                transform: `rotate(${word.rotate}deg)`,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              {word.text}
            </motion.span>
          ))}
        </div>

       {/* --- Title and Description --- */}
        <motion.div
          className="relative z-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-7xl md:text-8xl font-bold text-primary mb-4 drop-shadow-2xl">
            BattMo
          </h1>
          {/* <p className="text-lg md:text-xl text-muted-foreground mb-6">
            A toolbox for continuum modeling of electrochemical devices —
            from MATLAB to Python to Julia.
          </p> */}

          {/* --- Learn More Button --- */}
          <button
            onClick={scrollToCards}
            className="mt-8 flex flex-col items-center gap-2 text-sm md:text-base font-medium text-primary hover:text-accent transition-colors"
          >
            Learn More
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </motion.div>

        {/* --- Gradient Overlay --- */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/90 pointer-events-none" />
      </section>

      {/* --- HeroCards Section --- */}
      <div ref={heroCardsRef}>
        {/* This div acts as the scroll target */}
      </div>
    </>
  );
};

export default Hero;