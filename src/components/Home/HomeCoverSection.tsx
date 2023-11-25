import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Tag from '../Elements/Tag'

const HomeCoverSection = () => {
  return (
    <div className='w-full inline-block'>
      <article className='flex flex-col items-start justify-end mx-10 relative h-[85vh]'>
        <div
          className='absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b 
          from-transparent from-0% to-dark/90 rounded-3xl z-0'
        />
        <Image
          src={
            'https://c.wallhere.com/photos/ef/fc/china_city_travel_light_skyline_architecture_night_digital-1123468.jpg!d'
          }
          alt=''
          fill
          className='w-full h-full object-center object-cover rounded-3xl -z-10'
        />
        <div className='w-3/4 p-6 sm:p-6 md:p-12 flex flex-col items-start justify-center z-0 text-light'>
          <Tag link='' name='productivity' />
          <Link href={'/'} className='mt-6'>
            <h1 className='font-bold capitalize text-[20px] sm:text-[20px] md:text-3xl line-clamp-1'>
              <span className='underSlide'>Blog title</span>
            </h1>
          </Link>
          <p className='mt-4 text-[16px] sm:text-[16px] line-clamp-2 md:text-xl font-in'>this is blog description</p>
        </div>
      </article>
    </div>
  )
}

export default HomeCoverSection
