import Logo from "./logo";


export default function Page(){


  return(<div className="relative w-screen h-screen overflow-hidden">

    <div className="absolute inset-0 bg-[radial-gradient(at_center,rgba(0,0,50,0.8),rgba(0,0,0,0.9))] brightness-120" />

    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-160 h-140">
    <Logo />
    </div>

  </div>)
}