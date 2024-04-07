"use client"
import {useRef} from 'react'
import React from 'react'
import Image from 'next/image'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle, 
  } from "@/components/ui/sheet"
import { useShoppingCart } from 'use-shopping-cart'
import { Button } from './ui/button'
import MobilePayment from './MobilePayment'

const ShoppingCardModule = () => {
    const {cartCount,shouldDisplayCart,handleCartClick,cartDetails,removeItem,totalPrice,redirectToCheckout,setItemQuantity} = useShoppingCart()
    const items = useRef()




    async function handleCheckoutClick(event:any) {
        event.preventDefault()
        try{
          const result = await redirectToCheckout()
          if(result?.error){
            console.log('result')
          }
        }catch(error){
          console.log(error)
        }
    }

    
function getValue(e:any,entry:any){
  e.preventDefault()
  const value = parseInt(e.target.value)

if(value > 5000){
  e.target.value = 5000
  return parseInt(e.target.value)
}else if(value < 1){
  e.target.value = 1
  return parseInt(e.target.value)
}

  setItemQuantity(entry.price_id,value)
}
    

  return (
   
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className='sm:max-w-lg w-[100vw] '>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        
       <div className='h-full flex flex-col justify-between'>
            <div className='mt-8 flex-1 overflow-auto'>
                <ul className='-my-6 divide-y divide-gray-200'>

                {
                    cartCount === 0 ? (
                            <h1 className='py-6'>You dont have any item</h1>
                    ):(
                           <>    
                            {Object.values(cartDetails ?? {}).map((entry) => (
                                <li key={entry.id} className='flex py-6'>
                                    <div className='h-24 w-24 flex-shrink-0 max-sm:w-[4rem] max-sm:h-[4rem] overflow-hidden rounded-md border-none border-gray-200'>
                                       <Image src={entry.image!} alt='product image' width={100} height={100}/>
                                    </div>

                                    <div className='ml-4 flex flex-1 flex-col mt-3 '>
                                        <div>
                                            <div className='flex justify-between text-base font-medium text-gray-900'>
                                                <h3 className='max-sm:text-[0.8rem]'>{entry.name}</h3>
                                                <p className='ml-4'>${entry.price}</p>
                                            </div>
                                            <p className='mt-1 text-sm text-gray-500 line-clamp-2'>
                                                {entry.description}
                                            </p>
                                        </div>
                                        <div className='flex flex-1 items-end justify-between text-sm'>
                                       
                                        <div className='relative top-1 flex justify-between min-w-[60%]  mt-2'>
                                        <p className='text-gray-500 font-bold max-sm:text-[0.6rem]'>Max:5000  Min:1 <br className='max-sm:hidden'/> QTY: {entry.quantity}</p>
                                        <input type='number'  className='border w-[4rem] mx-1 rounded-sm text-center px-1 border-primary outline-none max-h-[2rem] max-sm:h-[1.5rem]' max={'5000'} min={'1'} value={entry.quantity}  onChange={(e) => getValue(e,entry)}/>
                                        </div>
                                        
                                        <div className='flex'>
                                        <button 
                                        type='button' 
                                        className='font-medium text-primary hover:text-primary/80 max-sm:text-[0.6rem] max-sm:mb-3'
                                        onClick={() => removeItem(entry.price_id)}
                                        >
                                            Remove
                                        </button>
                                    </div>  
                                    </div>
                                    </div>

                                  


                                </li>
                            ))}
                           </>
                    )
                }

                </ul>
            </div>

                <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                    <div className='flex justify-between text-base font-medium text-gray-900'>
                        <p>Subtotal:</p>
                        <p>${totalPrice}</p>
                    </div>

                    <p className='mt-0.5 text-sm text-gray-500'>Shipping and taxes are calculated at checkout</p>

                    <div className='mt-6'>
                        <Button onClick={handleCheckoutClick} className='w-full'>
                                Checkout
                        </Button>
                       {/*  <MobilePayment/> */}
                    </div>

                    <div className='mt-6 flex justify-center text-center text-sm text-gray'>
                        <p>
                          OR{' '} 
                          <button className='font-medium text-primary hover:text-primary/80' onClick={() => handleCartClick()}>
                            Continue shopping
                          </button>
                        </p>
                    </div>

                </div>

       </div>
       
      </SheetContent>
    </Sheet>

  )
}

export default ShoppingCardModule