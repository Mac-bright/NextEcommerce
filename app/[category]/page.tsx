import { client } from '@/sanity-ecom/lib/sanity'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

async function getdata(category:string) {

const query = `*[_type == 'product' && category -> name == '${category}']
{_id,
  "imageUrl": images[0].asset -> url,
    price,
    name,
    "slug":slug.current,
    "categoryName": category -> name
}`
 
const data = await client.fetch(query);
return data
}

const  page = async ({params}:{params:{category:string}}) => {
    const data = await getdata(params.category)

  return (
    <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-5'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-bold tracking-tight text-gray-900'>Our Newest products</h1>
            </div>
            <div className='mt-6 grid grid-cold-1 gap-y-10 gap-x-3 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {
                    data.map((product:any,index:number) => (
                        <div className='group relative' key={index}>
                            <div className='aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75'>
                                <Image 
                                src={product.imageUrl}
                                alt='Product image'
                                className='w-full h-full object-cover object-center lg:h-full lg:w-full'
                                width={300}
                                height={300}
                                />
                            </div>
                            
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

export default page