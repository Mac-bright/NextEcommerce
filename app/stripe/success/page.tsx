import React from 'react'
import { CheckCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const page = () => {
  return (
    <div className='h-screen'>
        <div className='mt-32 md:max-w-[50vw] mx-auto'>
            <CheckCheck className='text-green-600 w-16 h-16 mx-auto my-6'/>
            <div className="text-center">
                <h3 className='md:text-2xl text-base text-gray-900'>Payment Done</h3>
                <p>Thank you for your purchase hope you enjoy it</p>
                <p>Have a great day</p>

                <Button className='mt-5'>
                    <Link href={'/'}>Go Back</Link>
                </Button>
            </div>
        </div>
    </div>
  )
}

export default page