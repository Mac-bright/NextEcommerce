import AddToBag from '@/components/AddToBag'
import CheckOutNow from '@/components/CheckoutNow'
import ImageGallery from '@/components/imageGallery'
import { fullProduct } from '@/components/interface'
import { Button } from '@/components/ui/button'
import { client } from '@/sanity-ecom/lib/sanity'
import { Star, Truck } from 'lucide-react'
import React from 'react'

async function getData(slug:string) {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0]{
  _id,
    images,
    price,
    price_id,
    name,
    description,
    'slug':slug.current,
    'categoryName':category -> name
    }`

    const data = await client.fetch(query)

    return data
}

const productPage = async ({params}:{params:{slug:string}}) => {
  const data:fullProduct = await getData(params.slug)
 

  return (
    <div className='bg-white'>
        <div className='mx-auto max-w-screen-xl px-4 md:px-4'>
            <div className='grid gap-8 md:grid-cols-2'>
                <ImageGallery images={data.images}/>

                <div className='md:py-8'>
                  <div className='mb-8 md:mb-3'>
                      <span className='mb-0.5 inline-block text-gray-500'>
                        {data.categoryName}
                      </span>
                      <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>
                        {data.name}
                      </h2>
                  </div>

                  <div className='mb-6 flex items-center gap-3 md:mb-10'>
                    <Button className='rounded-full gap-2'>
                      <span className='text-sm'>4.2</span>
                      <Star className='w-5 h-5'/>
                    </Button>
                    <span className='text-sm text-gray-500 transition duration-100'>
                      5s Ratings
                    </span>
                  </div>

                <div className='mb-4'>
                  <div className='flex items-end gap-2'>
                    <span className='text-xl font-bold text-gray-800 md:text-2xl'>
                      ${data.price}
                    </span>
                    <span className='mb-0.5 text-red-500 font-bold line-through'>
                        ${100}
                    </span>
                  </div>

                  <span className='text-sm text-gray-500'>
                      Incl, vat plus shipping
                  </span>
                </div>

                <div className='mb-6 flex items-center gap-2 text-gray-500'>
                    <Truck className='w-6 h-6'/>
                    <span className='text-sm'>
                      2-4 Day Shipping
                    </span>
                </div>

                <div className='flex gap-2'>
                  <AddToBag
                    currency="USD"
                    description={data.description}
                    image={data.images[0]}
                    name={data.name}
                    price={data.price}
                    price_id={data.price_id}
                    key={data._id}
                  />
                  <CheckOutNow
                    currency="USD"
                    description={data.description}
                    image={data.images[0]}
                    name={data.name}
                    price={data.price}
                    price_id={data.price_id}
                    key={data._id}
                  />
                </div>

                <p className='mt-12 text-base text-gray-500 tracking-wide'>
                    {data.description}
                </p>

                </div>
            </div>
        </div>
    </div>
  )
}

export default productPage