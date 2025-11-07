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
              if(e.deltaY > 0 && childelements[activeindex+1]){
                console.log("right scroll")
               activeindex ++;
            }
            else if(e.deltaY < 0 && childelements[activeindex-1]){
                console.log("left scroll");
                activeindex--;
            }   
            childelements[activeindex]?.scrollIntoView({behavior: 'smooth'})       
        console.log(activeindex);}
        }

        element.addEventListener("wheel",ScrollFunc);

        return () => {element.removeEventListener("wheel",ScrollFunc)}
    },[])


    return(<div className="relative w-full h-full flex flex-row overflow-x-scroll scroll-smooth duration-1500" ref={scrollar}>
                <div className="flex-none relative w-150 h-full text-8xl text-white text-center bg-cyan-600/40 brightness-80">Hoddies1</div>
                <div className="flex-none relative w-150 h-full text-8xl text-white text-center bg-red-600/40 brightness-80">Hoddies2</div>
                <div className="flex-none relative w-150 h-full text-8xl text-white text-center bg-yellow-600/40 brightness-80">Hoddies3</div>
                <div className="flex-none relative w-150 h-full text-8xl text-white text-center bg-green-600/40 brightness-80">Hoddies4</div>
                <div className="flex-none relative w-150 h-full text-8xl text-white text-center bg-emerald-600/40 brightness-80">Hoddies5</div>
                <div className="flex-none relative w-150 h-full text-8xl text-white text-center bg-gray-600/40 brightness-80">Hoddies6</div>
                <div className="flex-none relative w-150 h-full text-8xl text-white text-center bg-blue-600/40 brightness-80">Hoddies7</div>
                <div className="flex-none relative w-150 h-full text-8xl text-white text-center bg-orange-600/40 brightness-80">Hoddies8</div>
                <div className="flex-none relative w-150 h-full text-8xl text-white text-center bg-cyan-600/40 brightness-80">Hoddies9</div>
                <div className="flex-none relative w-150 h-full text-8xl text-white text-center bg-cyan-600/40 brightness-80">Hoddies10</div>
    </div>)
}