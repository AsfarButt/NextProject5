"use client";
import React,{useRef, useEffect, useState} from "react";




export default function ArtificialScrollar(){
    const scrollar = useRef<HTMLDivElement | null>(null);
    const isScrolling = useRef(false);

    useEffect(() => {
        const element = scrollar.current;
        let activeindex = 0;
        if(!element){
            return ;
        }
        const childelements = element.querySelectorAll("div");
        console.log(childelements);

        const ScrollFunc = (e: WheelEvent) => {
            if(!isScrolling.current){
                isScrolling.current = true;
                setTimeout(() => {isScrolling.current=false},300);
              if(e.deltaY > 0){
                console.log("right scroll")
               activeindex ++;
            }
            else{
                console.log("left scroll");
                activeindex--;
            }   
            childelements[activeindex]?.scrollIntoView({behavior: 'smooth'})       
        }
        }

        element.addEventListener("wheel",ScrollFunc);

        return () => {element.removeEventListener("wheel",ScrollFunc)}
    },[])


    return(<div className="relative w-full h-full flex flex-row overflow-x-scroll scroll-smooth duration-1500" ref={scrollar}>
                <div className="flex-none relative w-150 h-full bg-cyan-600/40 brightness-80"></div>
                <div className="flex-none relative w-150 h-full bg-red-600/40 brightness-80"></div>
                <div className="flex-none relative w-150 h-full bg-yellow-600/40 brightness-80"></div>
                <div className="flex-none relative w-150 h-full bg-green-600/40 brightness-80"></div>
                <div className="flex-none relative w-150 h-full bg-emerald-600/40 brightness-80"></div>
                <div className="flex-none relative w-150 h-full bg-gray-600/40 brightness-80"></div>
                <div className="flex-none relative w-150 h-full bg-blue-600/40 brightness-80"></div>
                <div className="flex-none relative w-150 h-full bg-orange-600/40 brightness-80"></div>
                <div className="flex-none relative w-150 h-full bg-cyan-600/40 brightness-80"></div>
                <div className="flex-none relative w-150 h-full bg-cyan-600/40 brightness-80"></div>
    </div>)
}