"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";
import libraryImg from "../images/libraryBooks.png"
import supervisor from "../images/supervisorsolutions.png"
import teacherToday from "../images/teacherToday.png"
// import { FlipWords } from "./ui/flip-words";
// import { FlipWordsDemo } from "./FlipWord";

export function AnimatedPinDemo() {
  return (
    <div>
      <h1 className="  text-4xl font-bold text-center animate-fade-in pt-8  ">Projects Showcase</h1>
      {/* <h1 className="pt-8  text-4xl font-bold text-blue-500 hover:text-red-500 transition-colors duration-500">
        Projects Showcase
      </h1> */}
      <div className="h-[30rem] w-full flex items-center justify-center ">
        <PinContainer
          title="/supervisorsolutions.com"
          href="https://supervisor-solution-comapany-format.vercel.app/coursesPages"
        >
          <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Supervisor Solutions
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-white ">
                JavaScript, TypeScript, Redux, Node.js, Express.js, Mongodb,
                Axios
              </span>
            </div>
            <div className="p-2">
              <Image 
              
               src={supervisor}
               alt="My Image" 
               width={300} 
               height={300} 
              />
            </div>
            {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
          </div>
        </PinContainer>
        <PinContainer
          title="/teacherstoday.org"
          href="https://teacherstoday.org/"
        >
          <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Teacher Today
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-white">
                JavaScript, TypeScript,Tailwindcss, Material UI, Redux, Node.js,
                Express.js, No-Sql(Mongodb), SWR
              </span>
            </div>
            <div className="p-2">
              <Image 
              
               src={teacherToday}
               alt="My Image" 
               width={300} 
               height={300} 
              />
            </div>
            {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
            <img />
          </div>
        </PinContainer>
        <PinContainer
          title="/librarybookshelf.org"
          href="https://library-book-shelf.vercel.app/"
        >
          <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
              Library Books Self
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-white ">
                JavaScript, TypeScript,Tailwindcss, Redix UI Contextapi Node.js,
                Nest.js, postgreSQL, SWR, Socket.io
              </span>
            </div>
            <div className="p-2">
              <Image 
              
               src={libraryImg}
               alt="My Image" 
               width={300} 
               height={200} 
              />
            </div>
            {/* <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" /> */}
            <img />
          </div>
        </PinContainer>
        {/* <PinContainer
        title="/teacherstoday.org"
        href="https://teacherstoday.org/"
      >
        <div className="flex basis-full flex-col p-2 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
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
      </PinContainer> */}
      </div>
    </div>
  );
}
