"use client"

import React from 'react'
import { Button } from './ui/button'
import { useShoppingCart } from 'use-shopping-cart'
import { urlfor } from '@/sanity-ecom/lib/sanity'
import { ProductCart } from './AddToBag'

const CheckOutNow = ({name,description,price,currency,image,price_id}:ProductCart) => {
    const {checkoutSingleItem} = useShoppingCart()

    async function buyNow(priceId:string){
      const respond = checkoutSingleItem(priceId)
      const data = await respond
      console.log(data.json())
    }

    
    const product = {
        name:name,
        description:description,
        price:price,
        currency:currency,
        image:urlfor(image).url(),
        price_id:price_id
    }
  return (
    <Button onClick={() => { 
      buyNow(product.price_id)
    }}>
        Checkout Now
    </Button>
  )
}

export default CheckOutNow