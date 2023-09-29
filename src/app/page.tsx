import ScrollAnimationSection from '@/components/home/ScrollAnimationSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-screen w-full'>
      <h1 className='text-center font-semibold lg:text-2xl text-lg lg:my-12 my-8'>How people are using OSO Search</h1>
     <ScrollAnimationSection/>
     <div className='flex justify-center space-x-1 mx-auto max-w-xl mb-4 px-4'>
      <input placeholder='Enter your email' className='basis-1/2 px-4 py-2 outline-none border border-gray-400 rounded placeholder:text-sm'/>
      <button className='flex justify-center items-center space-x-2 text-white basis-1/2 rounded px-4 py-2 bg-[#8E33FF]'>
        <span className='text-sm'>Join Waitlist</span>
        <Image src="/assets/arrow_forward.png" className='h-4 w-auto' width={50} height={50} alt="arrow"/>
      </button>
     </div>
    </main>
  )
}
