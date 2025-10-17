import {BsChevronLeft, BsChevronRight} from "react-icons/bs"

export default function HeroSlider() {
  return (
    <section className="bg-[url(./assets/slider-bg.jpg)] w-full h-[44.8rem]  bg-no-repeat bg-cover font-montserrat flex flex-col justify-center items-center">
      <div className="w-full flex justify-between items-center flex-wrap  text-white mt-35">
        <BsChevronLeft size={60} className="btn-prev min-w-[60px] min-h-[60px] ml-5 cursor-pointer flex hover:scale-130 transition-all duration-300"/>
        <div className="flex flex-col justify-center gap-6 text-white max-w-[57.5rem] mr-[57.5rem] mt-17">
          <h5 className="font-bold text-base">SUMMER 2020</h5>
          <h1 className="font-bold text-[3.63rem]">NEW COLLECTION</h1>
          <h4 className="font-medium text-[1.25rem] max-w-[23.5rem]">We know how large objects will act, but thing on a small scale.</h4>
          <button className="text-white bg-[#2DC071] w-[13.8rem] h-[3.88rem] font-bold text-2xl hover:bg-[#2DAE61]  transition-all duration-500">SHOP NOW</button>
        </div>
        <BsChevronRight size={60} className="btn-next min-w-[60px] min-h-[60px] mr-5 cursor-pointer flex hover:scale-130 transition-all duration-300"/>       
      </div>
      <div className="flex gap-0.5 mt-35">
        <button className="w-15.5 h-2.5 bg-white cursor-pointer" aria-current="true"></button>
        <button className="w-15.5 h-2.5 bg-white opacity-60 cursor-pointer" aria-current="true"></button>        
      </div>
    </section>
  );
}