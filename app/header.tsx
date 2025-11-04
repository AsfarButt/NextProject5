"use client";
import React,{useEffect, useRef, useState} from "react";


export default function Header(){
    const container = useRef<HTMLDivElement | null>(null);
    const [activeindex, setactiveindex] = useState(0);

    useEffect(() => {
        setTimeout(() => {container.current?.classList.replace("scale-x-0","scale-x-112");
                        container.current?.classList.replace("scale-y-50","scale-y-105");
            setTimeout(() => {container.current?.classList.remove("scale-x-112","scale-y-105");
            },850);
        },200);
    },[])

    return(<div className="relative w-full h-full scale-x-0 scale-y-50 transition-all duration-800 bg-white/30 backdrop-blur-sm rounded-full flex flex-row justify-evenly items-center text-white/80 overflow-hidden" ref={container}>
        <h1 className={`flex-auto w-fit text-center hover:${(activeindex!=0)?"bg-white/40 text-white/70":""} px-4 py-3 rounded-full text-[11px] ${(activeindex==0)?"bg-white text-black":null}`} onClick={() => setactiveindex(0)}>Hoodies</h1>
        <h1 className={`flex-auto w-fit text-center hover:${(activeindex!=1)?"bg-white/40 text-white/70":""} px-4 py-3 rounded-full text-[11px] ${(activeindex==1)?"bg-white text-black":null}`} onClick={() => setactiveindex(1)}>Sweatshirts</h1>
        <h1 className={`flex-auto w-fit text-center hover:${(activeindex!=2)?"bg-white/40 text-white/70":""} px-4 py-3 rounded-full text-[11px] ${(activeindex==2)?"bg-white text-black":null}`} onClick={() => setactiveindex(2)}>Joggers</h1>
        <h1 className={`flex-auto w-fit text-center hover:${(activeindex!=3)?"bg-white/40 text-white/70":""} px-4 py-3 rounded-full text-[11px] ${(activeindex==3)?"bg-white text-black":null}`} onClick={() => setactiveindex(3)}>Dropshoulder</h1>
    </div>)
}