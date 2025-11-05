"use client"
import React,{useRef, useEffect} from "react";



export default function BuyNow(){
    const ref1 = useRef<HTMLDivElement | null>(null);
    const ref2 = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setTimeout(() => {
            ref1.current?.classList.remove("opacity-0");
            ref2.current?.classList.remove("opacity-0","translate-y-20")
        },200);
    },[])

    return(<div className="relative w-full h-full flex flex-col justify-between">
        <h1 className="line-clamp-10 text-gray-100/60 transition-all duration-800 opacity-0" ref={ref1}>Built for the grind, made for the streets. Our hoodies, jackets, and joggers fuse comfort with attitude — premium fabrics, sharp fits, and no compromises. Whether youre out hustling or chilling lowkey.</h1>
        <div className="relative w-full h-12 bg-white/80 rounded-full border border-white/80 hover:bg-transparent hover:text-white/90 flex justify-center transition-transform duration-800 items-center opacity-0 font-semibold translate-y-20" ref={ref2}>BUY NOW</div>
        </div>)
}