import ScrollAnimationSection from '@/components/home/ScrollAnimationSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-screen w-full' id="root">
      <h1 className='text-center font-bold lg:text-5xl md:text-4xl text-2xl lg:mt-12 lg:mb-0 mb-20 mt-8'>How people are using OSO Search</h1>
      <ScrollAnimationSection />
      <div className='flex justify-center space-x-2 mx-auto max-w-xl mb-4 px-4'>
        <input placeholder='Enter your email'
          className='lg:basis-7/12 basis-1/2 lg:py-4 py-3 px-5 text-base outline-none border border-black rounded-lg focus-within:ring-1 ring-[#8E33FF]' />
        <button
          className='flex justify-center items-center space-x-2 text-white basis-1/2 rounded-lg lg:py-4 py-3 hover:opacity-90 bg-[#8E33FF]'>
          <span className='lg:text-[22px] md:text-xl text-base'>Join Waitlist</span>
          <Image src="/assets/arrow_forward.png"
            className='h-6 w-auto' width={50} height={50} alt="arrow" />
        </button>
      </div>
    </main>
  )
}
