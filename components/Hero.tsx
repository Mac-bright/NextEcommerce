import React from 'react'
import Image from 'next/image'
import { client, urlfor } from '@/sanity-ecom/lib/sanity'
import Link from 'next/link'
import { Button } from './ui/button'

async function getData(){
    const Query = "*[_type == 'heroImage'][0]"

    const data = await client.fetch(Query)

    return data
}

const Hero = async () => {
    const data = await getData()
    
  return (
    <section className='mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8 '>
        <div className='mb-8 flex flex-wrap justify-center md:mb-16  h-auto shadow-2xl '>

            <div className=' flex w-full  relative  md:h-[50vw] max-sm:h-[50vh] h-[45vw] lg:h-[38vw] '>
                <div className='relative  z-10  overflow-hidden min-w-[100%] rounded-lg bg-gray-100 shadow-lg '>
                    <Image
                        src={urlfor(data.image).url()}
                        alt='Great Photo'
                        className='h-full w-full object-cover object-center'
                        width={500}
                        height={500}
                        priority
                    />
                </div>

                <div className='mb-6 flex w-full flex-col absolute justify-center  min-h-[100%] pt-4 lg:pb-24  z-10 pl-4 '>
                    <h1 className='mb-4 text-full font-bold text-block text-3xl text-gray-300 sm:text-5xl md:mb-8 md:text-6xl'>Top fashion for a top price</h1>
                    <p className='max-w-md leading-relaxed max-md:text-sm text-white xl:text-lg '>we sell only the most exclusive add high quality products for you. we are the best so come shop with us</p>
                    <Link href={'/all'}  className='mt-8'>
                        <Button>
                            Explore
                        </Button>
                    </Link>
                </div>

            </div>
        </div >

        <div className='flex flex-col items-center justify-between gap-8 md:flex-row'>
            <div className='flex h-12 w-64 divide-x overflow-hidden rounded-lg border'>
                    <Link href={'/Men'} className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>
                        Men                    
                    </Link>
                    <Link href={'/Women'} className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>
                        Women                    
                    </Link>
                    <Link href={'/Teen'} className='flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200'>
                        Teen                    
                    </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero