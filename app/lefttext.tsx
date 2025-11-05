"use client";
import {Montserrat} from "next/font/google";
import React,{useRef, useEffect} from "react";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: '400'
})

export default function LeftText(){
    const container = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        setTimeout(() => {
            container.current?.classList.remove("-translate-x-50","opacity-0")
        },200)
    },[])


    return(<div className={`${montserrat.className} -translate-x-50 opacity-0 transition-all duration-800 text-6xl font-sans text-white`} ref={container}>Wear your Style with Confort</div>)
}