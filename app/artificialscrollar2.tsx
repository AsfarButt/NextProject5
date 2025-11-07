
"use client";
import React,{useRef, useEffect, useState} from "react";




export default function ArtificialScrollar2(){
    const scrollar = useRef<HTMLDivElement | null>(null);
    const isScrolling = useRef(false);
    const [scrollposition, setscrollposition] = useState(0);
    const activeindex = useRef(0);

    useEffect(() => {
        const element = scrollar.current;
        if(!element){
            return ;
        }
        const childelements = element.querySelectorAll("div");

        const ScrollFunc = (e: WheelEvent) => {
            if(isScrolling.current){
                return ;
            }
            isScrolling.current = true;
            setTimeout(() => {isScrolling.current = false},500);
            console.log("scroll func should work");
            if(e.deltaY < 0 && activeindex.current > 0){
                activeindex.current--;
                console.log("right scroll");
                setscrollposition((prev) => prev+600);
            }
            else if(e.deltaY > 0 && activeindex.current < childelements.length-1){
                activeindex.current++;
                console.log(childelements.length);
                console.log(scrollposition/600);
                console.log("left scroll");
                setscrollposition((prev) => prev-600);
            }
            childelements.forEach((element) => {element.classList.replace("scale-100","scale-0");
            childelements[activeindex.current].classList.replace("scale-0","scale-100")})
            console.log("Active index: ",activeindex.current);
        }
        element.addEventListener("wheel",ScrollFunc);

        return () => element.removeEventListener("wheel",ScrollFunc);
    },[])


    return(<div className="relative w-full h-full overflow-hidden">
        <div className="relative w-full h-full flex flex-row transition-transform duration-600" style={{transform: `translateX(${scrollposition}px)`}} ref={scrollar}>
                <div className="flex-none relative w-150 h-full text-8xl scale-100 transition-all duration-600 ease-out text-white text-center bg-cyan-600/40 brightness-80">Hoddies1</div>
                <div className="flex-none relative w-150 h-full text-8xl scale-100 transition-all duration-600 ease-out text-white text-center bg-red-600/40 brightness-80">Hoddies2</div>
                <div className="flex-none relative w-150 h-full text-8xl scale-100 transition-all duration-600 ease-out text-white text-center bg-yellow-600/40 brightness-80">Hoddies3</div>
                <div className="flex-none relative w-150 h-full text-8xl scale-100 transition-all duration-600 ease-out text-white text-center bg-green-600/40 brightness-80">Hoddies4</div>
                <div className="flex-none relative w-150 h-full text-8xl scale-100 transition-all duration-600 ease-out text-white text-center bg-emerald-600/40 brightness-80">Hoddies5</div>
                <div className="flex-none relative w-150 h-full text-8xl scale-100 transition-all duration-600 ease-out text-white text-center bg-gray-600/40 brightness-80">Hoddies6</div>
                <div className="flex-none relative w-150 h-full text-8xl scale-100 transition-all duration-600 ease-out text-white text-center bg-blue-600/40 brightness-80">Hoddies7</div>
                <div className="flex-none relative w-150 h-full text-8xl scale-100 transition-all duration-600 ease-out text-white text-center bg-orange-600/40 brightness-80">Hoddies8</div>
                <div className="flex-none relative w-150 h-full text-8xl scale-100 transition-all duration-600 ease-out text-white text-center bg-cyan-600/40 brightness-80">Hoddies9</div>
                <div className="flex-none relative w-150 h-full text-8xl scale-100 transition-all duration-600 ease-out text-white text-center bg-cyan-600/40 brightness-80">Hoddies10</div>
    </div>
    </div>)
}