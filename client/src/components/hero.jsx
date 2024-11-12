import React, { useEffect, useState } from "react";
import { hero } from "../data/hero";
const Hero = () => {
    const [heroData,setHeroData] = useState(hero[0])
    let counter = 1

    const startHeroAnimation = () => {
        setInterval(() => {
            setHeroData(hero[counter]);
            if (counter == hero.length-1) {
                counter = 0
                
            }
            else{
                ++counter 
            }
        }, 4000);
    }
    useEffect(() =>{
        startHeroAnimation()
    },[])
  return (
    <div className=" flex py-8 items-center px-4 container mx-auto bg-indigo-600 rounded-xl">
      <div className="flex-1">
        <h2 className="text-emerald-200  text-6xl font-black  uppercase tracking-wider max-w-2xl leading-[110%]">
         {heroData.title}
        </h2>
        <p className=" mt-6 text-emerald-200  text-lg font-medium  uppercase tracking-wider max-w-xl leading-[110%]">
         {heroData.feature.memory} <span>{heroData.feature.color}</span>
        </p>
        <div className="flex gap-4 mt-4">
          <button className="py-2 px-6">Shop Now!</button>
          <button className="py-2 px-6 duration-200 transition-all bg-white rounded-md text-emerald-900 font-semibold hover:bg-emerald-500">
            More İnfo..
          </button>
        </div>
      </div>
      <div className="flex-1 rounded-3xl  overflow-hidden">
        <img
          className="w-full h-full max-h-96 object-contain  transition-all duration-500 hover:scale-105"
            src={heroData.img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
