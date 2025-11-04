import {Montserrat} from "next/font/google";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: '400'
})



export default function LeftText(){


    return(<div className={`${montserrat.className} text-6xl font-sans text-white`}>Wear your Style with Confort</div>)
}