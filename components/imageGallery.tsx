"use client"

import { urlfor } from "@/sanity-ecom/lib/sanity"
import Image from "next/image"
import { useState } from "react"

interface iAppProps{
    images:any
}

export  default function ImageGallery({images}:iAppProps){
    const [bigImage,setBigImage] = useState(images[0])

    const handleSmallImageClick = (image:any) => (
        setBigImage(image)
    )

    return(
        <div className="grid gap-4 lg:grid-cols-5">
            <div className="order-last flex gap-4 lg:order-none lg:flex-col">
                {images.map((image:any,index:any) =>(
                    <div key={index} className="overflow-hidden rounded-lg bg-gray-100 shadow-md ">
                        <Image 
                        src={urlfor(image).url()} 
                        width={200} height={200} 
                        alt="Photo" 
                        className="h-full w-full object-contain object-center shadow-md cursor-pointer"
                        onClick={() => handleSmallImageClick(image)}
                        />
                    </div>
                ))}
            </div>

                <div className="relative overflow-hidden rounded-lg lg:col-span-4 h-[560px] shadow-md">
                        <Image
                            src={urlfor(bigImage).url()}
                            alt="Photo"
                            width={500}
                            height={500}
                            className="h-full w-full object-contain object-center"
                        />

                        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
                            Sale
                        </span>
                </div>

        </div>
    )
}