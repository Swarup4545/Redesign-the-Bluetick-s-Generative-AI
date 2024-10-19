import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
const BackToTop = () => {
    const [backToTopButton,setBackToTopButton] =useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setBackToTopButton(true);
            }else{
                setBackToTopButton(false);
            }
        });
    },[]);
    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    };
  return (
    <div>
      {backToTopButton && (<span className='font-thine text-xl flex fixed right-[-40px] mt-[450px] rotate-90 z-100' onClick={scrollUp}><div className='bg-black h-[2px] w-[40px] mr-5 mt-3'> </div>SCROLL TOP</span>)}
    </div>
  )
}

export default BackToTop
