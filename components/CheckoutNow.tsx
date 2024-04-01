"use client"

import React from 'react'
import { Button } from './ui/button'
import { useShoppingCart } from 'use-shopping-cart'
import { urlfor } from '@/sanity-ecom/lib/sanity'
import { ProductCart } from './AddToBag'

const CheckOutNow = ({name,description,price,currency,image,price_id}:ProductCart) => {
    const {checkoutSingleItem} = useShoppingCart()

    function buyNow(priceId:string){
      checkoutSingleItem{priceId}
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
        Add to Cart
    </Button>
  )
}

export default CheckOutNow