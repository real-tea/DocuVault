import { EyeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState , useEffect } from "react";
import Link from "next/link";


export function ThumbnailImage({
    src = null,
    document_id
} : {
    src ? : string | null;
    document_id : string;
}){
    const [error , setError] = useState<React.SyntheticEvent<
    HTMLImageElement,
    Event
    > |null>(null);


    useEffect(()=>{
        setError(null);
    },[src])

    return(
        <Link
        className="relative flex h-[72px] w-[137px] shrink-0 rounded-md border object-cover"
        href={`/preview/${document}`}
        target="_blank"></Link>
    )
}