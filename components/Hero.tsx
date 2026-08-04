import React from "react";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { AuroraBackground } from "./ui/aurora-background";

const Hero = () => {
  return (
    <div className="pb-20">
      <AuroraBackground className="w-screen h-screen overflow-hidden">
        <div className="flex justify-center relative my-10 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase text-3xl tracking-wide text-center text-blue-100 max-w-80"></h2>
            <TextGenerateEffect
              className="text-center text-[40px] md-text-5xl lg:text-7xl"
              words="Transforming your ideas into intelligent, seamless solutions"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-blue-100 mt-5">
              Hi, I&apos;m Ricky, a developer passionate about building robust
              backends with FastAPI, crafting smart solutions with machine
              learning, and delivering modern web experiences.
            </p>
            <Link href="#projects" className="mt-2">
              <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-yellow-100 text-black-100 font-medium hover:opacity-90 transition-opacity">
                View my work
                <FaLocationArrow />
              </button>
            </Link>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
};

export default Hero;
