import { AiFillHome } from "react-icons/ai";
import { FaCartPlus,FaEnvelopeOpenText } from "react-icons/fa";
import { IoIosPaper,IoMdHelpCircle,IoMdPeople } from "react-icons/io";

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon:<AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Reports',
        path:'/reports',
        icon:<IoIosPaper/>,
        cName:'nav-text'
    },
    {
        title:'Products',
        path:'/products',
        icon:<FaCartPlus/>,
        cName:'nav-text'
    },
    {
        title:'Team',
        path:'/tean',
        icon:<IoMdPeople />,
        cName:'nav-text'
    },
    {
        title:'Messages',
        path:'/messages',
        icon:<FaEnvelopeOpenText />,
        cName:'nav-text'
    },
    {
        title:'Support',
        path:'/support',
        icon:<IoMdHelpCircle/>,
        cName:'nav-text'
    },
    
]