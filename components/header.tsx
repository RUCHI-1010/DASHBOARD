'use client';
import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import React from 'react';
import { BsList } from "react-icons/bs"
import classNames from 'classnames';
import { UserNav } from "./UserNav";
export default function Header() {

   const { toggleCollapse, invokeToggleCollapse } = useSideBarToggle();
   const sidebarToggle = () => {
       invokeToggleCollapse();
   }
   const headerStyle= classNames("bg-[black] fixed w-full z-[99998] px-4 shadow-sm shadow-slate-500/40 ",
   {
         ["sm:pl-[20rem]"]:!toggleCollapse,
         ["sm:  pl-[5.6rem]"]:toggleCollapse
   }
)

    return(
        <header className={headerStyle}>
          <div className= "flex items-center justify-between h-16">
             <button onClick={ sidebarToggle } className="order-2 sm:order-1 bg-[#3a3f48] text-[white] hover:bg-[#6e768e] ml-3 w-[20px] h-[20px] pt-[2px] shadow-md shadow-black/10 transition duration-300 ease-in-out flex item-center justify-center">
                <BsList></BsList>
             </button>
             <div className=" order-1 sm:order-2 h-10 w-10 rounded-full bg-[#3a3f48] flex items-center justify-center text-center">
             <UserNav />
             </div>
          </div>
        </header>
    )
};
