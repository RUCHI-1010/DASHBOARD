'use client';

import { SIDENAV_ITEM } from "@/SIDEBAR_CONSTANTS"
// import { SideBarMenuItem } from "./sidebar-menu-items"
import classNames from "classnames";
import { useSideBarToggle } from '@/hooks/use-sidebar-toggle';
import  SideNavMenuGroup  from "./sidebar-menu-group";

export default function Sidebar() {
   
   const { toggleCollapse } = useSideBarToggle();

   const asideStyle = classNames("sidebar overflow-y-auto overflow-x-auto fixed bg-[black] text-gray-500 z-[99999] h-full shadow-lg shadow-gray-900/20 transition duration-300 ease-in-out w-[20rem]",
   {
      ["sm:w-[5.4rem] sm:left-0 left-[-100%]"]:toggleCollapse,
      ["w-[20rem]"]:!toggleCollapse
  }

   )
   
    return(
       <aside className={asideStyle}>
          <div className="sidebar-top relative flex items-center py-5 px-3.5">
             <h3 className={classNames("pl-2 font-bold text-2xl text-[#e6e9ee] min-w-max",
               {hidden: toggleCollapse})}>

               DASHBOARD
            </h3>
            
          </div>
          <nav className="flex flex-col gap-2 transition duration-300 ">
            <div className="flex flex-col gap-2 px-4">
            {
               SIDENAV_ITEM.map((item, index)=>{
                  return <SideNavMenuGroup key={index} menuGroup={item} ></SideNavMenuGroup>
               })
            }
            </div>
          </nav>
       </aside>
    )
};
