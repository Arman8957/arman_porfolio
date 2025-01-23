import { FloatingDockDemo } from "@/components/Approach";
import { CoverDemo } from "@/components/CoverDemo";
import { AnimatedPinDemo } from "@/components/Experience";
import { BentoGridThirdDemo } from "@/components/Grid";
import { BackgroundLinesDemo } from "@/components/Hero";
import { SpotlightPreview } from "@/components/Spotlight";

// import { FlipWords } from "@/components/ui/flip-words";
// import { HeroParallaxDemo } from "@/components/ProjectShow";
// import { BackgroundLines } from "@/components/ui/background-lines";
// import { HeroParallax } from "@/components/ui/hero-parallax";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main className="relative  flex justify-center items-center flex-col overflow-hidden">

        <BackgroundLinesDemo />
        <CoverDemo />
        <FloatingDockDemo />
        {/* <FlipWordsDemo /> */}
        <div >
          <div className="flex justify-center items-center font-bold text-5xl my-5 ">
            <h1 >You can understand <span className="text-sky-400"> about <span className="text-red-600"> me</span></span></h1>
          </div>
          <BentoGridThirdDemo />
        </div>

        <div className="flex justify-between items-center">
          <AnimatedPinDemo />
        </div>
        <div>
         {/* <HeroParallaxDemo /> */}
      </div>
      {/* <FlipWords /> */}
      <SpotlightPreview />
      </main>
     
    </div>

  );
}
