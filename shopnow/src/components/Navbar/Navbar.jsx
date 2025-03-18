import React from 'react'
import { FaShopify } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa';
import DarkMood from './DarkMood';
function Navbar() {
    const menu=[{id:1,name:"Home",link:"/#"},
        {id:2,name:"Top Rated",link:"/#services"},
        {id:3,name:"Kids Wear",link:"/#"},
        {id:4,name:"Men's Wear",link:"/#"},
        {id:5,name:"Electronic's",link:"/#"},
    ]
    const DropdownLink=[{id:1,name:"Trending Products",link:"/#"},
        {id:2,name:"Best Selling",link:"/#"},
        {id:3,name:"Top Rated",link:"/#"}
    ]
  return (
    <div className='shadow-md bg-white 
    dark:bg-gray-800 dark:text-white duration-200 
    relative z-40'>
        {/* upper Navbar */}
        <div className='bg-primary/40 py-2 items-center'>
            <div className='container flex
                justify-between items-center'>
                <div>
                    <a href='#' className='font-bold
                text-2xl sm:text-3xl flex gap-2'>
                        {/* <img className='h-8 text-center pt-1'
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEVDGn7eoj9K1p-O-KMK3fYnav5csteTFBsw&s" 
                        alt='Logo'/> */}
                        <FaShopify className='pt-1'/>
                        Shopnow
                    </a>
                </div>
                {/* search*/}
                <div className='flex justify-between gap-4 items-center'>
                    <div className="relative group hidden sm:block">
                        <input type='text' placeholder='search' 
                        className='w-[200px] sm:w-[200px] group-hover:w-[300px] md:hover:w-[250px]
                        transition-full duration-300 rounded-full border border-gray-300 px-2 py-1
                        focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800
                         ' />
                         <IoMdSearch
                         className='text-gray-500
                         group-hover:text-primary 
                         absolute top-1/2 -translate-y-1/2 right-3'/>
                    </div>
                {/* order bar */}
                <button
                onClick={()=>alert("order function is not yet ready")}
                className='bg-gradient-to-r from-primary to-secondary
                transationall duration-200 text-white py-1 px-4 flex rounded-full gap-3 group'>
                    <span
                    className='group-hover:block hidden transition-all duration-200'
                    >Order</span>
                    <FaCartShopping className='text-center text-xl drop-shadow-sm 
                    cursor-pointer text-white'/>
                </button>
                {/* DarkMood transition */}
                <DarkMood/>
                </div>
            </div>
        </div>
        {/* lower Navbar */}
        <div className='flex justify-center'>
            <ul className='sm:flex hidden gap-4 items-center'>
                {menu.map((ele)=>(
                        <li key={ele.id}>
                        <a href={ele.link}
                        className='inline-block hover:text-primary duration-200'>{ele.name}</a>
                        </li>
                ))}
                {/* simple DropdownLink */}
                <li className='group relative cursor-pointer '>
                    <a className='flex items-center gap-[2px] py-2' href='#'>
                        Trending Products
                        <span><FaCaretDown
                        className='transition-all group-hover:rotate-180'/></span>
                    </a>
                    <div className='absolute z-[9999] hidden
                    group-hover:block rounded-md w-[150px]
                    bg-white p-2 text-black shadow-md'>
                        <ul >
                        {DropdownLink.map((ele)=>(
                            <li key={ele.id}>
                                <a className='rounded-md w-full inline-block p-2 hover:bg-primary/20'
                                href={ele.link}>{ele.name}</a>
                            </li>
                        ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar