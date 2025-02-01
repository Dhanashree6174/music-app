import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="md: h-[46rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md: py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="blue"
        />
        <h1 className="mt-32 text-4xl md:text-7xl font-bold bg-clip-text text-center text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        {/* bg-clip-text -> the background (like a gradient) is applied only to the text content instead of the entire element (like its container) --> used to create gradient text effects.
        text-transparent --> makes the text transparent so that the background applied becomes visible through text
        bg-gradient-to-b --> creates bg gradient, to-b specifies direction of gradient - graident moves from top to bottom
        from-neutral-50 --> sets starting color
        to-neutral-400 --> sets ending color of gradient
        All these classes altogether create a gradient text
        */}

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
      </div>
      <div className="mt-8">
        <Link href={"/courses"}>
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800" // border-slate class is used to set the border color based on the slate color palette provided by Tailwind (slate -> name of color palatte slate-no representing lightness/darkness of color)
          >
            Explore Courses
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
