import React from 'react'
import { client} from '@/sanity-ecom/lib/sanity'
import { simplifiedProduct } from './interface'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

async function getData(){
    
const query = '*[_type == "product"][0...5] | order(_created desc){ _id, price,name,"slug":slug.current,"categoryName":category -> name,"imageUrl":images[0].asset -> url}'

const data = await client.fetch(query)
return data

}
const Newest = async () => {
    const data:simplifiedProduct[] = await getData()
 
    return (
    <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-5'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold tracking-tight text-gray-900'>Our Newest products</h1>
                
                <Link href={'/all'} className='text-primary flex items-center gap-x-1'>
                    See All{" "}
                    <span>
                        <ArrowRight/>
                    </span>
                </Link>
            </div>
            <div className='mt-6 grid grid-cold-1 gap-y-10 gap-x-3 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {
                    data.map((product,index) => (
                        <div className='group relative shadow-md p-3' key={index}>
                            <Link href={`/product/${product.slug}`}>
                            <div className='aspect-square w-full overflow-hidden rounded-md group-hover:opacity-75'>
                                <Image 
                                src={product.imageUrl}
                                alt='Product image'
                                className='w-full h-full object-contain object-center lg:h-full lg:w-full'
                                width={300}
                                height={300}
                                />
                            </div>
                            </Link> 
                            
                            <div className='mt-4 flex justify-between'>
                                <div>
                                    <h3 className='text-sm text-gray-700'>
                                        <Link href={`/product/${product.slug}`}>
                                            {product.name}
                                        </Link>
                                    </h3>
                                    <p className='mt-1 text-sm text-gray-500'>{product.categoryName}</p>
                                </div>
                                <p className='text-md font-medium text-gray-900'>${product.price}</p>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Newest