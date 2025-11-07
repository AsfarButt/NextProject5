"use client";
import React,{useState} from "react";
import Logo from "./logo";
import MainHeader from "./mainheader";
import LeftText from "./lefttext";
import BuyNow from "./buynow";
import MainObject from "./mainobject";
import ArtificialScrollar2 from "./artificialscrollar2";


export default function Page(){         //At the end of program change this layout to relative and flex type objects instead of this absolute bullsiht
  const [activeindex, setactiveindex] = useState(0);

  return(<div className="relative w-screen h-screen overflow-hidden">

    <div className="absolute inset-0 bg-[radial-gradient(at_center,rgba(50,50,0,0.8),rgba(0,0,0,0.9))] brightness-120 mix-blend.difference" />

    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-160 h-140">
    <Logo />
    </div>
    {/* At the end of program change this layout to relative and flex type objects instead of this absolute bullsiht */}

    <div className="absolute w-full h-auto top-8" >
      <MainHeader ClothingChange={(activeindex) => {console.log("Activeindex From Home Page: ",activeindex); setactiveindex(activeindex)}}/>
    </div>
{/* At the end of program change this layout to relative and flex type objects instead of this absolute bullsiht */}
    <div className="absolute top-[20%] left-[2%] w-[40%] max-w-100">
      <LeftText />
    </div>

    <div className="absolute w-[20%] max-w-90 h-100 top-[50%] right-12">
      <BuyNow />
    </div>

    <div className="absolute w-150 h-150 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <MainObject ActiveClothingIndex={activeindex}/>
    </div>

    {/* <div className="absolute top-[50%] left-[50%] w-150 h-150 bg-pink-800/70 translate-x-[-50%] translate-y-[-50%]">
      <ArtificialScrollar2 />
    </div> */}

{/* At the end of program change this layout to relative and flex type objects instead of this absolute bullsiht */}
  </div>)
}
// At the end of program change this layout to relative and flex type objects instead of this absolute bullsiht
 


// At the end of program change this layout to relative and flex type objects instead of this absolute bullsiht