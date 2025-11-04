import Logo from "./logo";
import MainHeader from "./mainheader";
import LeftText from "./lefttext";


export default function Page(){


  return(<div className="relative w-screen h-screen overflow-hidden">

    <div className="absolute inset-0 bg-[radial-gradient(at_center,rgba(200,200,50,0.8),rgba(0,0,0,0.9))] brightness-120" />

    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-160 h-140">
    <Logo />
    </div>

    <div className="absolute w-full h-auto top-8" >
      <MainHeader />
    </div>

    <div className="absolute top-[20%] left-[2%] w-[40%] max-w-100">
      <LeftText />
    </div>

  </div>)
}