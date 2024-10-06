import React from "react";
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
              words="Transforming Your Ideas into Seamless Desgin"
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-blue-100 mt-5">
              Hi, I&apos;m Ricky, a Full stack developer.
            </p>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
};

export default Hero;
