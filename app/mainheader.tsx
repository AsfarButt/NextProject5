import {Wallpoet} from "next/font/google";
import Header from "./header";

const ephesis = Wallpoet({
subsets:['latin'],
weight:'400'
})


export default function MainHeader(){


    return(<div className="relative w-full h-full flex flex-row justify-between items-top">
        <div className="relative ml-12 w-12 flex flex-col items-center">
            <div className="relative w-12 h-12 mask-[url('/shirt.png')] bg-white mask-cover mask-center" />
            <h1 className={` ${ephesis.className} text-white/90 brightness-90 text-center leading-3 pt-2`}>House of Koala</h1>
        </div>
        <div className="relative w-[40%] max-w-120 h-10">
        <Header />
        </div>
        <div className="relative w-10 h-10 mr-6 rounded-full flex justify-center items-center bg-black/30 hover:bg-white/40 group">
            <div className="relative w-4 h-4 bg-white mask-[url('/microphone.png')] pointer-events-none group-hover:bg-black/80 mask-cover mask-center" />
        </div>
    </div>)
}