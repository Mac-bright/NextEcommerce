import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Newest from '@/components/Newest'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-white pb-6 sm:pb-8 lg:12'>
      <Hero/>
      <Newest/>
    </div>
  )
}
