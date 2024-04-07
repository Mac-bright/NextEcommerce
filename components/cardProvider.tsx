"use client"

import React,{ReactNode} from 'react'
import { CartProvider } from 'use-shopping-cart'

function cardProvider({children}:{children:ReactNode}) {
  return (
    
    <CartProvider
        mode='payment'
        cartMode='client-only'
        stripe={process.env.NEXT_PUBLIC_STRIPE_KEY!}
        successUrl='http://localhost:3000/stripe/success'
        cancelUrl='http://localhost:3000/stripe/error'
        currency='USD'
        billingAddressCollection={true}
        shouldPersist={true}
        language='en-US'

    >
        {children}
    </CartProvider>
  )
}

export default cardProvider