"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
// import { FlipWords } from "./ui/flip-words";
// import { FlipWordsDemo } from "./FlipWord";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
        
      <PinContainer
        title="/supervisorsolutions.com"
        href="https://supervisor-solution-comapany-format.vercel.app/coursesPages"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
           Supervisor Solutions
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            JavaScript, TypeScript, 
            Redux, Node.js, Express.js, Mongodb, Axios
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
      <PinContainer
        title="/teachertoday.com"
        href="https://teachertoday.org"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Teacher Today
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
            JavaScript, TypeScript,Tailwindcss, Material UI,
            Redux, Node.js, Express.js, No-Sql(Mongodb), SWR, Culinary for storage.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          <img />
        </div>
      </PinContainer>
    </div>
   
  );
}
