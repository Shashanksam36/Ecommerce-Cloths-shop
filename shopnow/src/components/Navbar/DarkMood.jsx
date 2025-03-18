import React, { useState } from 'react'
import Light from "../../assets/website/light-mode-button.png"
import Dark from "../../assets/website/dark-mode-button.png"

function DarkMood() {
  const[theme,setTheme]=React.useState(
    localStorage.getItem('theme')?localStorage.getItem('theme'):"light"
  );
  const element =document.documentElement; // html element
  React.useEffect(()=>{
    if(theme==='dark'){
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
    }
    else{
      element.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
  },[theme])
  // const changetheme=()=>{
  //   if(theme==="light")
  //     setTheme("dark")
  //   else
  //   setTheme("ligth")
  // }
  return (
    <div className='relative'>
      <img src={Light}
      onClick={()=>setTheme(theme==="light"?"dark":"light")}
      className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0
        z-10 ${theme==="dark"?"opacity-0":"opacity-100"}`}
        />
        <img src={Dark}
      onClick={()=>setTheme(theme==="light"?"dark":"light")}
      className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 `}
        />
        </div>
  )
}
export default DarkMood
      {/* <img src={theam} alt='LightMood'
      className='w-12 cursor-pointer text-center drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] 
      transition-all duration-300 hover:drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]' 
      onClick={()=>{
        const element=document.documentElement
        if(theam==Lightpng)
        {
          let a=localStorage.getItem("theam")?localStorage.getItem("theam"): "dark"
          return settheam(Darkpng)
        }
        else{
          let a=localStorage.getItem("theam")?localStorage.getItem("theam"): "Light"
          return settheam(Lightpng)
        }
      }}/> */}
      
      {/* <img src={theam} alt='DarkMood'
      className='w-12 cursor-pointer text-center drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] 
      transition-all duration-300 hover:drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]'onClick={()=>{
        if(theam==="Darkpng")
          {
            return settheam("Lightpng")
          }
      }}/> */}
    {/* <select className='rounded-full bg-transparent text-center text-black 
    hover:bg-gray-900 hover:text-white drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)]
    transition-all duration-300'>
        <option>Light</option>
        <option>Dark</option>
    </select> */}
    