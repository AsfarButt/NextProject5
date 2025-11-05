"use client"
import React,{useEffect, useRef} from "react";



export default function MainObject(){
    const container = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setTimeout(() => {
        container.current?.classList.remove("scale-0");
        },600)

    },[])


    return(<div className="relative w-full h-full scale-0 transition-all duration-800" ref={container}>
        <img src="/jacket1.png" alt="Jacket1" className="w-full h-full" />
    </div>)
}