"use client";
import React,{useEffect, useRef} from "react";

export default function Logo(){

  const nike1 = useRef<HTMLDivElement | null>(null);
  const nike2 = useRef<HTMLDivElement | null>(null);
  const nike3 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
        setTimeout(() => {nike1.current?.classList.remove("translate-y-40","-translate-x-20","opacity-0");},120);
        setTimeout(() => {nike2.current?.classList.remove("translate-y-60","-translate-x-20","opacity-0");},250);
        setTimeout(() => {nike3.current?.classList.remove("translate-y-60","-translate-x-20","opacity-0");},400);
  },[])

    return(<div className="relative w-full h-full scale-x-110">
        <div className="absolute left-25 -top-15 w-160 h-120 mask-[url('/nikelogo.png')] scale-80 bg-black/40 bg-cover ease-out transition-all duration-1400 translate-y-40 -translate-x-20 opacity-0 bg-center mask-no-repeat rotate-5" ref={nike1}/>
        <div className="absolute left-23 top-8 w-160 h-120 mask-[url('/nikelogo.png')] scale-110 bg-black/40 mask-no-repeat bg-cover ease-out transition-all duration-800 translate-y-60 -translate-x-20 opacity-0 bg-center" ref={nike2}/>
        <div className="absolute left-25 top-38 w-200 h-120 mask-[url('/nikelogo.png')] scale-140 bg-black/40 mask-no-repeat bg-cover ease-out transition-all duration-800 translate-y-60 -translate-x-20 opacity-0 bg-center -rotate-5" ref={nike3}/>
    </div>)
}



//absolute w-[40%] max-w-120 h-10 top-12 left-[50%] translate-x-[-50%] rounded-full