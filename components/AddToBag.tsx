"use client"

import React from 'react'
import { Button } from './ui/button'
import { useShoppingCart } from 'use-shopping-cart'
import { urlfor } from '@/sanity-ecom/lib/sanity'

export interface ProductCart{
    name:string
    description:string
    price:number
    currency:string
    image:any,
    price_id:string
}

const AddToBag = ({name,description,price,currency,image,price_id}:ProductCart) => {
    const {addItem,handleCartClick} = useShoppingCart()
    const product = {
        name:name,
        description:description,
        price:price,
        currency:currency,
        image:urlfor(image).url(),
        price_id:price_id
    }
  return (
    <Button onClick={() => { addItem(product), handleCartClick()}}>
        Add to Cart
    </Button>
  )
}

export default AddToBag