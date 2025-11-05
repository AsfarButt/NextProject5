import Logo from "./logo";
import MainHeader from "./mainheader";
import LeftText from "./lefttext";
import BuyNow from "./buynow";
import MainObject from "./mainobject";


export default function Page(){         //At the end of program change this layout to relative and flex type objects instead of this absolute bullsiht


  return(<div className="relative w-screen h-screen overflow-hidden">

    <div className="absolute inset-0 bg-[radial-gradient(at_center,rgba(50,50,0,0.8),rgba(0,0,0,0.9))] brightness-120" />

    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-160 h-140">
    <Logo />
    </div>
    {/* At the end of program change this layout to relative and flex type objects instead of this absolute bullsiht */}

    <div className="absolute w-full h-auto top-8" >
      <MainHeader />
    </div>
{/* At the end of program change this layout to relative and flex type objects instead of this absolute bullsiht */}
    <div className="absolute top-[20%] left-[2%] w-[40%] max-w-100">
      <LeftText />
    </div>

    <div className="absolute w-[20%] max-w-90 h-100 top-[50%] right-12">
      <BuyNow />
    </div>

    <div className="absolute w-200 h-auto top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      <MainObject />
    </div>

{/* At the end of program change this layout to relative and flex type objects instead of this absolute bullsiht */}
  </div>)
}
// At the end of program change this layout to relative and flex type objects instead of this absolute bullsiht
 


// At the end of program change this layout to relative and flex type objects instead of this absolute bullsiht