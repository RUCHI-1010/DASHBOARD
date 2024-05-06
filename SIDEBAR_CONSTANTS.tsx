import { SideNavItemGroup} from "./types/types";
import { BsHouseDoor, BsKanban, BsListUl, BsEnvelope ,BsGear,BsQuestionCircle } from "react-icons/bs";



export const SIDENAV_ITEM: SideNavItemGroup[]=[

    {
        title: "Dashboard",
        menuList:[{
            title: "Dashboard",
            path:"/",
            icon: <BsHouseDoor size={20}/>
        },]
    },
    
    {
        title: "Manage",
        menuList:[{
            title: "Products",
            path:"/products",
            icon: <BsKanban size={20}/>,
            submenu: true,
            subMenuItems: [
                {title: 'All', path: '/products'},
                {title: 'New', path: '/products/new'},
            ],
        },
        {
            title: "Orders",
            path:"/orders",
            icon: <BsListUl size={20}/>,
        },
        {
            title: "Feedbacks",
            path:"/feedbacks",
            icon: <BsEnvelope size={20}/>,
        },]
    },
    {
        title: "Others",
        menuList: [{
            title: "Account",
            path:"/account",
            icon: <BsGear size={20}/>,
        },
        {
            title: "Help",
            path:"/help",
            icon: <BsQuestionCircle size={20}/>,
        },]
    }


]