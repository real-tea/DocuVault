"use client"

import { className } from "@/app/_utils/classNames";
import { Popover ,Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";


interface PopOverProps {
    options : {
        name : string , 
        icon : React.ForwardRefExoticComponent<any>;
        optionClick: ()=>void;
        optionClassName ?: string;
    } [];
    panelClassName?:string;
}


export default function PopOver({ options , panelClassName } : PopOverProps){
    return(
        <PopOver className="">
            {({open})=>(
                <div></div>)}

        </PopOver>
    )
}