
"use client";
import React,{useRef, useEffect, useState} from "react";




export default function MainObject({ActiveClothingIndex}:{ActiveClothingIndex: number}){       //make json for the arrays of hoodies sweatshirts joggers and dropshoulders all of them
    const scrollar = useRef<HTMLDivElement | null>(null);
    const isScrolling = useRef(false);
    const [scrollposition, setscrollposition] = useState(0);
    const activeindex = useRef(0);
    const childcount = useRef(0);
    const [scaleposition, setscaleposition] = useState<string[]>([]);
    const [clothingname, setclothingname] = useState("");

    useEffect(() => {switch(ActiveClothingIndex){
        case 0:  setclothingname("hoodies");  break;
        case 1:  setclothingname("sweatshirts");  break;
        case 2:  setclothingname("joggers");  break;
        case 3:  setclothingname("dropshoulders");  break;
    }},[ActiveClothingIndex])

    function ScrollLeft(){
        console.log('activeindex: ',activeindex.current);
        console.log('childcount: ',childcount.current);
        if(activeindex.current > 0){
                activeindex.current--;
                console.log("left scroll");
                setscrollposition((prev) => prev+600);

                const array1 = Array(childcount.current).fill("scale-0");
                array1[activeindex.current] = "scale-100";
                // console.log(array1);
                setscaleposition(array1);
        }
    }
    function ScrollRight(){
        console.log('activeindex: ',activeindex.current);
        console.log('childcount: ',childcount.current);
        if(activeindex.current < childcount.current-1){
                activeindex.current++;
                console.log("right scroll");
                setscrollposition((prev) => prev-600);

                const array1 = Array(childcount.current).fill("scale-0");
                array1[activeindex.current] = "scale-100";
                // console.log(array1);
                setscaleposition(array1);
        }
    }

    useEffect(() => {
        const element = scrollar.current;
        if(!element){
            return ;
        }
        const childelements = element.querySelectorAll("div");
        childcount.current = childelements.length;

        const array1 = Array(childcount.current).fill("scale-0");
        array1[activeindex.current] = "scale-100";
        // console.log("initial scaleing: ",array1);
        setscaleposition(array1);

        const ScrollFunc = (e: WheelEvent) => {
            if(isScrolling.current){
                return ;
            }
            isScrolling.current = true;
            setTimeout(() => {isScrolling.current = false},500);
            console.log(e.deltaY);
            if(e.deltaY < 0){
                ScrollLeft();

            }
            else if(e.deltaY > 0){
                ScrollRight();

            }
            console.log("Active index: ",activeindex.current);
        }
        element.addEventListener("wheel",ScrollFunc);

        return () => element.removeEventListener("wheel",ScrollFunc);
    },[])

    useEffect(() => {console.log("scale position: ",scaleposition)},[scaleposition]);


    return(<div className="relative w-full h-full">
        <div className="relative w-full h-full">
        <div className="relative w-full h-full flex flex-row transition-transform duration-600" style={{transform: `translateX(${scrollposition}px)`}} ref={scrollar}>
                <div className={`flex-none relative w-150 h-full text-8xl transition-all duration-600 ease-out text-white text-center bg-cyan-600/40 brightness-80 ${scaleposition[0]}`}>{clothingname}1</div>
                <div className={`flex-none relative w-150 h-full text-8xl transition-all duration-600 ease-out text-white text-center bg-red-600/40 brightness-80 ${scaleposition[1]}`}>{clothingname}2</div>
                <div className={`flex-none relative w-150 h-full text-8xl transition-all duration-600 ease-out text-white text-center bg-yellow-600/40 brightness-80 ${scaleposition[2]}`}>{clothingname}3</div>
                <div className={`flex-none relative w-150 h-full text-8xl transition-all duration-600 ease-out text-white text-center bg-green-600/40 brightness-80 ${scaleposition[3]}`}>{clothingname}4</div>
                <div className={`flex-none relative w-150 h-full text-8xl transition-all duration-600 ease-out text-white text-center bg-emerald-600/40 brightness-80 ${scaleposition[4]}`}>{clothingname}5</div>
                <div className={`flex-none relative w-150 h-full text-8xl transition-all duration-600 ease-out text-white text-center bg-gray-600/40 brightness-80 ${scaleposition[5]}`}>{clothingname}6</div>
                <div className={`flex-none relative w-150 h-full text-8xl transition-all duration-600 ease-out text-white text-center bg-blue-600/40 brightness-80 ${scaleposition[6]}`}>{clothingname}7</div>
                <div className={`flex-none relative w-150 h-full text-8xl transition-all duration-600 ease-out text-white text-center bg-orange-600/40 brightness-80 ${scaleposition[7]}`}>{clothingname}8</div>
                <div className={`flex-none relative w-150 h-full text-8xl transition-all duration-600 ease-out text-white text-center bg-cyan-600/40 brightness-80 ${scaleposition[8]}`}>{clothingname}9</div>
                <div className={`flex-none relative w-150 h-full text-8xl transition-all duration-600 ease-out text-white text-center bg-purple-600/40 brightness-80 ${scaleposition[9]}`}>{clothingname}10</div>
        </div>
        </div>
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[120%] h-18 flex justify-between -z-1">
        <button onClick={() => ScrollLeft()} className="text-4xl text-white mix-blend-difference">〈</button>
        <button onClick={() => ScrollRight()} className="text-4xl text-white mix-blend-difference">〉</button>
        </div>
    </div>)
}